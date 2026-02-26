import Image from 'next/image';
import { Header, Contact, Section } from '@/components/layout';
import { Hero, StatisticsSection, Carousel, NewsGrid } from '@/components/sections';
import { FloatingDonateButton } from '@/components/common';
import { classroomSlides } from '@/data/carouselSlides';
import { testimonialItems } from '@/data/testimonialItems';
import { getDonationPage } from '@/lib/cms/queries';
import { adaptDonationPage, defaultDonationPageProps } from '@/lib/cms/adapters/donation';

export default async function Home() {
  const doc = await getDonationPage();
  const cms = doc ? adaptDonationPage(doc) : defaultDonationPageProps;

  return (
    <div className="flex flex-col min-h-screen bg-amber-50">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero title={cms.hero.title} />

        {/* Statistics Section */}
        <StatisticsSection />

        {/* Video Section */}
        <Section theme="light" className="py-16 px-4">
          <div className="flex justify-center">
            <div className="relative w-full max-w-4xl aspect-video bg-gray-200 rounded-2xl overflow-hidden">
              <Image
                src="https://placehold.co/1200x600"
                alt="Video section"
                fill
                unoptimized
                className="object-cover"
              />
              <button className="absolute inset-0 flex items-center justify-center hover:bg-black/20 transition-all">
                <div className="bg-red-600 rounded-full py-3 px-2 w-14 h-14">
                  <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </Section>

        {/* Why EOHSJ Section */}
        <Section 
          theme="dark" 
          title="WHY EOHSJ?"
          subtitle="Christians must be the path to peace and our schools show how all faiths can live together."
        >
          <Carousel slides={classroomSlides} />
        </Section>

        {/* Quote Section - Cardinal Pizzabella */}
        <Section theme="dark">
          <div className="relative h-96">
            {/* Red box with quote title */}
            <div className="absolute left-0 top-0 bg-red-700 rounded-tl-[32px] rounded-br-[32px] p-7 max-w-md">
              <h3 className="text-white text-3xl font-cinzel leading-9">
                His Beatitude Cardinal Pizzaballa<br />
                Latin Patriarch
              </h3>
            </div>

            {/* Yellow box with quote text */}
            <div className="absolute right-0 bottom-0 bg-amber-400 rounded-tr-[32px] rounded-bl-[32px] p-8 max-w-2xl">
              <p className="text-red-950 text-2xl font-normal leading-8">
                &ldquo;We are called to build a future of hope and a future of peace. In a special way that future depends on the continued well-being of our Christian families and most especially on the education of their children.&rdquo;
              </p>
            </div>
          </div>
        </Section>

        {/* Testimonials/News Section */}
        <Section theme="light" subtitle="Learn what others are saying about us" className="text-center">
          <NewsGrid items={testimonialItems} />
        </Section>

      <Contact />

        {/* Final CTA Section */}
        <Section theme="white" className="flex justify-center py-28">
          <div className="bg-white rounded-tl-2xl rounded-br-2xl border-8 border-amber-400 p-12 max-w-2xl text-center">
            <h2 className="text-5xl font-cinzel text-red-900 font-bold leading-[48px] mb-12">
              Ready to ensure a child&apos;s future?
            </h2>
            <button className="w-full bg-red-700 text-white text-2xl font-bold py-5 rounded-2xl hover:bg-red-800 transition-all">
              {cms.cta.label}
            </button>
          </div>
        </Section>

        {/* FAQ CTA Section */}
        <Section 
          theme="dark" 
          title="STILL HAVE QUESTIONS?"
          subtitle="Visit our FAQs page to learn more and find the answers to any questions you have."
          className="text-center py-36"
        >
          <button className="bg-red-700 text-white text-2xl font-bold px-44 py-4 rounded-2xl hover:bg-red-800 transition-all">
            Learn More
          </button>
        </Section>
      </main>

      {/* Floating Donate Button */}
      <FloatingDonateButton />
    </div>
  );
}
