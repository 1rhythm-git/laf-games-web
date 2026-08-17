# LAF GAMES 공식 홈페이지

React, Vite, TypeScript, 일반 CSS로 구성한 LAF GAMES 공식 홈페이지 프로젝트입니다.

## 실행 방법

```bash
npm install
npm run dev
```

## 주요 명령어

```bash
npm run dev
npm run build
npm run lint
npm run preview
```

## 라우트

- `/`: Home
- `/lootup`: LootUp
- `/privacy`: Privacy
- `/terms`: Terms

`public/_redirects`는 Cloudflare Pages에서 SPA 하위 경로에 직접 접근할 때 `index.html`로 연결합니다.

## Cloudflare Pages 빌드 설정

```text
Build command: npm run build
Build output directory: dist
```

현재 정적 홈페이지는 별도의 환경변수나 Secret을 요구하지 않습니다. API Key 또는 Backend Key는 프론트엔드 소스에 추가하지 않습니다.
