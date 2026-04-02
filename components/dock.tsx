"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { itemsNavbar } from "@/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Dock = () => {
  const pathname = usePathname();
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [mouseX, setMouseX] = useState(0);
  const dockRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (dockRef.current) {
      const rect = dockRef.current.getBoundingClientRect();
      setMouseX(e.clientX - rect.left);
    }
  };

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
      className="fixed bottom-6 left-0 right-0 z-50 flex justify-center pointer-events-none"
    >
      <div
        ref={dockRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setHoveredId(null)}
        className="pointer-events-auto flex items-end gap-1 px-3 py-2 rounded-2xl bg-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl"
        style={{
          boxShadow: "0 25px 50px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.05) inset",
        }}
      >
        {itemsNavbar.map((item, i) => {
          const isActive = pathname === item.link;
          const isHovered = hoveredId === item.id;
          
          return (
            <div
              key={item.id}
              className="relative flex flex-col items-center"
              onMouseEnter={() => setHoveredId(item.id)}
            >
              <Link href={item.link} className="flex items-center justify-center">
                <motion.div
                  animate={{
                    scale: isHovered ? 1.4 : isActive ? 1.2 : 1,
                    y: isHovered ? -8 : 0,
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className={`flex items-center justify-center w-12 h-12 rounded-xl transition-colors duration-200 ${
                    isActive
                      ? "bg-gradient-to-br from-[#ff1b00] to-[#fb4a02] shadow-lg shadow-red-500/30"
                      : "hover:bg-white/10"
                  }`}
                >
                  <div className={isActive ? "text-white" : "text-white/70"}>
                    {item.icon}
                  </div>
                </motion.div>
              </Link>
              
              {/* Tooltip */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.8 }}
                    className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-lg bg-black/90 backdrop-blur-sm text-xs text-white whitespace-nowrap border border-white/10"
                  >
                    {item.tooltip}
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black/90 rotate-45 border-r border-b border-white/10" />
                  </motion.div>
                )}
              </AnimatePresence>
              
              {/* Active dot */}
              {isActive && (
                <motion.div
                  layoutId="activeDot"
                  className="w-1 h-1 rounded-full bg-[#ff1b00] mt-1"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Dock;
