"use client";

import { dataAboutPage } from "@/data";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TimeLine = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const ctx = gsap.context(() => {
      const items = containerRef.current!.querySelectorAll('.timeline-item');
      
      items.forEach((item, i) => {
        gsap.fromTo(item,
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
              toggleActions: "play none none none",
            },
            delay: i * 0.1,
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="flex flex-col justify-center">
      <div ref={containerRef} className="w-full max-w-3xl mx-auto md:pb-40 md:pt-20 relative">
        {/* Timeline line */}
        <div className="timeline-line" />
        
        {dataAboutPage.map((data, index) => (
          <div
            key={data.id}
            className="timeline-item flex items-start relative pl-16 sm:pl-20 mb-12"
          >
            {/* Dot */}
            <div className="timeline-dot" style={{ top: '8px' }} />

            {/* Content */}
            <div className="ml-4 flex-1 glass rounded-2xl p-6">
              <time className="inline-block px-3 py-1 mb-3 text-xs font-semibold uppercase w-fit text-emerald-300 bg-emerald-900/30 rounded-full border border-emerald-500/20">
                {data.date}
              </time>
              <h3 className="mb-2 text-xl font-bold text-white">{data.title}</h3>
              <div className="text-lg font-semibold text-[#ff1b00] mb-3">
                {data.subtitle}
              </div>
              <p className="text-white/70">{data.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeLine;
