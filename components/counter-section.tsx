"use client";

import { useEffect, useRef } from "react";
import CountUp from "react-countup";
import { dataCounter } from "@/data";
import { motion } from "framer-motion";

const CounterSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="relative z-10 py-20 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
        {dataCounter.map(({ id, endCounter, text }) => (
          <motion.div
            key={id}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: id * 0.1, duration: 0.6, ease: "easeOut" }}
            className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-[#ff1b00]/30 transition-all duration-300 hover:-translate-y-2"
          >
            <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#ff1b00] to-[#fb4a02] mb-2">
              +<CountUp end={endCounter} start={0} duration={3} delay={0.5} />
            </div>
            <p className="text-xs md:text-sm uppercase tracking-wider text-white/50">{text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CounterSection;
