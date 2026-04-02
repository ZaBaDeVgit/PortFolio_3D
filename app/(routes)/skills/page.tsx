"use client";

"use client";

import { skillsData } from "@/data";
import SkillBar from "@/components/skill-bar";
import { motion } from "framer-motion";

export default function SkillsPage() {
  return (
    <div className="relative z-10 min-h-screen pt-28 px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl md:text-4xl font-bold text-center mb-8"
        >
          Mis <span className="text-red-500">Skills</span>
        </motion.h1>

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
  );
}
