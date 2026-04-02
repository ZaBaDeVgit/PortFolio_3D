"use client"

import { useState, useEffect, useRef } from "react";
import { itemsNavbar } from "@/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const pathname = usePathname();
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const activeIndex = itemsNavbar.findIndex(item => item.link === pathname);
    if (activeIndex >= 0 && navRef.current) {
      const items = navRef.current.querySelectorAll('.nav-item');
      const activeEl = items[activeIndex] as HTMLElement;
      if (activeEl) {
        setIndicatorStyle({
          left: activeEl.offsetLeft,
          width: activeEl.offsetWidth,
        });
      }
    }
  }, [pathname]);

  return (
    <motion.div 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
    >
      <nav className="glass-strong rounded-2xl px-2 py-2 shadow-2xl">
        <div ref={navRef} className="flex items-center gap-1 relative">
          <AnimatePresence>
            {indicatorStyle.width > 0 && (
              <motion.div
                className="nav-indicator absolute"
                initial={false}
                animate={{ left: indicatorStyle.left, width: indicatorStyle.width }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </AnimatePresence>
          
          {itemsNavbar.map((item) => (
            <div
              key={item.id}
              className="nav-item relative"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <Link href={item.link} className="flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className={pathname === item.link ? 'text-[#ff1b00]' : 'text-white'}
                >
                  {item.icon}
                </motion.div>
              </Link>
              <div className="tooltip-modern">{item.tooltip}</div>
            </div>
          ))}
        </div>
      </nav>
    </motion.div>
  );
}

export default Navbar;
