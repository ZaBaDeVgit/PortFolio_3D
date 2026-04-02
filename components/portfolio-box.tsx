"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { useRef, useCallback } from "react";
import BaseImage from "./base-image";

interface PortfolioBoxProps {
  data: {
    id: number;
    title: string;
    image: string;
    urlGithub: string;
    urlDemo: string;
  };
}

const PortfolioBox = ({ data }: PortfolioBoxProps) => {
  const { title, image, urlGithub, urlDemo } = data;
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    cardRef.current.style.setProperty('--mouse-x', `${x}%`);
    cardRef.current.style.setProperty('--mouse-y', `${y}%`);
  }, []);

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="card-3d group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="relative overflow-hidden rounded-t-2xl">
        <BaseImage
          src={image}
          alt={title}
          width={400}
          height={300}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Overlay actions */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
          {urlGithub !== '#!' && (
            <Link
              href={urlGithub}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass hover:bg-white/20 transition-all"
            >
              <Github size={20} />
            </Link>
          )}
          {urlDemo !== '#!' && (
            <Link
              href={urlDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-[#ff1b00] hover:bg-[#ff1b00]/80 transition-all"
            >
              <ExternalLink size={20} />
            </Link>
          )}
        </div>
      </div>
      
      <div className="p-4 relative z-10">
        <h3 className="text-lg font-bold text-white group-hover:text-[#ff1b00] transition-colors">
          {title}
        </h3>
        <div className="mt-2 flex gap-2">
          <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/60">
            Project
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default PortfolioBox;
