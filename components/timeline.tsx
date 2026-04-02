"use client";

import { dataAboutPage } from "@/data";
import { motion } from "framer-motion";

const Timeline = () => {
  return (
    <div className="relative z-10 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black text-center mb-16"
        >
          Mi <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff1b00] to-[#4a2fbd]">Trayectoria</span>
        </motion.h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#ff1b00] via-[#4a2fbd] to-transparent" />

          {dataAboutPage.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.7, ease: "easeOut" }}
              className="relative pl-16 md:pl-20 mb-12 last:mb-0"
            >
              {/* Dot */}
              <div
                className="absolute left-[15px] md:left-[23px] top-2 w-3.5 h-3.5 rounded-full bg-[#ff1b00] border-4 border-[#0a0a0a] z-10"
                style={{ boxShadow: "0 0 15px rgba(255,27,0,0.5)" }}
              />

              {/* Card */}
              <div className="p-6 md:p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-[#ff1b00]/20 transition-all duration-300 group">
                <span className="inline-block px-3 py-1 mb-4 text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 rounded-full border border-emerald-500/20">
                  {item.date}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-[#ff1b00] transition-colors">
                  {item.title}
                </h3>
                <p className="text-lg font-semibold text-[#ff1b00]/80 mb-3">{item.subtitle}</p>
                <p className="text-white/60 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
