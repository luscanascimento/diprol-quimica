import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'orange' | 'cyan' | 'glass' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  className?: string;
  magneticStrength?: number;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  variant = 'orange',
  size = 'md',
  href,
  className = '',
  magneticStrength = 0.35,
  onClick,
  ...props
}) => {
  const btnRef = useRef<HTMLButtonElement | HTMLAnchorElement | null>(null);
  const textRef = useRef<HTMLSpanElement | null>(null);
  const isReducedMotion = useReducedMotion();

  useEffect(() => {
    const btn = btnRef.current;
    if (!btn || isReducedMotion) return;

    const xTo = gsap.quickTo(btn, 'x', { duration: 0.4, ease: 'power3.out' });
    const yTo = gsap.quickTo(btn, 'y', { duration: 0.4, ease: 'power3.out' });
    const textXTo = textRef.current ? gsap.quickTo(textRef.current, 'x', { duration: 0.3, ease: 'power2.out' }) : null;
    const textYTo = textRef.current ? gsap.quickTo(textRef.current, 'y', { duration: 0.3, ease: 'power2.out' }) : null;

    const handleMouseMove = (evt: Event) => {
      const e = evt as MouseEvent;
      const rect = btn.getBoundingClientRect();
      const relX = e.clientX - (rect.left + rect.width / 2);
      const relY = e.clientY - (rect.top + rect.height / 2);

      xTo(relX * magneticStrength);
      yTo(relY * magneticStrength);
      if (textXTo && textYTo) {
        textXTo(relX * (magneticStrength * 0.4));
        textYTo(relY * (magneticStrength * 0.4));
      }
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
      if (textXTo && textYTo) {
        textXTo(0);
        textYTo(0);
      }
    };

    btn.addEventListener('mousemove', handleMouseMove);
    btn.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      btn.removeEventListener('mousemove', handleMouseMove);
      btn.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [magneticStrength, isReducedMotion]);

  const sizeClasses = {
    sm: 'px-4 py-2 text-xs font-semibold rounded-lg gap-1.5',
    md: 'px-6 py-3.5 text-sm font-bold rounded-xl gap-2',
    lg: 'px-8 py-4 text-base font-bold rounded-xl gap-2.5',
  }[size];

  const variantClasses = {
    orange: 'bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 text-slate-950 font-bold shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-[1.02] active:scale-[0.98]',
    cyan: 'bg-gradient-to-r from-cyan-500 to-sky-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98]',
    glass: 'glass-panel text-cyan-300 hover:text-white hover:border-cyan-400/40 hover:bg-cyan-950/40',
    outline: 'border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/10 hover:border-cyan-400 hover:text-white',
  }[variant];

  const commonClasses = `relative inline-flex items-center justify-center cursor-pointer transition-all duration-200 uppercase tracking-wider font-mono select-none ${sizeClasses} ${variantClasses} ${className}`;

  if (href) {
    return (
      <a
        ref={btnRef as React.RefObject<HTMLAnchorElement>}
        href={href}
        className={commonClasses}
        onClick={onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>}
      >
        <span ref={textRef} className="relative z-10 inline-flex items-center gap-2">
          {children}
        </span>
      </a>
    );
  }

  return (
    <button
      ref={btnRef as React.RefObject<HTMLButtonElement>}
      className={commonClasses}
      onClick={onClick}
      {...props}
    >
      <span ref={textRef} className="relative z-10 inline-flex items-center gap-2">
        {children}
      </span>
    </button>
  );
};
