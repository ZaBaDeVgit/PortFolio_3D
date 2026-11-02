import Link from 'next/link';
import { ArrowUpRight, Braces, GraduationCap, Layers3 } from 'lucide-react';
import HeroSection from '@/components/hero-section';
import SectionHeading from '@/components/section-heading';
import PortfolioCard from '@/components/portfolio-card';
import ContactBanner from '@/components/contact-banner';
import { projects } from '@/data';

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="tech-strip">
        <div className="container tech-strip-inner">
          <span className="tech-strip-label">
            IDEAS SIN LÍMITES.
            <br />
            <strong>EL STACK PARA HACERLAS REALIDAD.</strong>
          </span>
          <div className="tech-strip-items">
            <span>
              <span className="tech-react">⚛</span> React
            </span>
            <span>
              <span className="tech-next">N</span> Next.js
            </span>
            <span>
              <span className="tech-ts">TS</span> TypeScript
            </span>
            <span>
              <span className="tech-node">⬡</span> Node.js
            </span>
            <span>
              <span className="tech-three">△</span> Three.js
            </span>
            <span className="tech-tail">
              Y lo que venga <ArrowUpRight size={14} />
            </span>
          </div>
        </div>
      </div>
      <section className="section container" id="selected-work">
        <SectionHeading
          number="01"
          label="PROYECTOS SELECCIONADOS"
          title={
            <>
              Menos teoría.
              <br />
              Más <span className="muted-heading">hecho realidad.</span>
            </>
          }
        >
          <Link href="/portfolio/" className="button button-outline">
            Todos los proyectos <ArrowUpRight size={17} />
          </Link>
        </SectionHeading>
        <div className="projects-grid">
          {projects.slice(0, 2).map((project, index) => (
            <PortfolioCard key={project.id} data={project} index={index} />
          ))}
        </div>
      </section>
      <section className="section about-preview container">
        <div className="about-preview-title">
          <p className="eyebrow">
            <span className="accent">02 /</span> LA PERSONA DETRÁS DEL CÓDIGO
          </p>
          <h2>
            Curiosidad como motor.
            <br />
            <span className="muted-heading">Código como lenguaje.</span>
          </h2>
          <Link href="/about-me/" className="text-link">
            Conoce mi historia <ArrowUpRight size={18} />
          </Link>
        </div>
        <div className="about-preview-copy">
          <p>
            Creo en una web que no solo se vea bien, sino que{' '}
            <strong>se sienta bien</strong>. Me gusta unir la precisión del
            desarrollo con la libertad de crear algo diferente.
          </p>
          <p>
            Y porque el conocimiento crece cuando se comparte, también acompaño
            a otras personas en su camino para aprender a programar.
          </p>
          <div className="approach-tags">
            <span>
              <Braces size={16} /> Desarrollo Full Stack
            </span>
            <span>
              <GraduationCap size={17} /> Formación online
            </span>
            <span>
              <Layers3 size={16} /> Aprendizaje continuo
            </span>
          </div>
        </div>
      </section>
      <ContactBanner />
    </>
  );
}
