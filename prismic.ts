import * as prismic from '@prismicio/client';
import * as prismicNext from '@prismicio/next';

export const repositoryName =
  process.env.PRISMIC_REPOSITORY_NAME ?? 'eohsj-donations';

/**
 * Creates a Prismic client suitable for use in Next.js App Router server
 * components and route handlers. Supports draft mode (previews).
 */
export const createClient = (config?: prismic.ClientConfig) => {
  const client = prismic.createClient(repositoryName, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    fetchOptions:
      process.env.NODE_ENV === 'production'
        ? { next: { revalidate: 60 } }
        : { cache: 'no-store' },
    ...config,
  });

  prismicNext.enableAutoPreviews({ client });

  return client;
};
