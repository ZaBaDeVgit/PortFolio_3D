"use client";

import { skillsData } from "@/data";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const SkillBar = ({ name, percentage, color, index }: { name: string; percentage: number; color: string; index: number }) => {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(percentage), index * 80);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [percentage, index]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="p-4 bg-gray-900/40 rounded-lg border border-gray-800"
    >
      <div className="flex justify-between mb-2">
        <span className="text-white font-medium">{name}</span>
        <span className="text-gray-400">{width}%</span>
      </div>
      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000"
          style={{
            width: `${width}%`,
            background: color,
          }}
        />
      </div>
    </motion.div>
  );
};

export default SkillBar;
