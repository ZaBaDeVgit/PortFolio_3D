'use client';

import AvatarServices from "@/components/avatar-services";
import CircleImage from "@/components/circle-image";
import TransitionPage from "@/components/transition-page";
import { useEffect, useRef } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: "Java SE", percentage: 80, color: "#F16529" },
  { name: "Java EE", percentage: 70, color: "#2965F1" },
  { name: "JavaScript", percentage: 90, color: "#F7DF1E" },
  { name: "React", percentage: 85, color: "#61DAFB" },
  { name: "Angular", percentage: 75, color: "#DD0031" },
  { name: "Vite", percentage: 80, color: "#646CFF" },
  { name: "Android", percentage: 70, color: "#3DDC84" },
  { name: "SQL", percentage: 85, color: "#00758F" },
  { name: "PHP", percentage: 65, color: "#777BB3" },
  { name: "C#", percentage: 80, color: "#9B4F96" },
  { name: "C++", percentage: 75, color: "#00599C" },
  { name: "C", percentage: 90, color: "#A8B9CC" },
  { name: "Next.js", percentage: 85, color: "#fff" },
  { name: "TypeScript", percentage: 80, color: "#3178C6" },
  { name: "Node.js", percentage: 75, color: "#339933" },
  { name: "Python", percentage: 70, color: "#3776AB" },
];

const SkillsPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const ctx = gsap.context(() => {
      const bars = containerRef.current!.querySelectorAll('.skill-progress');
      
      gsap.fromTo(bars,
        { width: "0%" },
        {
          width: (i) => {
            const skill = skills[i];
            return skill ? `${skill.percentage}%` : "0%";
          },
          duration: 1.5,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
          },
        }
      );

      const items = containerRef.current!.querySelectorAll('.skill-item');
      gsap.fromTo(items,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.05,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <TransitionPage />
      <CircleImage />
      <AvatarServices />
      <div ref={containerRef} className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        <h1 className="text-4xl md:text-5xl font-black text-center mb-16">
          Mis <span className="text-gradient-primary">Skills</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill) => (
            <div key={skill.name} className="skill-item glass rounded-xl p-5">
              <div className="flex justify-between items-center mb-3">
                <span className="font-semibold text-white">{skill.name}</span>
                <span className="text-sm font-bold text-[#ff1b00]">{skill.percentage}%</span>
              </div>
              <div className="skill-bar-container">
                <div
                  className="skill-progress"
                  style={{
                    background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`,
                    boxShadow: `0 0 15px ${skill.color}40`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SkillsPage;
