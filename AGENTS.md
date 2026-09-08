<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Repo specifics

- Marketing landing page for "Tarekuk" (Send Money Home / Pay Later). Stack: Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, ESLint 9 (flat config). No test suite and no CI. Not a git repository — do not rely on git workflows.
- Package manager is **pnpm** (see `packageManager` and lockfile). Install with `pnpm install`.
- Scripts: `pnpm dev`, `pnpm build`, `pnpm start`, `pnpm lint`. No typecheck script; run `pnpm exec tsc --noEmit` (or `pnpm build`) to typecheck.
- `src/` layout: `app/(marketing)/` is the page route group (its `layout.tsx` renders the fixed `Navbar`); `components/shared/` for primitives (`Container`, `Button`, `Reveal`), `components/layout/`, `components/sections/`. Path alias `@/*` → `src/*`. Components use default exports.
- Server components by default; only `Reveal` (scroll-in animation via IntersectionObserver) is a `"use client"` component.
- Tailwind is config-less v4: tokens are declared in `src/app/globals.css` via `@theme inline` (colors `background`, `foreground`, `ink`, `muted`, `cream`; `--font-sans` mapped to Poppins loaded through `next/font/google` in `layout.tsx`). Custom colors must be registered there before use as utilities.
- Nav anchors (`#download`, `#pay-later`, `#pricing`, `#about`, `#faq`) in `Navbar`/`Button` are placeholders — the corresponding sections do not exist yet.
- SEO: shared `buildMetadata` helper in `src/lib/seo.ts`; `sitemap.ts` and `robots.ts` exist. Site URL is https://tarekuk.com.
- The banner above is auto-managed by `next dev`; keep any repo notes outside its `<!-- BEGIN/END:nextjs-agent-rules -->` markers.
