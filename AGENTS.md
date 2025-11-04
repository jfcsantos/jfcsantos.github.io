# Repository Guidelines

## Project Structure & Module Organization
The site now runs on Next.js with the App Router. Page composition lives under `app/` (`layout.tsx`, `page.tsx`, and `not-found.tsx`) while shared UI sits in `components/`. Structured content is defined in `content/data.ts` so designers and engineers can reuse the same source of truth for profile, experience, and project copy. Static assets belong in `public/`, grouped by type (`images/`, `assets/`, `fonts/`). Anything placed in `public/` is exported verbatim during `next build`.

## Build, Test, and Development Commands
- `npm install` — Install dependencies for Next.js, React, and TypeScript.
- `npm run dev` — Launch the local dev server at `http://localhost:3000` with fast refresh.
- `npm run build` — Create the static export in `out/` (configured via `output: 'export'`).
- `npm run lint` — Run `next lint` using the Next.js ESLint config.
Before pushing changes, run `npm run build` and open the generated `out/index.html` (or serve the folder with `npx serve out`) to ensure the exported version works for GitHub Pages.

## Coding Style & Naming Conventions
Use TypeScript across `app/`, `components/`, and `content/`. Stick with React function components, descriptive prop names, and minimal client-side state. CSS lives in `app/globals.css`; prefer utility-like classes already defined there and introduce new tokens sparingly. Keep filenames in kebab-case or lowerCamelCase according to their directory conventions (`ProjectCard.tsx`, `data.ts`).

## Testing Guidelines
There is no automated suite yet, so rely on manual walkthroughs. Validate accessible navigation (skip link, keyboard focus), responsive breakpoints, and external links. If you edit `content/data.ts`, double-check that arrays still render correctly and that URLs resolve. Run `npm run lint` to catch unused imports or type mismatches.

## Commit & Pull Request Guidelines
Continue using concise, imperative commit subjects (e.g., `Refresh hero copy`, `Add project card animation`) with extra context in the body when helpful. Pull requests should outline the problem, the solution, manual testing notes (device/browser), and screenshots or screen captures for visual tweaks. Link to any related issues and flag follow-up tasks.

## Content & Asset Updates
Add new portfolio items by appending to `projects` in `content/data.ts`. Images should live in `public/images/portfolio/` and stay under ~400 KB for performance. Update profile details, experience summaries, and social links in one place inside `content/data.ts`. PDFs or other downloads belong in `public/assets/`; reusing filenames avoids broken bookmarks or external links.
