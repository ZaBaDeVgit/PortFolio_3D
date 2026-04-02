"use client";

import { dataPortfolio } from "@/data";
import PortfolioCard from "@/components/portfolio-card";
import PageTransition from "@/components/page-transition";
import { motion } from "framer-motion";

export default function PortfolioPage() {
  return (
    <>
      <PageTransition />
      <div className="relative z-10 min-h-screen pt-28 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-black mb-4">
              Mis{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff1b00] to-[#4a2fbd]">
                Proyectos
              </span>
            </h1>
            <p className="text-white/50 text-lg max-w-md mx-auto">
              Una selección de trabajos que demuestran mi pasión por el desarrollo
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {dataPortfolio.map((project, index) => (
              <PortfolioCard key={project.id} data={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
