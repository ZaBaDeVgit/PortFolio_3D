"use client";

import Link from "next/link";
import { socialNetworks } from "@/data";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Header = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const chars = document.querySelectorAll('.char');
      gsap.fromTo(chars, 
        { opacity: 0, y: 50, rotateX: -90 },
        { 
          opacity: 1, 
          y: 0, 
          rotateX: 0, 
          duration: 0.8, 
          stagger: 0.03,
          ease: "back.out(1.7)",
          delay: 0.8
        }
      );
    });
    return () => ctx.revert();
  }, []);

  const title = "ZaBaDeV";
  const chars = title.split('');

  return (
    <motion.div 
      ref={headerRef}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-40 w-full px-6 md:px-10 py-4"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href={"/"}>
          <h1 ref={titleRef} className="text-4xl md:text-5xl font-black tracking-tight cursor-pointer">
            {chars.map((char, i) => (
              <span 
                key={i} 
                className={`char inline-block ${
                  char === 'D' || char === 'e' || char === 'V' 
                    ? 'text-3d-secondary' 
                    : 'text-3d-primary'
                }`}
              >
                {char}
              </span>
            ))}
          </h1>
        </Link>

        <div className="flex items-center gap-4 md:gap-6">
          {socialNetworks.map(({ logo, src, id }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + id * 0.1, type: "spring" }}
            >
              <Link
                href={src}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon text-white text-lg md:text-xl"
              >
                {logo}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Header;
