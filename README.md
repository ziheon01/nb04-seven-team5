# 🏋️‍♂️ SEVEN: 작심삼일을 막아주는 그룹형 운동 기록 커뮤니티 (Backend)

> **"API 명세 불일치부터 타입 안정성까지, 실무 수준의 백엔드 아키텍처로 개선해 나간 과정"**

본 레포지토리는 5인 팀 프로젝트 'SEVEN'의 백엔드 시스템을 기반으로, 초기 설계의 한계를 극복하고 구조적 안정성을 확보하기 위해 전면 리팩토링 및 고도화한 버전을 담고 있습니다.

## 🛠 Tech Stack
- **Language/Framework:** Node.js, Express, TypeScript
- **Database/ORM:** PostgreSQL, Prisma
- **Validation/Logging:** Zod, Pino
- **Infrastructure:** Docker, Docker Compose, AWS EC2 (TBD), GitHub Actions (TBD)

## 👥 Team & Role
**팀 프로젝트 기반 개인 고도화 프로젝트**
- **초기 팀 역할 분담**
  - **김지헌:** 아키텍처 설계 및 Group 도메인(CRUD) 전담
  - **신경렬:** ExerciseRecord (운동 기록 로직)
  - **양정민:** Rank, Badge (랭킹 산정 및 통계)
  - **최은영:** Photo, GroupPhoto, Like (이미지 업로드 및 추천)
  - **김지희:** Participant (그룹 참여/탈퇴 로직)
- **리팩토링 진행 내역 (100% 개인 진행):** JS ➡️ TS 전면 마이그레이션, Zod 런타임 검증 로직 도입, DTO 패턴 기반 Mapper 분리, 로깅(Pino) 파이프라인 구축

---

## 🔥 Technical Decisions & Troubleshooting (핵심 기술 경험)

### 1. API 명세와 DB 스키마 불일치 극복 (DTO 패턴 및 Mapper 도입)
* **문제 상황:** 초기 기획 단계에서 프론트엔드 API 명세서와 백엔드 DB 스키마 간의 변수명 불일치(예: DB는 `그룹이름`, 프론트는 `groupName` 요구) 발생.
* **해결 과정:** 데이터베이스 엔티티를 프론트엔드에 그대로 노출하는 강결합 구조를 탈피하기 위해 DTO(Data Transfer Object) 패턴을 도입.
* **결과:** Prisma를 통해 조회한 Input 타입과, 프론트엔드로 나가는 Output 타입(`ResponseDto`)을 분리하고, 그 사이를 `Mapper` 함수로 연결하여 백엔드 DB 구조 변경이 프론트엔드에 영향을 미치지 않도록 방어선 구축.

### 2. Zod를 활용한 런타임 데이터 무결성 보장
* **문제 상황:** 자바스크립트 기반의 초기 서버에서는 클라이언트가 악의적으로 조작된 운동 기록 데이터(타입 불일치, 필수 값 누락 등)를 보낼 경우, DB Insert 단계까지 가서야 에러가 발생하거나 더미 데이터가 적재됨.
* **해결 과정:** 서버의 최전방(Middleware)에 Zod 스키마 기반의 Validator를 배치.
* **결과:** 비즈니스 로직이 실행되기 전, 런타임 환경에서 완벽한 타입 검사 및 유효성(예: 비밀번호 길이, 문자열 포맷 등) 검증 완료. 통과된 안전한 데이터만 `req.body`에 덮어씌워 서비스 계층으로 전달.

### 3. JavaScript ➡️ TypeScript 전면 마이그레이션 (any 100% 제거)
* **문제 상황:** 기존 JS 코드는 런타임 에러에 취약했으며, 팀원 간 협업 시 데이터 객체의 형태를 예측하기 어려움.
* **해결 과정:** 점진적이 아닌 전면적인 TS 마이그레이션 단행. 컴파일 통과만을 목적으로 하는 꼼수(`any` 캐스팅)를 철저히 배제함.
* **결과:** `@prisma/client`가 제공하는 DB 페이로드 타입과 Zod의 `z.infer`로 추출한 DTO 타입을 엄격히 분리 및 적용하여 빌드 타임 에러 검출률을 극대화, 실무 수준의 타입 안정성 확보.

### 4. Pino를 활용한 운영 환경 로깅 시스템 구축
* **문제 상황:** 기존 `console.log`에 의존한 디버깅은 서버 배포 후 발생하는 이슈를 추적하고 분석하기에 턱없이 부족함.
* **해결 과정:** Node.js 환경에서 가장 가볍고 빠른 비동기 로거인 Pino 도입.
* **결과:** 에러 발생 위치, HTTP 메서드, 요청 URL 등을 JSON 포맷으로 정형화하여 출력함으로써, 추후 AWS EC2 환경 배포 시 외부 로그 수집기와의 연동 기반을 마련함.

---

## 🚀 Getting Started (로컬 실행 방법)

### Prerequisites
- Docker & Docker Desktop 설치 필수 (WSL2 환경 연동 권장)
- Node.js (v18+)

### Run with Docker Compose

1. **저장소 클론 및 패키지 설치**
   ```bash
   git clone [레포지토리 주소]
   cd [레포지토리 명]
   npm install

2. **.env** 파일 설정 (제공된 .env.example 참고)

3. **Docker를 활용한 PostgreSQL DB 및 백엔드 서버 동시 실행**
    # 컨테이너 백그라운드 실행
    docker compose up -d

    # Prisma 스키마 동기화 (초기 1회)
    npx prisma db push