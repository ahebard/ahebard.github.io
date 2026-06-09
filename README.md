# Personal Website

A simple personal website / portfolio built with **React + TypeScript + Webpack**, designed to be hosted on GitHub Pages. No frameworks, no Tailwind — just plain, editable CSS.

## Editing your content

Almost everything you'll want to change lives in **one file**:

- `src/content.ts` — your name, title, about text, career history, skills, and "Beyond Work" items, plus your email/GitHub/LinkedIn links and resume path.

Other useful files:

- `src/styles.css` — all styling. The color scheme is defined as CSS variables at the top (`:root`), so you can re-theme the whole site by changing a few values.
- `src/App.tsx` — the page layout/structure (only touch this if you want to add/remove sections).

## Resume

Drop your resume into `public/resume.pdf` (replace the placeholder file). The "Download Resume" button is already wired to it. If you name it something else, update `resumeUrl` in `src/content.ts`.

## Commands

```bash
npm install      # install dependencies
npm start        # dev server with live reload at http://localhost:3000
npm run watch    # rebuild into /dist on every file change (no server)
npm run build    # production build into /dist
```

## Deploying to GitHub Pages

1. Run `npm run build` — this generates the static site in the `dist/` folder.
2. Push the contents of `dist/` to your `username.github.io` repo (or to the `gh-pages` branch of a project repo).
3. The build uses relative asset paths and includes a `.nojekyll` file, so it works on both `username.github.io` and project pages like `username.github.io/repo-name/`.

> Tip: For a `username.github.io` user site, the `dist/` contents go in the root of the repo's default branch.
