"use client"

import { useEffect, useRef } from "react";
import CountUp from "react-countup";
import { dataCounter } from "@/data";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CounterSkills = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const ctx = gsap.context(() => {
      const items = containerRef.current!.querySelectorAll('.counter-item');
      gsap.fromTo(items,
        { opacity: 0, y: 30, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="grid justify-between max-w-3xl grid-cols-2 gap-3 mx-auto my-8 md:grid-cols-4 md:gap-6">
      {dataCounter.map(({ id, endCounter, text, lineRight, lineRightMobile }) => (
        <div key={id} className="counter-item">
          <div className={`px-4 py-4 glass rounded-xl text-center ${lineRight ? 'md:border-r border-white/10' : ''}`}>
            <p className="flex items-center justify-center mb-2 text-3xl font-extrabold md:text-4xl text-gradient-primary">
              + <CountUp end={endCounter} start={0} duration={3} delay={0.5} />
            </p>
            <p className="text-xs uppercase text-white/60">{text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CounterSkills;
