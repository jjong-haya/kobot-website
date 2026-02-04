# 🤖 KOBOT 웹사이트

> 국민대학교 로봇 동아리 KOBOT의 공식 웹사이트

## 📋 프로젝트 개요

이 프로젝트는 KOBOT 동아리의 활동, 공지사항, 프로젝트 등을 관리하고 홍보하기 위한 웹 애플리케이션입니다.

## 🛠️ 기술 스택

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Routing**: React Router v7
- **UI Components**: Radix UI + shadcn/ui
- **Styling**: Tailwind CSS
- **Backend**: Supabase (Authentication, Database, Storage)
- **State Management**: TanStack React Query

## 🚀 시작하기

### 사전 요구사항

- Node.js 18 이상
- npm 또는 pnpm
- Supabase 계정

### 설치

1. 저장소 클론
```bash
git clone <repository-url>
cd 코봇\ 웹
```

2. 의존성 설치
```bash
npm install
```

3. 환경 변수 설정
```bash
# .env.example을 복사하여 .env 파일 생성
copy .env.example .env
```

`.env` 파일에 Supabase 정보 입력:
```env
VITE_SUPABASE_URL=your-project-url
VITE_SUPABASE_ANON_KEY=your-anon-key
```

4. 개발 서버 실행
```bash
npm run dev
```

브라우저에서 `http://localhost:5173` 접속

## 📁 프로젝트 구조

```
src/
├── app/                # 메인 앱 및 UI 컴포넌트
├── components/         # 공유 컴포넌트
├── contexts/           # React Context
├── hooks/              # 커스텀 훅
├── lib/                # 유틸리티 및 설정
├── pages/              # 페이지 컴포넌트
├── styles/             # 전역 스타일
└── types/              # TypeScript 타입 정의
```

## 🔐 권한 시스템

- **visitor**: 비회원 (공개 페이지만 접근)
- **member**: 일반 부원 (내부 포털 접근)
- **exec-***: 운영진 (관리자 기능 접근)
  - exec-core: 회장단
  - exec-finance: 총무
  - exec-promo: 홍보팀  
  - exec-plan: 기획팀
  - exec-equipment: 장비팀
  - exec-external: 대외협력팀

## 📦 주요 기능

- ✅ 공개 웹사이트 (동아리 소개, 활동, 갤러리)
- ✅ 공지사항 시스템
- ✅ 일정 관리
- ✅ 회원 인증 및 권한 관리
- ✅ 내부 포털 (캘린더, 자료실, 장비 대여)
- ✅ 관리자 페이지 (공지 발행, 회의록, 사용자 관리)

## 🗄️ 데이터베이스

Supabase PostgreSQL 사용:
- `profiles`: 사용자 프로필
- `user_roles`: 사용자 역할/권한
- `notices`: 공지사항
- `events`: 일정
- `projects`, `studies`, `competitions`: 활동 기록
- `gallery_images`: 갤러리

## 📝 스크립트

```bash
# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 프리뷰 (빌드 결과 확인)
npm run preview
```

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 KOBOT 동아리의 소유입니다.

## 📞 문의

KOBOT - [@kobot_kookmin](https://instagram.com/kobot_kookmin)

프로젝트 링크: [https://github.com/kobot/website](https://github.com/kobot/website)
