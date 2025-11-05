# Repository Guidelines

## Project Structure & Module Organization
The site runs on Next.js with the App Router. The landing view lives in `app/page.tsx`, work experience is handled by `app/work/page.tsx`, and error handling sits in `app/not-found.tsx`. Layout concerns (metadata, HTML shell) stay in `app/layout.tsx`. Shared nav/footer UI is defined in `components/SiteHeader.tsx` and `components/SiteFooter.tsx`, while all copy, nav targets, and CTA definitions live in `content/data.ts`. Static assets (CV, portfolio JSON, imagery, fonts) belong in `public/` and ship unchanged during `next build`.

## Build, Test, and Development Commands
- `npm install` — Install dependencies for Next.js, React, and TypeScript.
- `npm run dev` — Launch the local dev server at `http://localhost:3000` with fast refresh.
- `npm run build` — Create the static export in `out/` (configured via `output: 'export'`).
- `npm run lint` — Run `next lint` using the Next.js ESLint config.
Before pushing changes, run `npm run build` and open the generated `out/index.html` (or serve the folder with `npx serve out`) to ensure the exported version works for GitHub Pages.

## Coding Style & Naming Conventions
Use TypeScript throughout `app/`, `components/`, and `content/`. Components stay minimal—prefer server components and inline logic over complex state. Styling lives in `app/globals.css`; the current aesthetic leans on bold black outlines, bubble accents, and rounded shapes inspired by Gumroad. Introduce new colors or font stacks carefully so contrast stays high and the palette remains playful. Keep filenames short and descriptive (`page.tsx`, `work/page.tsx`, `SiteHeader.tsx`).

## Testing Guidelines
There is no automated suite yet, so rely on manual walkthroughs. Confirm the landing view fills the viewport, scales from mobile to desktop, and all action links open the correct destinations. When editing `content/data.ts`, verify the build still succeeds and every link resolves (email, PDF, external profiles). Run `npm run lint` to catch unused imports or type mismatches.

## Commit & Pull Request Guidelines
Continue using concise, imperative commit subjects (e.g., `Adjust landing spacing`, `Update contact link`) with extra context in the body when helpful. Pull requests should outline the change, include device/browser checks, and attach screenshots or recordings because visual tweaks dominate this project. Link to any related issues and flag follow-up tasks.

## Content & Asset Updates
Update profile copy, nav links, or hero highlights via the `profile` object in `content/data.ts`. Work history pulls from `public/assets/portfolio.json`; keep the structure intact (`introText`, `itemDetails`) so the experience cards can be generated automatically. Store downloadable assets in `public/assets/` and reuse filenames to avoid breaking bookmarks. If you add imagery, place it under `public/images/` and optimise file sizes to keep load times sharp.
