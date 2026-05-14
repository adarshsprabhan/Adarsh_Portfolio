import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  title?: string;
  subtitle?: string;
  description?: string;
  fullHeight?: boolean;
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, title, subtitle, description, fullHeight = false, children, ...props }, ref) => (
    <section
      ref={ref}
      className={cn('w-full py-20 px-4 md:px-8', fullHeight && 'min-h-screen flex items-center justify-center', className)}
      {...props}
    >
      <div className="max-w-7xl mx-auto">
        {title && (
          <div className="mb-12">
            {subtitle && <p className="text-cyan-400 text-sm font-semibold uppercase tracking-wider mb-2">{subtitle}</p>}
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>
            {description && <p className="text-lg text-slate-400 max-w-2xl">{description}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  )
);

Section.displayName = 'Section';
