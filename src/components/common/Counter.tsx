import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from '../../hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

interface CounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

export const Counter: React.FC<CounterProps> = ({
  value,
  prefix = '',
  suffix = '',
  duration = 2.0,
  className = '',
}) => {
  const spanRef = useRef<HTMLSpanElement | null>(null);
  const isReducedMotion = useReducedMotion();

  useEffect(() => {
    const el = spanRef.current;
    if (!el) return;

    if (isReducedMotion) {
      el.innerText = `${prefix}${value.toLocaleString('pt-BR')}${suffix}`;
      return;
    }

    const obj = { val: 0 };

    const ctx = gsap.context(() => {
      gsap.to(obj, {
        val: value,
        duration: duration,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        onUpdate: () => {
          if (el) {
            el.innerText = `${prefix}${Math.floor(obj.val).toLocaleString('pt-BR')}${suffix}`;
          }
        },
      });
    }, el);

    return () => ctx.revert();
  }, [value, prefix, suffix, duration, isReducedMotion]);

  return (
    <span ref={spanRef} className={`font-heading font-extrabold tabular-nums ${className}`}>
      {prefix}0{suffix}
    </span>
  );
};
