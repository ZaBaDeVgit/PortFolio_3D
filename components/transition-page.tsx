"use client"

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";

const TransitionPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (!containerRef.current) return;
    
    const tl = gsap.timeline();
    
    tl.fromTo(containerRef.current,
      { clipPath: "circle(0% at 50% 50%)" },
      { clipPath: "circle(150% at 50% 50%)", duration: 0.7, ease: "power3.inOut" }
    )
    .to(containerRef.current,
      { clipPath: "circle(0% at 50% 50%)", duration: 0.5, ease: "power3.inOut", delay: 0.15 }
    );
  }, [pathname]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[9998] pointer-events-none"
      style={{ clipPath: "circle(0% at 50% 50%)" }}
    >
      <div className="w-full h-full bg-gradient-to-br from-[#ff1b00]/90 via-[#4a2fbd]/90 to-[#0a0a0a]" />
    </div>
  );
}

export default TransitionPage;
