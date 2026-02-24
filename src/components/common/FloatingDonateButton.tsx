'use client';

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/classNames';

interface FloatingDonateButtonProps {
  onDonateClick?: () => void;
}

const FloatingDonateButton = React.forwardRef<HTMLDivElement, FloatingDonateButtonProps>(
  ({ onDonateClick }, ref) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        // Show button after scrolling past the header (e.g., 200px)
        setIsVisible(window.scrollY > 200);
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
      <div
        ref={ref}
        className={cn(
          'fixed bottom-6 right-6 z-40 transition-all duration-300 ease-in-out',
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
        )}
      >
        <button
          onClick={onDonateClick}
          style={{ borderRadius: '1.5rem 0 1.5rem 0' }}
          className="bg-red-700 text-white font-bold px-6 py-3 sm:px-8 sm:py-4 shadow-md hover:shadow-3xl hover:shadow-red-700/40 
          hover:cursor-pointer hover:bg-red-600 active:bg-red-900 transition-all duration-200 uppercase tracking-widest text-base sm:text-lg active:scale-95 ring-3 ring-amber-400"
        >
          Donate
        </button>
      </div>
    );
  }
);

FloatingDonateButton.displayName = 'FloatingDonateButton';

export default FloatingDonateButton;
