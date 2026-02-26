import 'server-only';

import { createClient } from '../../../prismic';

/**
 * Returns a configured Prismic client scoped to the current request context
 * (supports draft mode / previews). This module is server-only and must never
 * be imported by client components.
 */
export function getCmsClient() {
  return createClient();
}
