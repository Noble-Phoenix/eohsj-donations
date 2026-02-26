import * as prismic from '@prismicio/client';
import type { DonationPageDocument } from '../types';

// ---------------------------------------------------------------------------
// Props that the donation page's presentational components already expect
// ---------------------------------------------------------------------------

export interface HeroProps {
  title: string;
}

export interface FaqSectionProps {
  items: Array<{ question: string; answer: string }>;
}

export interface CtaProps {
  label: string;
}

export interface DonationPageProps {
  hero: HeroProps;
  faq: FaqSectionProps;
  cta: CtaProps;
  disclosureNote: string;
}

// ---------------------------------------------------------------------------
// Adapter
// ---------------------------------------------------------------------------

/**
 * Converts a `DonationPageDocument` from Prismic into the plain-object props
 * that the donation page's server component passes down to its presentational
 * components. All fields fall back to sensible defaults when missing.
 */
export function adaptDonationPage(doc: DonationPageDocument): DonationPageProps {
  return {
    hero: {
      title:
        (doc.data.title as string) ||
        'Ensuring the future of the schools of the Latin Patriarchate',
    },
    faq: {
      items: (doc.data.faq_items ?? []).map((item) => ({
        question: (item.question as string) ?? '',
        answer: prismic.asText(item.answer) ?? '',
      })),
    },
    cta: {
      label: (doc.data.primary_cta_label as string) || 'Donate Now',
    },
    disclosureNote: prismic.asText(doc.data.disclosure_note) ?? '',
  };
}

/** Default props used when the CMS document is unavailable. */
export const defaultDonationPageProps: DonationPageProps = {
  hero: {
    title: 'Ensuring the future of the schools of the Latin Patriarchate',
  },
  faq: { items: [] },
  cta: { label: 'Donate Now' },
  disclosureNote: '',
};
