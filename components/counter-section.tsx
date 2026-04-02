"use client";

import { dataCounter } from "@/data";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const CounterSection = () => {
  return (
    <div className="relative z-10 py-16 px-6 bg-gray-900/50">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-4">
        {dataCounter.map(({ id, endCounter, text }) => (
          <motion.div
            key={id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: id * 0.1 }}
            className="text-center p-4 bg-black/40 rounded-lg border border-gray-800"
          >
            <div className="text-3xl md:text-4xl font-bold text-red-500">
              +<CountUp end={endCounter} duration={3} />
            </div>
            <div className="text-xs md:text-sm text-gray-400 mt-1">{text}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CounterSection;
