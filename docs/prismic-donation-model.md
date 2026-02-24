# Prismic Content Model — Donation Page

This document describes the **`donation_page`** Prismic custom type used to
manage content for the main donation landing page.

---

## Custom Type: `donation_page`

| API ID | `donation_page` |
|--------|-----------------|
| UID    | `donate` *(fixed — the app fetches by this UID deterministically)* |
| Type   | Repeatable: **No** (singleton) |

---

## Fields

### Main tab

| Field API ID        | Field type  | Required | Notes |
|---------------------|-------------|----------|-------|
| `title`             | Key Text    | Yes      | Hero H1 heading |
| `subtitle`          | Rich Text   | No       | Hero sub-heading / tagline |
| `hero_image`        | Image       | No       | Background / hero image (min 1400 × 500 px recommended) |
| `primary_cta_label` | Key Text    | No       | Label for the main "Donate" button; defaults to *"Donate Now"* |
| `disclosure_note`   | Rich Text   | No       | Legal/disclosure text shown below the donation form |

### Group: `trust_bullets`

Repeatable group; each item has:

| Field API ID | Field type | Notes |
|--------------|------------|-------|
| `label`      | Key Text   | Short trust indicator bullet point |

### Group: `impact_stats`

Repeatable group; each item has:

| Field API ID | Field type | Notes |
|--------------|------------|-------|
| `label`      | Key Text   | Description of the stat (e.g. "boys and girls helped") |
| `value`      | Key Text   | Numeric value as a string (e.g. "18,968") |

### Group: `faq_items`

Repeatable group; each item has:

| Field API ID | Field type | Notes |
|--------------|------------|-------|
| `question`   | Key Text   | FAQ question |
| `answer`     | Rich Text  | FAQ answer (supports bold, links) |

---

## Fetching strategy

The app fetches the document by UID using `getDonationPage()` in
`src/lib/cms/queries.ts`:

```ts
const doc = await getDonationPage(); // returns DonationPageDocument | null
```

- **Revalidation**: `60 s` in production (set in `prismic.ts` via `fetchOptions`).
- **Fallback**: when `null` is returned (doc missing or unpublished) the page
  falls back to the hardcoded static content defined in
  `src/lib/cms/adapters/donation.ts → defaultDonationPageProps`.

---

## Setting up in Prismic

1. Log in to <https://prismic.io> and open your repository.
2. Navigate to **Custom types** → **Create new** → **Single type**.
3. Set the API ID to `donation_page`.
4. Add the fields listed above in the **Main** tab.
5. Click **Save**.
6. Create a new document of this type, set the UID to `donate`, fill in the
   fields, and publish.

---

## Environment variables

| Variable                   | Required | Description |
|----------------------------|----------|-------------|
| `PRISMIC_REPOSITORY_NAME`  | Yes      | Prismic repo name (subdomain of `*.prismic.io`) |
| `PRISMIC_ACCESS_TOKEN`     | No       | Only needed for private repositories |
| `PRISMIC_PREVIEW_SECRET`   | No       | Secret for validating preview webhook requests |

Copy `.env.example` to `.env.local` and fill in the values.
