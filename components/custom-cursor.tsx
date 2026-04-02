"use client";

import { useEffect, useRef, useState } from "react";
import { useMousePosition } from "@/hooks/use-mouse-position";

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const { x, y } = useMousePosition();
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  // Main dot follows instantly
  useEffect(() => {
    if (dotRef.current) {
      dotRef.current.style.transform = `translate(${x - 3}px, ${y - 3}px)`;
    }
  }, [x, y]);

  // Trail follows with delay
  useEffect(() => {
    let trailX = 0;
    let trailY = 0;
    let animationId: number;

    const animate = () => {
      trailX += (x - trailX) * 0.08;
      trailY += (y - trailY) * 0.08;

      if (trailRef.current) {
        trailRef.current.style.transform = `translate(${trailX - 1}px, ${trailY - 1}px)`;
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [x, y]);

  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest(
          'a, button, [role="button"], .cursor-pointer, input, textarea, [data-cursor="hover"]'
        )
      ) {
        setIsHovering(true);
      }
    };
    const handleMouseOut = () => setIsHovering(false);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      {/* Main dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          width: isHovering ? "10px" : isClicking ? "5px" : "6px",
          height: isHovering ? "10px" : isClicking ? "5px" : "6px",
          borderRadius: isHovering ? "2px" : "50%",
          background: isHovering
            ? "linear-gradient(135deg, #ff1b00, #fb4a02)"
            : "#ff1b00",
          boxShadow: isHovering
            ? "0 0 15px rgba(255,27,0,0.8), 0 0 30px rgba(255,27,0,0.4)"
            : "0 0 8px rgba(255,27,0,0.6)",
          transition: "all 0.2s ease",
        }}
      />
      {/* Subtle trail */}
      <div
        ref={trailRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          width: "2px",
          height: "2px",
          borderRadius: "50%",
          background: "rgba(255,27,0,0.4)",
          boxShadow: "0 0 4px rgba(255,27,0,0.3)",
        }}
      />
    </>
  );
};

export default CustomCursor;
