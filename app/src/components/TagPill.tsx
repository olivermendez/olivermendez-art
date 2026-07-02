import type { ReactNode } from 'react';

export type TagPillVariant = 'light' | 'dark' | 'white';

interface TagPillProps {
  children: ReactNode;
  variant?: TagPillVariant;
  className?: string;
}

const variants: Record<TagPillVariant, string> = {
  light: 'bg-white border border-border-medium text-text-secondary',
  dark: 'bg-deep-navy/60 border border-white/20 text-white',
  white: 'bg-white/90 border border-white/30 text-text-primary',
};

const TagPill = ({ children, variant = 'light', className = '' }: TagPillProps) => {
  return (
    <span
      className={`inline-flex items-center px-3.5 py-1.5 rounded-pill font-mono text-[11px] uppercase tracking-wider ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
};

export default TagPill;
