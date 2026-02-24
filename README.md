# eohsj-donations

A Next.js 16 (App Router) donation site for the Equestrian Order of the Holy Sepulchre of Jerusalem (EOHSJ).

---

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in PRISMIC_REPOSITORY_NAME
npm run dev
```

---

## Prismic CMS integration

This project uses [Prismic](https://prismic.io) to manage the content of the donation landing page and optional marketing pages. See [`docs/prismic-donation-model.md`](docs/prismic-donation-model.md) for the full content model.

### Environment variables

| Variable                  | Required | Purpose |
|---------------------------|----------|---------|
| `PRISMIC_REPOSITORY_NAME` | Yes      | Your Prismic repo name (e.g. `eohsj-donations`) |
| `PRISMIC_ACCESS_TOKEN`    | No       | Only for private repositories |
| `PRISMIC_PREVIEW_SECRET`  | No       | Validates preview webhook requests |

Copy `.env.example` to `.env.local` and fill in the values.

---

## Prismic Previews (Draft Mode)

Prismic previews use Next.js [Draft Mode](https://nextjs.org/docs/app/building-your-application/configuring/draft-mode) to render unpublished content.

### Preview route handlers

| Route | Purpose |
|-------|---------|
| `GET /api/preview` | Activates Draft Mode and redirects to the previewed document |
| `GET /api/exit-preview` | Deactivates Draft Mode |

### Configuring previews in Prismic

1. Open your Prismic repository → **Settings → Previews**.
2. Add a new preview with:
   - **Site name**: any name (e.g. `Next.js`)
   - **Domain**: your site URL (e.g. `http://localhost:3000` for local dev)
   - **Preview Route**: `/api/preview`
3. Save. You can now click **Preview** on any draft document in Prismic and it will open your site with Draft Mode activated, showing the unpublished content.

### Exiting a preview

Navigate to `/api/exit-preview` or click the **Exit preview** button (if added) to return to normal cached content.

---

## Content revalidation

- In **production**, Prismic content is revalidated every **60 seconds** via `next.revalidate`.
- In **development**, content is fetched fresh on every request (`cache: 'no-store'`).
- Previews always bypass caching automatically.

---

## Project structure

```
src/
├── app/
│   ├── page.tsx                  # Home / donation landing page (server component)
│   ├── (marketing)/[uid]/        # Optional CMS-driven marketing pages
│   ├── api/preview/              # Prismic preview activation
│   └── api/exit-preview/         # Prismic preview deactivation
├── components/
│   ├── donation/                 # Donation form UI components
│   ├── layout/                   # Header, Footer, Section
│   ├── sections/                 # Hero, Statistics, Carousel, NewsGrid
│   └── common/                   # FloatingDonateButton
├── lib/
│   └── cms/
│       ├── client.ts             # getCmsClient() — server-only
│       ├── queries.ts            # getDonationPage(), getMarketingPageByUID()
│       ├── types.ts              # Prismic document types
│       └── adapters/
│           └── donation.ts       # Prismic → component props adapter
└── data/                         # Static fallback data
prismic.ts                        # Prismic client factory + repo config
docs/
└── prismic-donation-model.md     # Prismic content model documentation
```
