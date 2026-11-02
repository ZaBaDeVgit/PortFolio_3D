import type { Metadata } from 'next';
import { ArrowUpRight, Braces, Database, Layers3 } from 'lucide-react';
import Link from 'next/link';
import { skillGroups } from '@/data';
import ContactBanner from '@/components/contact-banner';
export const metadata: Metadata = {
  title: 'Stack & habilidades',
  description:
    'Las herramientas de ZaBaDeV: desarrollo frontend, backend, aplicaciones multiplataforma y formación online.',
};
const icons = [Braces, Database, Layers3];
export default function SkillsPage() {
  return (
    <>
      <section className="container page-section">
        <div className="page-intro">
          <p className="eyebrow">
            <span className="accent">03 /</span> MI CAJA DE HERRAMIENTAS
          </p>
          <h1>
            La idea primero.
            <br />
            <span className="muted-heading">La tecnología, después.</span>
          </h1>
          <p>
            No se trata de coleccionar lenguajes. Se trata de elegir las
            herramientas adecuadas para convertir cada reto en una solución.
          </p>
        </div>
        <div className="skill-groups">
          {skillGroups.map((group, index) => {
            const Icon = icons[index];
            return (
              <article className="skill-group" key={group.number}>
                <div className="skill-group-icon">
                  <Icon size={28} />
                  <span className="mono">{group.number}</span>
                </div>
                <h2>{group.title}</h2>
                <p>{group.description}</p>
                <div className="skill-chips">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
        <div className="stack-note">
          <span className="little-star">✳</span>
          <div>
            <h2>Siempre en modo aprendizaje.</h2>
            <p>
              Este portfolio también es un laboratorio: Next.js, TypeScript y
              una escena 3D con Three.js. Sin porcentajes arbitrarios. El código
              es la mejor forma de mostrar lo que hago.
            </p>
          </div>
          <Link className="text-link" href="/portfolio/">
            Verlo en acción <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
      <ContactBanner />
    </>
  );
}
