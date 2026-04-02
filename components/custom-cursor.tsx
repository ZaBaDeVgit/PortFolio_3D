"use client";

import { useEffect, useRef, useState } from 'react';
import { useMousePosition } from '@/utils/mouse-position';

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);
  const { x, y } = useMousePosition();
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (dotRef.current) {
      dotRef.current.style.left = `${x}px`;
      dotRef.current.style.top = `${y}px`;
    }
  }, [x, y]);

  useEffect(() => {
    let outlineX = x;
    let outlineY = y;
    let animationId: number;

    const animate = () => {
      outlineX += (x - outlineX) * 0.15;
      outlineY += (y - outlineY) * 0.15;
      
      if (outlineRef.current) {
        outlineRef.current.style.left = `${outlineX}px`;
        outlineRef.current.style.top = `${outlineY}px`;
      }
      
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [x, y]);

  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [role="button"], .cursor-pointer, input, textarea')) {
        setIsHovering(true);
      }
    };
    const handleMouseOut = () => setIsHovering(false);

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    return () => {
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={outlineRef} className={`cursor-outline ${isHovering ? 'hover' : ''}`} />
    </>
  );
};

export default CustomCursor;
