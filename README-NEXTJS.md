# Zain Global — Manpower & Workforce Provider (Next.js)

Manpower Supply & Workforce Provider website for Saudi Arabia.
Bilingual (English / العربية with full RTL), B2B focused, 15+ pages.

> **This is a Next.js App Router project.** All screens live in `src/` and are
> rendered by the file-based routes in `app/`.

---

## Run

```bash
npm install
npx next dev        # → http://localhost:3000
```

Production:

```bash
npx next build
npx next start
```

### Add the npm scripts

`package.json` in this sandbox is locked (its `build` script must stay
`vite build` so the hosted preview works). In your own repo set:

```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start"
}
```

---

## Delete these 3 preview files

This sandbox can only serve a single static HTML file, so a tiny preview harness
ships with the repo to make the design viewable here. It is **not** part of the
Next.js app. In your own repo delete:

| File | Why |
|---|---|
| `index.html` | Vite's entry point — Next.js generates its own document in `app/layout.tsx` |
| `src/preview.tsx` | Hash router + route table stand-in for the App Router |
| `vite.config.ts` | Locked in this sandbox; not needed for Next.js |

After deleting them the project is a clean Next.js codebase. Nothing else
changes — no screen, component or style is duplicated between the two.

---

## Project structure

```
app/                              ← the Next.js App Router
  layout.tsx                      Root layout — metadata, fonts, JSON-LD, shell
  providers.tsx                   I18n + Next.js router bridge ("use client")
  page.tsx                        Home
  about/page.tsx                  About Us
  services/page.tsx               Our Services
  services/[slug]/page.tsx        6 dynamic manpower category pages
  manpower-categories/page.tsx
  employers/page.tsx
  job-seekers/page.tsx
  request-manpower/page.tsx
  contact/page.tsx
  faq/page.tsx
  privacy/page.tsx  terms/page.tsx
  not-found.tsx
  sitemap.ts  robots.ts           Generated from the data layer

next.config.ts
postcss.config.mjs                Tailwind v4 for Next.js
tsconfig.json

src/                              ← shared component & data library
  pages/                          One component per screen (all "use client")
  components/                     Header, Footer, sections, forms, coverage map
  data/site.ts                    ★ SINGLE SOURCE OF TRUTH
  data/legal.ts                   Privacy / Terms copy
  lib/i18n.tsx                    EN ⇄ AR dictionary + provider
  lib/router.tsx                  Link / useRouter / useSegments adapter
  lib/seo.ts                      pageMeta() helper for every route
  index.css                       Tailwind v4 theme (navy / gold / jade)
```

### How routing is wired

`src/lib/router.tsx` is a ~50-line adapter exposing `Link`, `useRouter` and
`useSegments`. The UI never imports Next.js directly — `app/providers.tsx`
injects `usePathname` + `router.push`. Add a page by creating a folder in
`app/` and a component in `src/pages/`; then use them together.

---

## Live configuration (already set)

| Item | Value |
|---|---|
| Brand name | **Zain Global** (EN) / **زين جلوبال** (AR) |
| Legal name | Zain Global Manpower & Workforce Services |
| Phone & WhatsApp | **+966 55 526 7734** |
| Email | info@zainglobal.sa · careers@zainglobal.sa |
| Domain | https://www.zainglobal.sa |

Change any of this in **one place only**: the `company` object at the top of
`src/data/site.ts`. Header, footer, contact cards, floating WhatsApp button,
every `tel:` / `wa.me` link, the JSON-LD schema, sitemap and robots all read
from it.

---

## How to add content (no layout changes needed)

**New manpower category** → append an object to `services` in `src/data/site.ts`.
You instantly get: a service card, a header drop-down entry, a footer link, a
route at `/services/<slug>` (via `generateStaticParams`), a sitemap entry,
filter chips and form options.

**New worker role** → push a string into that category's `roles` array. It
appears in the searchable categories page, the category detail page and the
"Profession" dropdown of the job-seeker form.

**New city** → add one entry to `cities` (`x`/`y` are SVG coordinates on the KSA
map). It shows up on the map, coverage grid, footer and employer form.

**New industry / stat / FAQ / testimonial** → same pattern: append to
`industries`, `stats`, `faqs` or `testimonials`.

**New text** → add a key to `dict` in `src/lib/i18n.tsx`
(`{ en: "...", ar: "..." }`) and read it with `t("my.key")`.

---

## Before you go live — placeholders to replace

Everything below is clearly marked in the code and makes **no** claims about
government licences or approvals:

| What | Where |
|---|---|
| CR number, recruitment licence, VAT, chamber membership | `company.registrations` in `src/data/site.ts` |
| Phone, WhatsApp, email, address, domain | `company` in `src/data/site.ts` |
| Canonical domain | `company.domain` (feeds `metadataBase`, sitemap, robots) |
| Client testimonials | `testimonials` in `src/data/site.ts` |
| Form submission endpoint | `EmployerForm` / `JobSeekerForm` in `src/components/ManpowerForms.tsx` |
| Privacy & Terms wording | `src/data/legal.ts` |

Forms currently validate client-side and show a success state. Wire them to
your email service or CRM by replacing the `setTimeout(...)` block in
`ManpowerForms.tsx` — e.g. a `fetch` to an API route like
`app/api/lead/route.ts`.

---

## Bilingual / RTL

`I18nProvider` stores the choice in `localStorage`, sets `<html lang>` and
`<html dir>`, and swaps to the IBM Plex Sans Arabic typeface. All layout uses
logical properties (`ps-`, `pe-`, `start-`, `end-`), so Arabic mirrors correctly
with no extra stylesheets.
