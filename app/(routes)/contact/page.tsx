import type { Metadata } from 'next';
import { ArrowUpRight, Github, Linkedin, Youtube } from 'lucide-react';
import ContactForm from '@/components/contact-form';
import { profile } from '@/data';
export const metadata: Metadata = {
  title: 'Contacto',
  description:
    '¿Un proyecto, una colaboración o una oportunidad? Hablemos. Contacta con Juan José Zabala Ríos, ZaBaDeV.',
};
export default function ContactPage() {
  return (
    <section className="container page-section">
      <div className="page-intro">
        <p className="eyebrow">
          <span className="accent">04 /</span> CONECTEMOS
        </p>
        <h1>
          Las buenas ideas
          <br />
          empiezan con un <span className="accent">hola.</span>
        </h1>
        <p>
          ¿Tienes un proyecto en mente? ¿Buscas un desarrollador para tu equipo?
          <br />O simplemente quieres hablar de código. Te leo.
        </p>
      </div>
      <div className="contact-grid">
        <aside className="contact-aside">
          <div className="availability">
            <span className="live-dot" /> Abierto a nuevas oportunidades
          </div>
          <h2>
            Hablemos de lo
            <br />
            que viene<span className="accent">.</span>
          </h2>
          <p>
            Desarrollo web, colaboración o formación. Encuéntrame también en
            estos espacios:
          </p>
          <a
            className="contact-network"
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={21} />
            <span>
              LinkedIn<small>El mejor lugar para conectar</small>
            </span>
            <ArrowUpRight size={18} />
          </a>
          <a
            className="contact-network"
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={21} />
            <span>
              GitHub<small>Mi lado más técnico</small>
            </span>
            <ArrowUpRight size={18} />
          </a>
          <a
            className="contact-network"
            href={profile.youtube}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Youtube size={21} />
            <span>
              YouTube<small>Aprender y compartir</small>
            </span>
            <ArrowUpRight size={18} />
          </a>
          <div className="contact-timezone">
            <span className="live-dot" /> España · Zona horaria Europe/Madrid
          </div>
        </aside>
        <ContactForm />
      </div>
    </section>
  );
}
