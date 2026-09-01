import { useState, useEffect, useRef } from 'react';

export interface MouseCoordinates {
  x: number; // normalized -1 to 1
  y: number; // normalized -1 to 1
  clientX: number;
  clientY: number;
}

export function useMousePosition() {
  const [mouse, setMouse] = useState<MouseCoordinates>({
    x: 0,
    y: 0,
    clientX: 0,
    clientY: 0,
  });

  const targetRef = useRef({ x: 0, y: 0, clientX: 0, clientY: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const normalizedX = (event.clientX / innerWidth) * 2 - 1;
      const normalizedY = -(event.clientY / innerHeight) * 2 + 1;

      targetRef.current = {
        x: normalizedX,
        y: normalizedY,
        clientX: event.clientX,
        clientY: event.clientY,
      };

      setMouse(targetRef.current);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return mouse;
}
