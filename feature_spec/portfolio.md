# Brutalist Portfolio Redesign

Rebuilt `yggdrasill501.dev` from a broken legacy landing page into a small,
minimalist portfolio in **brutalist / techno / Japanese-minimal** style.

## Aesthetic brief (locked)

Keywords: **Techno · Brutalism · Alternative · Minimalism · Japan**.
Dark base, single red accent, hard borders, no rounded corners, mono-first
typography, asymmetric whitespace, kana micro-elements (索引, 仕事 etc.) as
section markers.

## Stack & key decisions

- **Next.js 14 (app router)** + **Tailwind** — already in repo, kept.
- **No UI library** at component level — primitives hand-built in
  `app/components/ui/` (Button, Card, Badge), inspired by neobrutalism.dev
  but custom-themed dark + red.
- **Fonts**: `JetBrains Mono` (body, mono-everywhere brutalism) +
  `Space Grotesk` (display headings). Both via `next/font/google`.
- **Theme system**: CSS variables on `:root` with `:root.light` overrides.
  All theme tokens (`ink`, `bone`, `ash`, `smoke`, `rust`) referenced via
  `rgb(var(--token) / <alpha-value>)` in `tailwind.config.ts` so any existing
  utility (`bg-ink/85`, `shadow-brut`, etc.) flips automatically on theme
  swap.
- **Dark = default**, light mode is a *paper / charcoal* alternative (NOT
  pure black/white). Toggle is a sliding-knob switch in the Nav.
  `localStorage` persists; inline `<head>` script applies class pre-paint
  to avoid FOUC. `<html suppressHydrationWarning>` to silence the
  script-vs-React class mismatch.

## Design tokens

| Token       | Dark            | Light           | Notes                          |
|-------------|-----------------|-----------------|--------------------------------|
| `--ink`     | `10 10 10`      | `237 235 230`   | bg                             |
| `--bone`    | `237 237 237`   | `26 26 26`      | text/borders; "darker gray, NOT pure black" in light |
| `--ash`     | `26 26 26`      | `218 215 208`   | secondary surfaces             |
| `--smoke`   | `42 42 42`      | `200 196 188`   | dividers                       |
| `--rust`    | `255 0 51`      | (same)          | accent (hot techno red `#ff0033`) |
| `--rustdim` | `204 0 41`      | (same)          | accent dim                     |

Shadows are CSS-variable-driven brutalist offsets:
`brut: 6px 6px 0 0 rgb(var(--bone))`, plus `-sm` (3px) and `-rust` variants.

Background grid in `globals.css`: `160px × 160px` (after iterations from
48 → 96 → 160). Don't go smaller.

## Voice / positioning (locked after iteration)

**One-liner**: Product engineer working both sides of the product — AI
systems and the growth and GTM around them.

**Voice rules** (these came up directly in convo — keep enforcing):

- Title is `Product Engineer` — **never** `Senior Product Engineer` or
  `Software Engineer`.
- Do **not** use abstract metaphors like *"unusual seam"*. Plain language.
- The old framing — *low-level languages / compilers / quantum computing /
  "frameworks of the month"* — is **dead**. Don't bring it back.
- Email of record is `filipzitny@proton.me` (NOT gmail).
- Hometown line is `Prague / SF`. Not Bratislava.
- "Less polish, more shipped. Signal > noise." is a kept tagline.

## Site map

| Route                | Page                                                   |
|----------------------|--------------------------------------------------------|
| `/`                  | Hero + TRANSMIT CTA + Footer                           |
| `/projects`          | Project grid (data in `app/projects/data.ts`)          |
| `/cv`                | CV rendered from `app/cv/data.ts` + PDF download link  |
| `/about`             | Bio + PROFILE.SYS sidebar + LINKS sidebar              |
| `/blog`              | Empty-state "NO SIGNAL / SOON" placeholder             |
| `/posts/[id]`        | Markdown post page (existing content in `/content`)    |
| `/cv_filip_zitny.pdf`| Downloadable CV in `/public/`                           |

**Nav** (`/projects` currently hidden):
`EXPERIENCE / 経験` (→ `/cv`) · `ABOUT / 私` · `LOG / 記録` + theme switch.
Logo `FZ` (red on bone) routes home.

## Component inventory

```
app/components/
  Nav.tsx           sticky top nav + kana labels + ThemeToggle
  Hero.tsx          landing block w/ kana, badges, NOW aside, CTA buttons
  Footer.tsx        rust marquee + columns (Channels / Meta)
  ProjectCard.tsx   brutalist card w/ [01] index + status badge
  ThemeToggle.tsx   sliding-knob switch (☾ ↔ ☀), localStorage-backed
  ui/
    button.tsx      cva variants: default | rust | outline | ghost
    card.tsx        Card + CardHeader/Title/Meta/Content/Footer
    badge.tsx       variants: default | rust | outline
```

CSS utilities added: `.vertical-rl`, `.scanline`, `.noise` (in `globals.css`).

## Removed (from legacy)

- `app/components/LandingPage.tsx` + its CSS
- `app/components/NavBar.tsx`
- `app/components/PostButton.tsx`
- `app/fonts/` (Geist woffs) — Google fonts now
- `app/styles/`

## Outstanding (flagged in convo, NOT yet applied)

These were intentionally left so the user could A/B against the new voice
on the rendered page. Pick them up next session:

- **Hero `VIEW WORK →` button** still points to `/projects` even though
  the Work tab is hidden from Nav.
- **Hero `VER 02.6` badge** — arbitrary; decide keep / kill / change to
  year.quarter.
- **Site `<title>` + `<meta description>`** in `app/layout.tsx` still
  reads *"Low-level languages, quantum computing, alt-tech"*.
- **Footer marquee** still contains `低 LEVEL` (off-brand).
- **Footer Channels column email** still `filipzitny@gmail.com`
  (about page already on `proton.me`).
- **Projects data** (`app/projects/data.ts`) — `quantum-notes` and the
  `compiler/LLVM` placeholder don't match positioning. Swap for
  Duvo/Deepnote/growth-flavoured entries, or hide projects page entirely
  for now.
- **`/cv` route name** — nav says EXPERIENCE but URL is `/cv`. Could rename
  to `/experience` with redirect from `/cv`.
- **PDF vs page drift** — `app/cv/data.ts` says `Prague / SF`, but the
  downloaded PDF still says `Prague, Czechia` (source PDF not regenerated).

## Implementation notes (for future agents)

- Brutalism principle: **no rounded corners**, no soft shadows, no
  gradients except the body grid. If adding a component, default to 2px
  hard borders + offset block-shadows.
- Don't add a UI library. Don't add `framer-motion`. Static, server-rendered
  pages are the point.
- The light theme is intentionally NOT bright white — it's warm paper
  (`237 235 230`) with charcoal foreground (`26 26 26`). Keep it that way.
- Kana labels are part of the personality. Don't strip them when refactoring.
- Tasks completed live, no overengineering — no error boundaries, no
  feature flags, no backwards-compat shims.
