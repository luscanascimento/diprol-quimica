import React, { useRef } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glowOnHover?: boolean;
  tilt?: boolean;
  accentBorder?: 'cyan' | 'orange' | 'blue' | 'none';
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  glowOnHover = true,
  tilt = false,
  accentBorder = 'none',
}) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const isReducedMotion = useReducedMotion();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tilt || isReducedMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  };

  const handleMouseLeave = () => {
    if (!tilt || !cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
  };

  const borderStyles = {
    cyan: 'border-cyan-500/30 hover:border-cyan-400/60 shadow-cyan-950/30',
    orange: 'border-orange-500/30 hover:border-orange-400/60 shadow-orange-950/30',
    blue: 'border-sky-500/30 hover:border-sky-400/60 shadow-sky-950/30',
    none: 'border-slate-800/80 hover:border-cyan-500/30',
  }[accentBorder];

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-2xl bg-[#0b192e]/70 backdrop-blur-xl border ${borderStyles} transition-all duration-300 ${
        glowOnHover ? 'hover:shadow-xl hover:shadow-cyan-500/5' : ''
      } ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Top subtle highlight shimmer */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent pointer-events-none" />
      {children}
    </div>
  );
};
