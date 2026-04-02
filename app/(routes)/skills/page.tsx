"use client";

import { skillsData } from "@/data";
import SkillBar from "@/components/skill-bar";
import PageTransition from "@/components/page-transition";
import { motion } from "framer-motion";

export default function SkillsPage() {
  return (
    <>
      <PageTransition />
      <div className="relative z-10 min-h-screen pt-28 px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-black mb-4">
              Mis{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff1b00] to-[#4a2fbd]">
                Skills
              </span>
            </h1>
            <p className="text-white/50 text-lg max-w-md mx-auto">
              Tecnologías y herramientas que domino
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skillsData.map((skill, index) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                percentage={skill.percentage}
                color={skill.color}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
