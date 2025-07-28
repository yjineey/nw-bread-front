# 📖 NW-BREAD

Next.js 기반의 뉴웨이교회 성경 웹 애플리케이션

## 📦 기술 스택

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [pnpm](https://pnpm.io/)
- [Node.js](https://nodejs.org/)

## 🛠️ 개발 환경 설정 및 실행 방법

```bash
# 의존성 설치
pnpm install

# 개발 서버 실행
pnpm dev

# 프로덕션 빌드 (SSR)
pnpm build

# 빌드 결과 미리보기
pnpm start
```

## 📁 폴더 구조

```bash
nw-bread-front/
├── public/                      # 정적 리소스 (이미지, 아이콘 등)
├── src/
│   ├── app/
│   │   ├── layout.tsx           # 공통 HTML 구조
│   │   ├── page.tsx             # 홈 페이지
│   │   ├── admin/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   ├── users/page.tsx
│   │   │   ├── posts/page.tsx
│   │   │   └── setting/page.tsx
│   │   ├── bible/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   ├── oneread/page.tsx
│   │   │   ├── qt/page.tsx
│   │   │   ├── prayer/page.tsx
│   │   │   └── blood/page.tsx
│   │   └── auth/
│   │       ├── login/page.tsx
│   │       ├── signup/page.tsx
│   │       └── mypage/page.tsx
│   │
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── ThemeToggle.tsx
│   │
│   ├── styles/
│   │   ├── globals.css         # 전역 Tailwind 스타일
│   │   ├── admin.css
│   │   └── bible.css
│   │
│   └── utils/                   # 유틸 함수
│
├── .gitignore
├── .prettierrc
├── .eslint.config.mjs
├── next.config.ts
├── package.json
├── pnpm-lock.yaml
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── tsconfig.json

```

## 📑 라이선스 (License)

© 2025. NEWWAY CHURCH All rights reserved.
