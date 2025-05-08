'use client';

import { useEffect, useRef } from 'react';

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursor.style.transform = `translate(${e.clientX - 8}px, ${e.clientY - 8}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed pointer-events-none z-[100] hidden lg:block"
      style={{ mixBlendMode: 'difference' }}
    >
      <div className="w-8 h-8 flex items-center justify-center">
        <div className="w-4 h-4 rounded-full border border-white" />
      </div>
    </div>
  );
} 