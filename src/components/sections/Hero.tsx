'use client';

import React, { useState } from 'react';
import { DonationForm } from '@/components/donation';

const DONATION_AMOUNTS = [100, 150, 250, 500, 1000, 2000];

const Hero = React.forwardRef<HTMLDivElement>(({}, ref) => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(DONATION_AMOUNTS[0]);

  const handleDonate = () => {
    console.log('Donate clicked with amount:', selectedAmount);
    // TODO: Implement donation flow
  };

  return (
    <>
      {/* Red Hero Banner */}
      <div className="bg-red-900/70 p-16 bg-[url(//placehold.co/1400x500)] flex justify-center items-center">
        <div className="w-1/2 flex items-center text-center">
          <h1 className="text-5xl font-bold text-white leading-[48px]">
            Ensuring the future of the schools of the Latin Patriarchate
          </h1>
        </div>

        {/* Donation Form Box */}
        <div className="w-1/2 flex justify-end px-4 sm:px-6 lg:px-8">
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
