"use client";

import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 pt-28">
      <div className="max-w-4xl mx-auto w-full grid md:grid-cols-2 gap-8 items-center">
        <div className="text-center md:text-left">
          <p className="text-sm uppercase tracking-widest text-red-600 mb-4 font-semibold">
            Full Stack Developer & Formador
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Si puedes</span>
            <br />
            <span className="text-white">ImaginarlO,</span>
          </h1>
          
          <p className="text-xl text-red-600 font-bold mb-6">
            <TypeAnimation
              sequence={[
                "puedes programarlO",
                2000,
                "puedes desarrollarlO",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </p>

          <p className="text-gray-400 mb-6">
            Soy Formador Online y Desarrollador Full Stack, apasionado por
            combinar diseño y desarrollo para crear experiencias digitales.
          </p>

          <div className="flex gap-4 justify-center md:justify-start">
            <Link
              href="/portfolio/"
              className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded"
            >
              Ver proyectos
            </Link>
            <Link
              href="/contact/"
              className="px-6 py-2 border border-gray-600 hover:border-red-500 text-white font-semibold rounded"
            >
              Contactar
            </Link>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-48 h-48 md:w-64 md:h-64">
            <img
              src="/PortFolio_3D/home-4.png"
              alt="ZaBaDeV"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
