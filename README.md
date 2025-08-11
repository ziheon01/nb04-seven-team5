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

3.  **Prisma 클라이언트 생성**

    Prisma 클라이언트를 사용하기 위해 다음 명령어를 실행합니다.

    ```bash
    npx prisma generate
    ```

4.  **환경 변수 설정**

    프로젝트 루트에 `.env` 파일을 생성하고, 데이터베이스 연결 정보를 담은 `DATABASE_URL`을 설정해야 합니다.

    ```
    # .env 예시
    DATABASE_URL="postgresql://user:password@localhost:5432/mydb?schema=public"
    ```

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
