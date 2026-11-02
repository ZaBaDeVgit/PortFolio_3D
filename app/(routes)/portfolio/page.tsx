import type { Metadata } from 'next';
import ProjectGallery from '@/components/project-gallery';
import ContactBanner from '@/components/contact-banner';
export const metadata: Metadata = {
  title: 'Proyectos',
  description:
    'Una selección de proyectos de ZaBaDeV: aplicaciones web, juegos interactivos y experimentos de desarrollo.',
};
export default function PortfolioPage() {
  return (
    <>
      <section className="container page-section">
        <div className="page-intro">
          <p className="eyebrow">
            <span className="accent">01 /</span> IDEAS QUE COBRAN VIDA
          </p>
          <h1>
            Código en acción<span className="accent">.</span>
          </h1>
          <p>
            Cada proyecto es una oportunidad de aprender, resolver algo nuevo y
            llevar una idea un poco más lejos. Aquí tienes una selección.
          </p>
        </div>
        <ProjectGallery />
      </section>
      <ContactBanner />
    </>
  );
}
