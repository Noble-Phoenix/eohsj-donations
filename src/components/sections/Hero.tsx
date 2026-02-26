'use client';

import React, { useState } from 'react';
import { DonationForm } from '@/components/donation';

const DONATION_AMOUNTS = [100, 150, 250, 500, 1000, 2000];

interface HeroProps {
  title?: string;
}

const Hero = React.forwardRef<HTMLDivElement, HeroProps>(({ title }, ref) => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(DONATION_AMOUNTS[0]);

  const handleDonate = () => {
    console.log('Donate clicked with amount:', selectedAmount);
    // TODO: Implement donation flow
  };

  return (
    <>
      {/* Red Hero Banner */}
      <div className="bg-red-900/70 p-16 bg-[url(//placehold.co/1400x500)] flex justify-center max-md:flex-wrap items-center">
        <div className="w-full md:w-1/2 flex items-center text-center max-md:mb-12">
          <h1 className="text-5xl font-bold text-white leading-[48px]">
              {title ?? 'Ensuring the future of the schools of the Latin Patriarchate'}
            </h1>
        </div>

        {/* Donation Form Box */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end lg:px-8">
          <DonationForm
            amounts={DONATION_AMOUNTS}
            selectedAmount={selectedAmount}
            onAmountSelect={setSelectedAmount}
            onDonate={handleDonate}
          />
        </div>
      </div>
    </>
  );
});

Hero.displayName = 'Hero';

export default Hero;
