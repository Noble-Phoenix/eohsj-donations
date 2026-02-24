import React from 'react';
import { cn } from '@/lib/classNames';

interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {}

const Footer = React.forwardRef<HTMLDivElement, FooterProps>(
  ({ className, ...props }, ref) => {
    return (
      <footer ref={ref} className={cn('bg-zinc-900 w-full', className)} {...props}>
        <div className="max-w-6xl mx-auto px-24 py-36">
          <div className="text-center space-y-12">
            {/* Title */}
            <h2 className="text-white text-lg font-normal leading-7 uppercase">GET IN CONTACT WITH US</h2>

            {/* Contact Info */}
            <div className="inline-flex justify-center items-center gap-24">
              {/* Phone */}
              <div className="space-y-4">
                <h3 className="text-white text-4xl font-cinzel leading-10">Phone</h3>
                <p className="text-white text-sm font-normal leading-5">(123) 456-7890</p>
              </div>

              {/* Mail */}
              <div className="space-y-4">
                <h3 className="text-white text-4xl font-cinzel leading-10">Mail</h3>
                <p className="text-white text-sm font-normal leading-5">
                  1234 Sesame Street<br />
                  Children's Network, TV 54321
                </p>
              </div>

              {/* Email */}
              <div className="space-y-4">
                <h3 className="text-white text-4xl font-cinzel leading-10">Email</h3>
                <p className="text-white text-sm font-normal leading-5">ensuring@future.com</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
);

Footer.displayName = 'Footer';

export default Footer;
