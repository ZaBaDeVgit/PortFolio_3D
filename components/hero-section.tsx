"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      className="relative z-10 min-h-screen flex items-center justify-center px-6"
    >
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="text-center md:text-left order-2 md:order-1"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-sm md:text-base uppercase tracking-[0.3em] text-[#ff1b00] mb-4 font-semibold"
          >
            Full Stack Developer & Formador
          </motion.p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] mb-6">
            <span className="block text-white">Si puedes</span>
            <span className="block text-white">ImaginarlO,</span>
            <span className="block mt-2">
              <TypeAnimation
                sequence={[
                  "puedes programarlO",
                  2000,
                  "puedes optimizarlO",
                  2000,
                  "puedes implementarlO",
                  2000,
                  "puedes desarrollarlO",
                  2000,
                ]}
                wrapper="span"
                speed={40}
                repeat={Infinity}
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff1b00] via-[#fb4a02] to-[#4a2fbd]"
              />
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="text-lg md:text-xl text-white/60 mb-8 max-w-lg mx-auto md:mx-0"
          >
            Soy Formador Online y Desarrollador Full Stack, apasionado por
            combinar diseño y desarrollo para construir experiencias digitales
            intuitivas, accesibles y con un impacto duradero.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="flex flex-wrap items-center justify-center md:justify-start gap-4"
          >
            <Link
              href="/portfolio/"
              className="group relative px-8 py-4 rounded-2xl bg-gradient-to-r from-[#ff1b00] to-[#fb4a02] text-white font-bold text-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,27,0,0.4)] hover:-translate-y-1"
            >
              <span className="relative z-10">🚀 Ver proyectos</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#fb4a02] to-[#ff1b00] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            <Link
              href="/contact/"
              className="group px-8 py-4 rounded-2xl border-2 border-white/20 text-white font-bold text-lg backdrop-blur-sm transition-all duration-300 hover:border-[#ff1b00] hover:bg-[#ff1b00]/10 hover:-translate-y-1"
            >
              💬 Contacta conmigo
            </Link>
          </motion.div>
        </motion.div>

        {/* Right: Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          className="flex justify-center items-center order-1 md:order-2"
        >
          <div className="relative">
            {/* Morphing blob background */}
            <div
              className="absolute inset-0 w-72 h-72 md:w-96 md:h-96 animate-morph"
              style={{
                background: "linear-gradient(135deg, #ff1b00, #4a2fbd, #ff1b00)",
                backgroundSize: "200% 200%",
                animation: "morph 8s ease-in-out infinite, gradient 4s ease infinite",
                filter: "blur(40px)",
                opacity: 0.4,
              }}
            />
            {/* Image */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 animate-float">
              <div className="absolute inset-0 rounded-full border-2 border-white/10 animate-spin-slow" />
              <div
                className="absolute inset-2 rounded-full border border-[#ff1b00]/30"
                style={{ animation: "spin 15s linear infinite reverse" }}
              />
              <img
                src="/PortFolio_3D/home-4.png"
                alt="ZaBaDeV"
                className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_30px_rgba(255,27,0,0.3)]"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-white/30">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2"
        >
          <div className="w-1 h-2 rounded-full bg-[#ff1b00]" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
