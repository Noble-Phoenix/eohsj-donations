import React, { ReactNode } from 'react';
import { cn } from '@/lib/classNames';

type SectionTheme = 'light' | 'dark' | 'accent' | 'white';

interface SectionProps {
  theme?: SectionTheme;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

const themeClasses: Record<SectionTheme, string> = {
  light: 'bg-amber-50',
  dark: 'bg-zinc-900',
  accent: 'bg-red-700',
  white: 'bg-white',
};

const titleTextColor: Record<SectionTheme, string> = {
  light: 'text-zinc-900',
  dark: 'text-white',
  accent: 'text-white',
  white: 'text-zinc-900',
};

const Section: React.FC<SectionProps> = ({
  theme = 'light',
  title,
  subtitle,
  children,
  className,
}) => {
  const themeClass = themeClasses[theme];
  const titleColor = titleTextColor[theme];

  return (
    <section className={cn(themeClass, 'w-full px-24 py-24 text-center', className)}>
      <div className="max-w-6xl mx-auto">
        {title && (
          <h2 className={cn('text-lg font-normal leading-7 mb-12 uppercase', titleColor)}>
            {title}
          </h2>
        )}
        {subtitle && (
          <h3 className={cn('text-4xl font-cinzel leading-10 mb-12 max-w-4xl mx-auto', titleColor)}>
            {subtitle}
          </h3>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
