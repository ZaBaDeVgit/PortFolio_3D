"use client";

import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import BaseImage from "./base-image";

const Introduction = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.5 });
      
      tl.fromTo(imageRef.current,
        { opacity: 0, scale: 0.5, rotate: -10 },
        { opacity: 1, scale: 1, rotate: 0, duration: 1.2, ease: "back.out(1.7)" }
      )
      .fromTo('.reveal-item',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power3.out" },
        "-=0.6"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Background glow orbs */}
      <div className="glow-orb w-96 h-96 bg-[#ff1b00] top-20 -left-48" />
      <div className="glow-orb w-80 h-80 bg-[#4a2fbd] bottom-20 right-0" />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 grid items-center md:grid-cols-2 gap-8 md:gap-12">
        {/* Image side */}
        <div ref={imageRef} className="flex justify-center items-center order-2 md:order-1">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#ff1b00] to-[#4a2fbd] blur-2xl opacity-30 animate-pulse" />
            <BaseImage
              src="/home-4.png"
              priority
              width={280}
              height={280}
              alt="Profile pic"
              className="relative w-56 h-56 md:w-72 md:h-72 object-contain animate-float image-hover-lift"
            />
          </div>
        </div>

        {/* Text side */}
        <div ref={textRef} className="flex flex-col justify-center items-center md:items-start order-1 md:order-2 text-center md:text-left">
          <h1 className="reveal-item text-3xl md:text-5xl font-black leading-tight mb-6">
            <span className="text-gradient">Si puedes ImaginarlO,</span>
            <br />
            <TypeAnimation
              sequence={[
                "puedes programarlO",
                1500,
                "puedes optimizarlO",
                1500,
                "puedes implementarlO",
                1500,
                "puedes desarrollarlO",
                1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="block text-gradient-primary"
            />
          </h1>

          <p className="reveal-item text-lg md:text-xl text-white/80 mb-8 max-w-lg">
            Soy Formador Online y Desarrollador Full Stack, apasionado por
            combinar diseño y desarrollo para construir experiencias digitales
            intuitivas, accesibles y con un impacto duradero.
          </p>

          <div className="reveal-item flex flex-wrap items-center justify-center md:justify-start gap-4">
            <Link
              href="/portfolio/"
              className="btn-glow"
            >
              <span>🚀 Ver proyectos</span>
            </Link>
            <Link
              href="/contact/"
              className="btn-outline"
            >
              <span>💬 Contacta conmigo</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
