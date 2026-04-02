import { skillsData } from "@/data";
import SkillBar from "@/components/skill-bar";

export default function SkillsPage() {
  return (
    <div className="pt-24 px-6 pb-20">
      <h1 className="text-3xl font-bold text-center mb-8">
        Mis <span className="text-red-600">Skills</span>
      </h1>

      <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
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
  );
}
