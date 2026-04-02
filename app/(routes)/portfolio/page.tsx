"use client";

import { dataPortfolio } from "@/data";
import PortfolioCard from "@/components/portfolio-card";
import { motion } from "framer-motion";

export default function PortfolioPage() {
  return (
    <div className="relative z-10 min-h-screen pt-28 px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl md:text-4xl font-bold text-center mb-8"
        >
          Mis <span className="text-red-500">Proyectos</span>
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {dataPortfolio.map((project, index) => (
            <PortfolioCard key={project.id} data={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
