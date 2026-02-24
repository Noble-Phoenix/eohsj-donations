import * as prismic from '@prismicio/client';

// ---------------------------------------------------------------------------
// Prismic field helper aliases
// ---------------------------------------------------------------------------

export type PrismicRichTextField = prismic.RichTextField;
export type PrismicImageField = prismic.ImageField;
export type PrismicKeyTextField = prismic.KeyTextField;

// ---------------------------------------------------------------------------
// donation_page custom type
// ---------------------------------------------------------------------------

/**
 * A single trust bullet item stored in the `trust_bullets` group field.
 */
export interface TrustBulletItem extends Record<string, prismic.AnyRegularField> {
  label: PrismicKeyTextField;
}

/**
 * A single impact statistic stored in the `impact_stats` group field.
 */
export interface ImpactStatItem extends Record<string, prismic.AnyRegularField> {
  label: PrismicKeyTextField;
  value: PrismicKeyTextField;
}

/**
 * A single FAQ item stored in the `faq_items` group field.
 */
export interface FaqItem extends Record<string, prismic.AnyRegularField> {
  question: PrismicKeyTextField;
  answer: PrismicRichTextField;
}

/** Data shape of the `donation_page` Prismic custom type. */
export interface DonationPageData extends Record<string, prismic.AnyRegularField | prismic.GroupField | prismic.SliceZone> {
  title: PrismicKeyTextField;
  subtitle: PrismicRichTextField;
  hero_image: PrismicImageField;
  primary_cta_label: PrismicKeyTextField;
  trust_bullets: prismic.GroupField<TrustBulletItem>;
  impact_stats: prismic.GroupField<ImpactStatItem>;
  faq_items: prismic.GroupField<FaqItem>;
  disclosure_note: PrismicRichTextField;
}

export type DonationPageDocument = prismic.PrismicDocument<
  DonationPageData,
  'donation_page'
>;

// ---------------------------------------------------------------------------
// marketing_page custom type (used by the optional marketing route)
// ---------------------------------------------------------------------------

/** Data shape of the `marketing_page` Prismic custom type. */
export interface MarketingPageData extends Record<string, prismic.AnyRegularField | prismic.GroupField | prismic.SliceZone> {
  title: PrismicKeyTextField;
  subtitle: PrismicRichTextField;
  hero_image: PrismicImageField;
  body: PrismicRichTextField;
}

export type MarketingPageDocument = prismic.PrismicDocument<
  MarketingPageData,
  'marketing_page'
>;
