'use client';

import React from 'react';
import { cn } from '@/lib/classNames';

interface HeaderProps {
  onDonateClick?: () => void;
}

const Header = React.forwardRef<HTMLDivElement, HeaderProps>(
  ({ onDonateClick }, ref) => {
    return (
      <header ref={ref} className="bg-white h-20 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          {/* Logo and Navigation */}
          <div className="flex items-center gap-10">
            <img src="https://placehold.co/54x54" alt="Logo" className="w-14 h-14" />
            <nav className="hidden md:flex items-center gap-10">
              <a href="#" className="text-red-900 text-xl font-cinzel font-medium hover:text-red-700 transition-colors">Ensuring the Future</a>
              <a href="#" className="text-red-900 text-xl font-cinzel font-medium hover:text-red-700 transition-colors">Latin Patriarch</a>
              <a href="#" className="text-red-900 text-xl font-cinzel font-medium hover:text-red-700 transition-colors">In the News</a>
              <a href="#" className="text-red-900 text-xl font-cinzel font-medium hover:text-red-700 transition-colors">Contact</a>
              <a href="#" className="text-red-900 text-xl font-cinzel font-medium hover:text-red-700 transition-colors">FAQs</a>
            </nav>
          </div>

          {/* Donate Button */}
          <button onClick={onDonateClick} className="px-7 py-3 bg-red-700 text-white text-2xl font-bold rounded-2xl hover:bg-red-800 transition-all">
            Donate
          </button>
        </div>
      </header>
    );
  }
);

Header.displayName = 'Header';

export default Header;
