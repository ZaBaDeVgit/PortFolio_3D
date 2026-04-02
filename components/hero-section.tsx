"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative z-10 min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center md:text-left order-2 md:order-1"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-sm uppercase tracking-widest text-red-500 mb-4 font-semibold"
          >
            Full Stack Developer & Formador
          </motion.p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
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
                className="text-red-500 font-bold"
              />
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-lg text-gray-300 mb-8 max-w-lg"
          >
            Soy Formador Online y Desarrollador Full Stack, apasionado por
            combinar diseño y desarrollo para construir experiencias digitales
            intuitivas y con impacto duradero.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap gap-4 justify-center md:justify-start"
          >
            <Link
              href="/portfolio/"
              className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors"
            >
              Ver proyectos
            </Link>
            <Link
              href="/contact/"
              className="px-8 py-3 border border-gray-600 hover:border-red-500 text-white font-semibold rounded-lg transition-colors"
            >
              Contactar
            </Link>
          </motion.div>
        </motion.div>

        {/* Right: Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center order-1 md:order-2"
        >
          <div className="w-64 h-64 md:w-80 md:h-80 relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-600 to-purple-800 opacity-20" />
            <img
              src="/PortFolio_3D/home-4.png"
              alt="ZaBaDeV"
              className="w-full h-full object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
