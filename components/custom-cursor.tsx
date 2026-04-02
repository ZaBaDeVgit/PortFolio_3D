"use client";

import { useEffect, useRef, useState } from "react";
import { useMousePosition } from "@/hooks/use-mouse-position";

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);
  const { x, y } = useMousePosition();
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    if (dotRef.current) {
      dotRef.current.style.transform = `translate(${x}px, ${y}px)`;
    }
  }, [x, y]);

  useEffect(() => {
    let outlineX = 0;
    let outlineY = 0;
    let animationId: number;

    const animate = () => {
      outlineX += (x - outlineX) * 0.12;
      outlineY += (y - outlineY) * 0.12;

      if (outlineRef.current) {
        outlineRef.current.style.transform = `translate(${outlineX}px, ${outlineY}px)`;
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
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#ff1b00] pointer-events-none z-[9999] mix-blend-difference"
        style={{
          transform: `translate(${x}px, ${y}px)`,
          boxShadow: "0 0 10px #ff1b00, 0 0 20px #ff1b00",
          transition: isClicking ? "transform 0.1s, width 0.2s, height 0.2s" : "transform 0.05s",
          width: isClicking ? "6px" : "8px",
          height: isClicking ? "6px" : "8px",
        }}
      />
      <div
        ref={outlineRef}
        className="fixed top-0 left-0 w-10 h-10 rounded-full border-2 border-[#ff1b00]/50 pointer-events-none z-[9998] mix-blend-difference"
        style={{
          transition: "width 0.3s ease, height 0.3s ease, border-color 0.3s ease, background-color 0.3s ease",
          width: isHovering ? "50px" : isClicking ? "35px" : "40px",
          height: isHovering ? "50px" : isClicking ? "35px" : "40px",
          borderColor: isHovering ? "#ff1b00" : "rgba(255,27,0,0.5)",
          backgroundColor: isHovering ? "rgba(255,27,0,0.1)" : "transparent",
        }}
      />
    </>
  );
};

export default CustomCursor;
