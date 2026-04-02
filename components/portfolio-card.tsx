"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

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

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-gray-900/40 rounded-lg overflow-hidden border border-gray-800 hover:border-red-500/50 transition-colors"
    >
      <div className="aspect-video bg-gray-800">
        <img
          src={image.startsWith('/') ? `/PortFolio_3D${image}` : image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-white mb-3">{title}</h3>
        <div className="flex gap-3">
          {urlGithub !== "#!" && (
            <Link
              href={urlGithub}
              target="_blank"
              className="flex items-center gap-1 text-sm text-gray-400 hover:text-white"
            >
              <Github size={16} /> GitHub
            </Link>
          )}
          {urlDemo !== "#!" && (
            <Link
              href={urlDemo}
              target="_blank"
              className="flex items-center gap-1 text-sm text-red-500 hover:text-red-400"
            >
              <ExternalLink size={16} /> Demo
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioCard;
