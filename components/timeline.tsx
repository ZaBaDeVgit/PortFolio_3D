"use client";

import { dataAboutPage } from "@/data";
import { motion } from "framer-motion";

const Timeline = () => {
  return (
    <div className="relative z-10 py-16 px-6">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-3xl md:text-4xl font-bold text-center mb-12"
      >
        Mi <span className="text-red-500">Trayectoria</span>
      </motion.h2>

      <div className="max-w-3xl mx-auto">
        {dataAboutPage.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            className="relative pl-8 mb-8 border-l-2 border-gray-800"
          >
            <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-red-600" />
            
            <div className="bg-gray-900/60 p-6 rounded-lg border border-gray-800">
              <span className="inline-block px-3 py-1 text-xs text-green-400 bg-green-900/20 rounded-full mb-3">
                {item.date}
              </span>
              <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
              <p className="text-red-400 text-sm mb-2">{item.subtitle}</p>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
