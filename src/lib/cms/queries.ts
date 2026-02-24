import 'server-only';

import * as prismic from '@prismicio/client';
import { getCmsClient } from './client';
import type { DonationPageDocument, MarketingPageDocument } from './types';

/**
 * Fetches the singleton `donation_page` document with UID "donate".
 * Returns `null` when the document does not exist or is unpublished so that
 * callers can fall back to hardcoded content without crashing.
 */
export async function getDonationPage(): Promise<DonationPageDocument | null> {
  try {
    const client = getCmsClient();
    return await client.getByUID<DonationPageDocument>('donation_page', 'donate');
  } catch (err) {
    if (err instanceof prismic.NotFoundError) return null;
    // Surface unexpected errors in development; swallow in production to
    // avoid crashing the render.
    if (process.env.NODE_ENV !== 'production') throw err;
    console.error('[CMS] getDonationPage failed:', err);
    return null;
  }
}

/**
 * Fetches a `marketing_page` document by its UID.
 * Returns `null` when not found so the caller can invoke `notFound()`.
 */
export async function getMarketingPageByUID(
  uid: string,
): Promise<MarketingPageDocument | null> {
  try {
    const client = getCmsClient();
    return await client.getByUID<MarketingPageDocument>('marketing_page', uid);
  } catch (err) {
    if (err instanceof prismic.NotFoundError) return null;
    if (process.env.NODE_ENV !== 'production') throw err;
    console.error('[CMS] getMarketingPageByUID failed:', err);
    return null;
  }
}
