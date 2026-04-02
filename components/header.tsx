"use client";

import { useEffect, useRef, useState } from "react";
import { socialNetworks } from "@/data";
import Link from "next/link";
import { motion } from "framer-motion";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (titleRef.current) {
      const chars = titleRef.current.querySelectorAll(".char");
      chars.forEach((char, i) => {
        (char as HTMLElement).style.animationDelay = `${0.8 + i * 0.05}s`;
      });
    }
  }, []);

  const title = "ZaBaDeV";

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-black/20 backdrop-blur-xl border-b border-white/5"
          : "py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        <Link href="/">
          <h1
            ref={titleRef}
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight cursor-pointer"
          >
            {title.split("").map((char, i) => (
              <span
                key={i}
                className="char inline-block animate-fade-in-up"
                style={{
                  color: ["D", "e", "V"].includes(char) ? "#ff1b00" : "#ffffff",
                  textShadow: ["D", "e", "V"].includes(char)
                    ? "0 0 20px rgba(255,27,0,0.5), 0 0 40px rgba(255,27,0,0.3)"
                    : "0 0 20px rgba(255,255,255,0.1)",
                  animation: `fadeInUp 0.6s ease-out ${0.8 + i * 0.05}s both`,
                }}
              >
                {char}
              </span>
            ))}
          </h1>
        </Link>

        <div className="flex items-center gap-3 md:gap-5">
          {socialNetworks.map(({ logo, src, id }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{
                delay: 1 + id * 0.1,
                type: "spring",
                stiffness: 300,
                damping: 15,
              }}
            >
              <Link
                href={src}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-[#ff1b00] transition-all duration-300 hover:scale-125 hover:rotate-12"
                style={{
                  filter: "drop-shadow(0 0 0px transparent)",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.filter =
                    "drop-shadow(0 0 8px rgba(255,27,0,0.5))";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.filter =
                    "drop-shadow(0 0 0px transparent)";
                }}
              >
                {logo}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
