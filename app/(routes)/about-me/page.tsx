import type { Metadata } from 'next';
import { ArrowUpRight, Braces, GraduationCap, Lightbulb } from 'lucide-react';
import Timeline from '@/components/timeline';
import ContactBanner from '@/components/contact-banner';
import SectionHeading from '@/components/section-heading';
import { profile } from '@/data';
import { assetPath } from '@/lib/utils';
export const metadata: Metadata = {
  title: 'Sobre mí',
  description:
    'Conoce a Juan José Zabala Ríos: desarrollador Full Stack, formador online y la persona detrás de ZaBaDeV.',
};
export default function AboutPage() {
  return (
    <>
      <section className="container page-section">
        <div className="page-intro">
          <p className="eyebrow">
            <span className="accent">02 /</span> MÁS ALLÁ DE LA PANTALLA
          </p>
          <h1>
            Hola, soy Juan José<span className="accent">.</span>
          </h1>
          <p>
            Desarrollador por vocación. Formador por convicción.
            <br />Y una persona que nunca deja de hacerse preguntas.
          </p>
        </div>
        <div className="about-grid">
          <div className="portrait-card">
            <span className="portrait-label mono">
              THE HUMAN BEHIND THE CODE
            </span>
            <img
              src={assetPath('/home-4.png')}
              width={391}
              height={582}
              alt="Avatar ilustrado de ZaBaDeV"
            />
            <div className="portrait-caption">
              <span>
                Juan José Zabala Ríos
                <small>Full Stack Developer & Formador</small>
              </span>
              <span className="accent">✳</span>
            </div>
          </div>
          <div className="about-story">
            <p className="eyebrow accent">
              SI PUEDES IMAGINARLO, PUEDES PROGRAMARLO.
            </p>
            <h2>
              Crear. Aprender.
              <br />
              <span className="muted-heading">Y volver a empezar.</span>
            </h2>
            <p>
              Me conocen como <strong>ZaBaDeV</strong>. Mi camino une el
              desarrollo de aplicaciones web y multiplataforma con algo que me
              mueve igual de fuerte: compartir conocimiento.
            </p>
            <p>
              Me interesa todo lo que pasa entre una buena idea y una
              experiencia que alguien disfruta usando. La interfaz, la lógica,
              los pequeños detalles. Creo que un buen producto necesita un poco
              de todo eso.
            </p>
            <p>
              Me he formado en DAM y DAW, he realizado prácticas en tecnología
              educativa y cuento con acreditación para la formación online. Hoy
              sigo construyendo, experimentando y aprendiendo con cada proyecto.
            </p>
            <a
              href={profile.linkedin}
              className="text-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Conectemos en LinkedIn <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
        <div className="value-grid">
          {[
            {
              icon: Braces,
              title: 'Construir con intención',
              text: 'Código comprensible, interfaces cuidadas y soluciones que responden a una necesidad.',
            },
            {
              icon: Lightbulb,
              title: 'Mantener la curiosidad',
              text: 'Probar, equivocarse y mejorar. La mejor herramienta es no dejar de aprender.',
            },
            {
              icon: GraduationCap,
              title: 'Compartir el camino',
              text: 'Explicar lo complejo de forma sencilla y ayudar a otros a dar el siguiente paso.',
            },
          ].map((item) => (
            <article className="value-card" key={item.title}>
              <item.icon size={25} />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
        <div className="journey-section">
          <SectionHeading
            number="03"
            label="MI TRAYECTORIA"
            title={
              <>
                Un camino en{' '}
                <span className="muted-heading">construcción.</span>
              </>
            }
          />
          <Timeline />
        </div>
      </section>
      <ContactBanner />
    </>
  );
}
