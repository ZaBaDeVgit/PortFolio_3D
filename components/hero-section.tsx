import Link from 'next/link';
import { ArrowDown, ArrowUpRight, Github, Linkedin } from 'lucide-react';
import HeroArt from './hero-art';
import { profile } from '@/data';

export default function HeroSection() {
  return (
    <section className="hero container" aria-labelledby="hero-heading">
      <div className="hero-content">
        <div className="availability">
          <span className="live-dot" /> Abierto a nuevas oportunidades
        </div>
        <p className="eyebrow hero-eyebrow">
          DESARROLLADOR FULL STACK & FORMADOR
        </p>
        <h1 id="hero-heading">
          Del código a lo
          <br />
          <span className="hero-highlight">
            extraordinario
            <span className="heading-asterisk" aria-hidden="true">
              ✳
            </span>
          </span>
          <span className="accent">.</span>
        </h1>
        <p className="hero-description">
          Soy <strong>Juan José</strong>, aunque por aquí me conocen como{' '}
          <strong>ZaBaDeV</strong>. Transformo ideas en experiencias digitales
          que conectan, sorprenden y funcionan.
        </p>
        <div className="hero-actions">
          <Link className="button button-primary" href="/portfolio/">
            Explorar proyectos <ArrowUpRight size={18} />
          </Link>
          <Link className="button button-text" href="/about-me/">
            Un poco sobre mí <ArrowUpRight size={17} />
          </Link>
        </div>
        <div className="hero-socials">
          <a href={profile.github} target="_blank" rel="noopener noreferrer">
            <Github size={17} /> GitHub <ArrowUpRight size={12} />
          </a>
          <span className="social-divider" />
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            <Linkedin size={17} /> LinkedIn <ArrowUpRight size={12} />
          </a>
          <span className="hero-location">
            <span /> España · Conectado al mundo
          </span>
        </div>
      </div>
      <HeroArt />
      <a href="#selected-work" className="scroll-cue">
        <span className="scroll-icon">
          <ArrowDown size={15} />
        </span>{' '}
        Sigue explorando <span className="scroll-line" />
      </a>
      <div className="hero-note">
        <span className="mono">01 / 04</span>
        <span>
          No es solo código.
          <br />
          Es lo que puedes hacer con él.
        </span>
      </div>
    </section>
  );
}
