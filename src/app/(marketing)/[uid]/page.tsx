import { notFound } from 'next/navigation';
import * as prismic from '@prismicio/client';
import { Header, Footer, Section } from '@/components/layout';
import { getMarketingPageByUID } from '@/lib/cms/queries';

interface MarketingPageProps {
  params: Promise<{ uid: string }>;
}

export async function generateMetadata({ params }: MarketingPageProps) {
  const { uid } = await params;
  const doc = await getMarketingPageByUID(uid);
  if (!doc) return {};
  return {
    title: (doc.data.title as string) ?? undefined,
    description: prismic.asText(doc.data.subtitle) || undefined,
  };
}

export default async function MarketingPage({ params }: MarketingPageProps) {
  const { uid } = await params;
  const doc = await getMarketingPageByUID(uid);

  if (!doc) notFound();

  const title = (doc.data.title as string) ?? '';
  const bodyText = prismic.asText(doc.data.body);

  return (
    <div className="flex flex-col min-h-screen bg-amber-50">
      <Header />

      <main className="flex-1">
        <Section theme="light" title={title}>
          {bodyText ? (
            <p className="text-lg text-zinc-800 max-w-3xl mx-auto">{bodyText}</p>
          ) : null}
        </Section>
      </main>

      <Footer />
    </div>
  );
}
