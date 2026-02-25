'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/classNames';

interface HeaderProps {
  onDonateClick?: () => void;
}

const Header = React.forwardRef<HTMLDivElement, HeaderProps>(
  ({ onDonateClick }, ref) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
      { label: 'Latin Patriarch', href: '#' },
      { label: 'In the News', href: '#' },
      { label: 'Contact', href: '#' },
      { label: 'FAQs', href: '#' },
    ];

    return (
      <header ref={ref} className="bg-white sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo and Branding */}
          <div className="flex items-center gap-6">
            <img src="https://placehold.co/54x54" alt="Logo" className="w-14 h-14" />
            <a href="#" className="text-red-900 text-lg sm:text-2xl font-cinzel font-medium hover:text-red-700 transition-colors whitespace-nowrap">
              Ensuring the Future
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-red-900 text-lg font-medium hover:text-red-700 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Section - Hamburger and Donate */}
          <div className="flex items-center gap-4">
            {/* Hamburger Menu - visible on smaller screens */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <svg
                className="w-6 h-6 text-red-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>

            {/* Donate Button */}
            <button
              onClick={onDonateClick}
              className="px-5 sm:px-7 py-3 bg-red-700 text-white font-bold rounded-2xl hover:bg-red-800 transition-all text-base sm:text-xl whitespace-nowrap"
            >
              Donate
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="lg:hidden fixed top-20 left-0 right-0 bg-gray-50 border-b border-gray-100 shadow-lg z-40">
            <nav className="flex max-w-6xl justify-end mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-2">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-4 py-2 text-red-900 text-lg font-medium hover:text-red-700 hover:bg-white rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>
    );
  }
);

Header.displayName = 'Header';

export default Header;
