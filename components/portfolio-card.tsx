"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { useRef, useCallback, useState } from "react";

interface PortfolioCardProps {
  data: {
    id: number;
    title: string;
    image: string;
    urlGithub: string;
    urlDemo: string;
  };
  index: number;
}

const PortfolioCard = ({ data, index }: PortfolioCardProps) => {
  const { title, image, urlGithub, urlDemo } = data;
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  }, []);

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -8 }}
      className="group relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#ff1b00]/30 transition-all duration-500"
      style={{
        background: `radial-gradient(600px circle at ${mousePos.x}% ${mousePos.y}%, rgba(255,27,0,0.06), transparent 40%)`,
      }}
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={image.startsWith('/') ? `/PortFolio_3D${image}` : image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

        {/* Overlay actions */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-8 group-hover:translate-y-0">
          {urlGithub !== "#!" && (
            <Link
              href={urlGithub}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all border border-white/20"
            >
              <Github size={20} className="text-white" />
            </Link>
          )}
          {urlDemo !== "#!" && (
            <Link
              href={urlDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-[#ff1b00] hover:bg-[#ff1b00]/80 transition-all shadow-lg shadow-[#ff1b00]/30"
            >
              <ExternalLink size={20} className="text-white" />
            </Link>
          )}
        </div>
      </div>

      {/* Info */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-white group-hover:text-[#ff1b00] transition-colors duration-300">
          {title}
        </h3>
        <div className="mt-3 flex items-center gap-2">
          <span className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-white/40 border border-white/10">
            Project
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioCard;
