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
├── public/                       # 정적 파일 (이미지, 폰트, favicon 등)
│
├── src/
│   ├── app/                      # Next.js App Router 엔트리
│   │   ├── admin/
│   │   ├── auth/
│   │   ├── settings/
│   │   ├── user/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   ├── components/               # 공용 UI 컴포넌트
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── ThemeToggle.tsx
│   │
│   ├── lib/
│   │
│   └── styles/                   # 전역 및 모듈별 Tailwind CSS
│       ├── globals.css
│       ├── buttons.css
│       ├── card-layout.css
│       ├── input.css
│       └── page-layout.css
│
├── .gitignore
├── .prettierrc                   # 코드 포맷 설정
├── .eslint.config.mjs            # ESLint 설정
├── next.config.ts                # Next.js 설정
├── package.json
├── pnpm-lock.yaml                # pnpm lockfile
├── postcss.config.js             # PostCSS (Tailwind) 설정
├── tailwind.config.js            # Tailwind CSS 설정
├── tsconfig.json                 # TypeScript 설정
└── README.md
```

## 📑 라이선스 (License)

© 2025. NEWWAY CHURCH All rights reserved.
