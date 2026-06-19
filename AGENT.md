# AGENT.md

Guide for agents working on `yggdrasill501.dev`. Read this first. The source of
truth for design intent is `feature_spec/portfolio.md` — when that file and this
one conflict, the spec wins.

## What this repo is

Personal portfolio site for Filip Žitný (product engineer, Prague / SF). A
small Next.js 14 app deployed as `yggdrasill501.dev`. Rebuilt from a broken
legacy landing page into a deliberately minimal **brutalist / techno /
Japanese-minimal** site. Dark base, single red accent (`#ff0033`), hard borders,
no rounded corners, mono-first typography, kana micro-labels as section markers.

Positioning one-liner (locked): *Product engineer working both sides of the
product — AI systems and the growth and GTM around them.*

## Stack

- **Next.js 14** App Router + **TypeScript** strict.
- **Tailwind** with CSS-variable-driven theme tokens.
- **No UI library.** Primitives are hand-built in `app/components/ui/`
  (Button, Card, Badge) using `class-variance-authority`. Do not add Radix /
  shadcn / framer-motion / similar.
- **Fonts** via `next/font/google`: `JetBrains_Mono` (body) + `Space_Grotesk`
  (display headings).
- **Markdown posts** in `content/`, parsed with `gray-matter` + `remark`.

## Commands

```bash
npm run dev     # next dev — local
npm run build   # next build
npm run start   # next start
npm run lint    # next lint
```

No test suite yet.

## Layout

```
app/
  layout.tsx            root layout, fonts, no-flash theme script
  page.tsx              home (Hero + TRANSMIT CTA + Footer)
  globals.css           theme vars, grid bg (160×160), utilities
  components/
    Nav.tsx             sticky nav + kana labels + ThemeToggle
    Hero.tsx            landing hero
    Footer.tsx          rust marquee + Channels/Meta columns
    ProjectCard.tsx     brutalist project card
    ThemeToggle.tsx     sliding-knob theme switch
    ui/
      button.tsx        cva: default | rust | outline | ghost
      card.tsx          Card + CardHeader/Title/Meta/Content/Footer
      badge.tsx         default | rust | outline
  projects/page.tsx     project grid (currently hidden from Nav)
  projects/data.ts      project entries
  cv/page.tsx           CV page
  cv/data.ts            CV data (source of truth for /cv page)
  about/page.tsx        bio + PROFILE.SYS + LINKS sidebars
  blog/page.tsx         "NO SIGNAL / SOON" placeholder
  posts/[id]/page.tsx   markdown post renderer
content/                markdown posts
lib/
  posts.ts              gray-matter + remark loader
  utils.ts              cn() helper
public/                 cv PDF, favicon, static assets
feature_spec/
  portfolio.md          design brief, voice rules, outstanding items
```

## Design tokens

Tokens are CSS vars on `:root` (dark) with `:root.light` overrides. Tailwind
references them via `rgb(var(--token) / <alpha-value>)` so utilities like
`bg-ink/85` flip automatically when the `light` class is toggled.

| Token       | Dark            | Light           | Use                                  |
|-------------|-----------------|-----------------|--------------------------------------|
| `--ink`     | `10 10 10`      | `237 235 230`   | page bg                              |
| `--bone`    | `237 237 237`   | `26 26 26`      | text + borders                       |
| `--ash`     | `26 26 26`      | `218 215 208`   | card / secondary surface             |
| `--smoke`   | `42 42 42`      | `200 196 188`   | dividers                             |
| `--rust`    | `255 0 51`      | (same)          | accent — techno red                  |
| `--rustdim` | `204 0 41`      | (same)          | accent dim                           |

Shadows: `shadow-brut` (6px), `shadow-brut-sm` (3px), `shadow-brut-rust`,
`shadow-brut-rust-sm`. Body grid: `160px × 160px`. Don't shrink it.

Light mode is intentionally **paper, not pure white**, and `--bone` in light is
**darker gray, not pure black**. Keep it that way.

## Voice rules (locked — do not regress)

- Title is `Product Engineer`. Never `Senior Product Engineer` or `Software
  Engineer`.
- No abstract metaphors ("unusual seam", etc.). Plain language.
- The old framing — *low-level languages / compilers / quantum computing /
  "frameworks of the month"* — is dead. Don't bring it back in copy.
- Email of record: `filipzitny@proton.me`. NOT gmail.
- Hometown line: `Prague / SF`. Not Bratislava.
- Kept tagline: *"Less polish, more shipped. Signal > noise."*
- Keep kana micro-labels (索引, 仕事, 経験, 私, 記録, etc.) — part of the
  personality, don't strip when refactoring.

## Implementation principles

- **Brutalism**: no rounded corners, no soft shadows, no gradients (except the
  body grid). Default to 2px hard borders + offset block-shadows for new
  components.
- **No UI library, no framer-motion.** Static, server-rendered pages are the
  point.
- **No overengineering**: no error boundaries, no feature flags, no
  backwards-compat shims. If you remove something, delete it — don't leave
  `_unused` placeholders.
- **No comments** unless the *why* is non-obvious.
- Theme persistence: `localStorage('theme')` + inline `<head>` script applies
  `.light` class pre-paint. `<html suppressHydrationWarning>` silences the
  resulting script-vs-React class mismatch — keep both together.

## Outstanding drift from spec (still true at time of writing — verify before fixing)

These are flagged in `feature_spec/portfolio.md` as not yet applied. Check the
files before assuming they're still open:

- `app/layout.tsx` `<title>` / `description` still mention *"Low-level
  languages, quantum computing, alt-tech"* — off-brand vs current voice.
- Hero `VIEW WORK →` likely still points at `/projects` even though
  `/projects` is hidden from `Nav.tsx`.
- Hero `VER 02.6` badge — arbitrary; decide keep / kill / replace.
- Footer marquee may still contain `低 LEVEL` (off-brand).
- Footer Channels column email may still be `filipzitny@gmail.com` while
  About is already on `proton.me`.
- `app/projects/data.ts` still has `quantum-notes` and the `compiler/LLVM`
  placeholder — both off-brand. Replace with Duvo/Deepnote/growth-flavoured
  entries or keep the page hidden.
- Nav says `EXPERIENCE` but URL is `/cv`. Possible rename to `/experience`
  with redirect.
- `/cv` page says `Prague / SF`; the downloadable PDF in `/public/` may still
  say `Prague, Czechia` (regenerate source PDF).

If you fix one, grep the rest of the repo for the same string — these tend to
appear in pairs.

## Conventions for new work

- New routes go under `app/<route>/page.tsx`. Server components by default;
  add `"use client"` only when you need browser APIs (theme toggle is the
  current example).
- New components live in `app/components/`. UI primitives in
  `app/components/ui/`. Use `cva` for variant APIs to match `button.tsx`.
- Use the `cn()` helper from `lib/utils.ts` for conditional class merging.
- Path alias: `@/*` maps to repo root (see `tsconfig.json`).
- When adding copy, run it past the voice rules above before committing.
