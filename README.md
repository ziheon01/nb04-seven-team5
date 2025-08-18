# SEVEN 프로젝트

운동 인증 커뮤니티 서비스 SEVEN의 백엔드 프로젝트입니다.

## 🚀 시작하기

### 사전 요구 사항

*   [Node.js](https://nodejs.org/) (v18 이상 권장)
*   [npm](https://www.npmjs.com/)

### 설치 및 실행

1.  **프로젝트 클론**

    ```bash
    git clone <레포지토리_주소>
    cd <프로젝트_폴더>
    ```

2.  **의존성 라이브러리 설치**

    ```bash
    npm install
    ```

3.  **Prisma 클라이언트 생성 및 마이그레이션**

    Prisma 클라이언트를 사용하고 데이터베이스 스키마를 적용하기 위해 다음 명령어를 실행합니다.
    ```bash
    npx prisma migrate dev --name init # 첫 마이그레이션 시
    npx prisma generate
    ```
    (스키마 변경 시 `npx prisma migrate dev`를 다시 실행하고 `npx prisma generate`를 실행해야 합니다.)

4.  **환경 변수 설정**

    프로젝트 루트에 `.env` 파일을 생성하고, 데이터베이스 연결 정보를 담은 `DATABASE_URL`을 설정해야 합니다.
    ```
    # .env 예시
    DATABASE_URL="postgresql://user:password@localhost:5432/mydb?schema=public"
    ```
    (사용자, 비밀번호, 데이터베이스는 PostgreSQL에 미리 생성되어 있어야 합니다. 필요시 `psql`에서 `CREATE USER`, `CREATE DATABASE`, `ALTER ROLE ... CREATEDB`, `GRANT USAGE, CREATE ON SCHEMA public TO ...` 명령어를 사용하세요.)

5.  **애플리케이션 실행**

    *   **개발 모드 (nodemon으로 실행, 코드 변경 시 자동 재시작)**

        ```bash
        npm run dev
        ```

    *   **프로덕션 모드**

        ```bash
        npm start
        ```

    서버는 기본적으로 `http://localhost:3000`에서 실행됩니다.

---

## 💡 프로젝트 아키텍처 및 개발 가이드

본 프로젝트는 확장성과 유지보수성을 위해 **Router - Controller - Service** 계층 구조를 따릅니다. 또한, Node.js의 **ES Modules** 방식을 사용합니다.

### 1. 계층 구조 설명

*   **Router (`src/routers/`):
    *   클라이언트의 요청(HTTP 메서드, URL 경로)을 받아 적절한 Controller 메서드로 연결하는 역할을 합니다.
    *   `app.js`에서 라우터를 임포트하여 사용합니다.
*   **Controller (`src/controllers/`):
    *   Router로부터 요청을 받아 유효성 검사를 수행하고, Service 계층의 메서드를 호출하여 비즈니스 로직을 위임합니다.
    *   클라이언트에게 응답(Response)을 반환하거나, 에러를 전역 에러 핸들러로 전달(`next(error)`)합니다.
    *   메서드는 `this` 바인딩을 위해 화살표 함수(`async (req, res, next) => {}`)로 정의합니다.
*   **Service (`src/services/`):
    *   Controller로부터 호출되어 실제 비즈니스 로직을 수행하고 데이터베이스(Prisma)와 상호작용합니다.
    *   데이터베이스 쿼리, 복잡한 계산, 외부 API 호출 등을 담당합니다.
    *   메서드는 `async` 함수로 정의하며, `this` 바인딩을 위해 화살표 함수로 정의하는 것을 권장합니다.

### 2. ES Modules 사용 (`import`/`export`)

*   `package.json`에 `"type": "module"`이 설정되어 있어 모든 JavaScript 파일은 ES Modules 방식으로 동작합니다.
*   **임포트 (Import):** `require()` 대신 `import ... from ...` 구문을 사용합니다.
    *   **외부 라이브러리:** `import express from 'express';`
    *   **로컬 파일:** `import MyModule from './myModule.js';` (반드시 `.js` 확장자를 포함해야 합니다.)
*   **익스포트 (Export):** `module.exports = ...` 대신 `export default ...` 또는 `export const ...` 구문을 사용합니다.

### 3. Prisma Client 임포트 경로

*   `prisma/schema.prisma`에 `output = "../generated/prisma"`로 설정되어 있어, Prisma Client는 `프로젝트루트/generated/prisma` 폴더에 생성됩니다.
*   따라서 코드에서 Prisma Client를 임포트할 때는 다음과 같이 정확한 상대 경로를 사용해야 합니다.
    ```javascript
    import { PrismaClient } from '../../generated/prisma/index.js';
    ```

### 4. 일관된 에러 처리

*   Controller 및 Service 계층에서 에러 발생 시 `throw new Error('메시지');` 또는 `throw new CustomError('메시지', statusCode);`와 같이 에러를 던집니다.
*   Controller에서는 `try...catch` 블록을 사용하여 에러를 잡고 `next(error);`를 통해 `app.js`에 정의된 전역 에러 핸들러로 전달합니다.

---

## 🛠️ 코드 마이그레이션 가이드 (팀원용)

현재 `src/join_group.js`, `src/leave_group.js`, `src/exerciseRecordModule/` 폴더 내의 파일들은 새로운 아키텍처 구조에 맞춰 리팩토링이 필요합니다.

**진행 방법:**

1.  **해당 기능의 Controller 및 Service 파일 확인:**
    *   **그룹 참여 관리 (최지희님):
        *   Controller: `src/controllers/participantController.js`
        *   Service: `src/services/participantService.js`
    *   **운동 기록 관리 (신경렬님):
        *   Controller: `src/controllers/exerciseRecordController.js`
        *   Service: `src/services/exerciseRecordService.js`

2.  **기존 로직 복사 및 붙여넣기:**
    *   기존 파일(`src/join_group.js`, `src/leave_group.js`, `src/exerciseRecordModule/*.js`)에 있는 비즈니스 로직(Prisma 쿼리, 데이터 처리 등)을 새로운 Controller/Service 파일의 해당 메서드(예: `joinGroup`, `createRecord`) 안으로 옮겨주세요.
    *   **주의:** `const app = express();`나 `const prisma = new PrismaClient();`와 같이 독립적으로 앱을 초기화하는 코드는 옮기지 마세요.

3.  **코드 수정 및 개선:**
    *   **Prisma Client 임포트:** `import { PrismaClient } from '../../generated/prisma/index.js';`를 사용하도록 수정하세요.
    *   **에러 처리:** `res.status().json()` 대신 `throw new Error('메시지');`를 사용하고, Controller에서는 `try...catch` 후 `next(error);`로 에러를 전달하도록 수정하세요.
    *   **`this` 바인딩:** Service 메서드도 `async (인자) => {}`와 같은 화살표 함수 형태로 정의하는 것을 권장합니다.
    *   **요구사항 불일치 수정:**
        *   **그룹 참여:** 닉네임 중복 확인 범위를 "그룹 내에서만 중복 불가"로 수정해야 합니다.
        *   **운동 기록:**
            *   `prisma.record` 대신 `prisma.exerciseRecord`를 사용하도록 수정하세요.
            *   `photos` 필드 처리 로직을 스키마(`ParticipantPhoto` 관계)에 맞춰 수정하세요.
            *   기록 목록 조회 시 `total` 계산을 `prisma.exerciseRecord.count()`를 사용하도록 수정하세요.
            *   필드명 불일치(예: `participantNickname` -> `nickname`)를 수정하세요.

4.  **테스트:**
    *   서버를 `npm run dev`로 실행한 후, Postman 등을 사용하여 해당 API가 정상적으로 작동하는지 테스트하세요.

궁금한 점이 있다면 언제든지 질문해주세요!


