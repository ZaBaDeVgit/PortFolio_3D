"use client";

import { useState, useEffect, useRef } from "react";
import { skillsData } from "@/data";
import { motion } from "framer-motion";

const SkillBar = ({ name, percentage, color, index }: { name: string; percentage: number; color: string; index: number }) => {
  const [width, setWidth] = useState(0);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(percentage), index * 80);
        }
      },
      { threshold: 0.3 }
    );

    if (barRef.current) observer.observe(barRef.current);
    return () => observer.disconnect();
  }, [percentage, index]);

  return (
    <motion.div
      ref={barRef}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="group p-4 md:p-5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/5 hover:border-white/10 transition-all duration-300"
    >
      <div className="flex justify-between items-center mb-3">
        <span className="font-semibold text-white/90 group-hover:text-white transition-colors">{name}</span>
        <span className="text-sm font-bold" style={{ color }}>{width}%</span>
      </div>
      <div className="h-2.5 rounded-full bg-white/10 overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out relative"
          style={{
            width: `${width}%`,
            background: `linear-gradient(90deg, ${color}, ${color}aa)`,
            boxShadow: `0 0 15px ${color}40`,
          }}
        >
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
              animation: "shimmer 2s infinite",
            }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default SkillBar;
