import Link from 'next/link';
import { ArrowUpRight, Github, Linkedin, Youtube } from 'lucide-react';
import { profile } from '@/data';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div>
          <Link href="/" className="wordmark">
            ZaBaDeV<span className="brand-dot">.</span>
          </Link>
          <p>Código con propósito. Experiencias con carácter.</p>
        </div>
        <div className="social-links">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub (nueva pestaña)"
          >
            <Github size={19} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn (nueva pestaña)"
          >
            <Linkedin size={19} />
          </a>
          <a
            href={profile.youtube}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube (nueva pestaña)"
          >
            <Youtube size={20} />
          </a>
          <a href="#main" className="back-top" aria-label="Volver arriba">
            <ArrowUpRight size={19} />
          </a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} ZaBaDeV</span>
        <span>
          Diseñado con intención. Desarrollado con pasión.
          <span className="tiny-spark"> ✳</span>
        </span>
        <span>Hecho con Next.js & Three.js</span>
      </div>
    </footer>
  );
}
