import React from 'react';

interface SectionHeadingProps {
  badge: string;
  badgeIcon?: React.ReactNode;
  titleLight: string;
  titleHighlight: string;
  titleSuffix?: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  badgeIcon,
  titleLight,
  titleHighlight,
  titleSuffix = '',
  description,
  align = 'center',
  className = '',
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`flex flex-col ${isCenter ? 'items-center text-center' : 'items-start text-left'} ${className}`}>
      
      {/* BADGE */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold uppercase tracking-wider mb-4 shadow-sm shadow-cyan-500/10">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
        {badgeIcon}
        <span>{badge}</span>
      </div>

      {/* TITLE */}
      <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
        <span>{titleLight} </span>
        <span className="text-gradient-cyan">{titleHighlight}</span>
        {titleSuffix && <span> {titleSuffix}</span>}
      </h2>

      {/* SUBTITLE */}
      {description && (
        <p className={`mt-4 text-base sm:text-lg text-slate-400 font-normal leading-relaxed max-w-3xl ${isCenter ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}
    </div>
  );
};
