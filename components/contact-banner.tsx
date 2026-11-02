import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
export default function ContactBanner() {
  return (
    <section className="contact-banner container">
      <div className="contact-banner-inner">
        <div>
          <p className="eyebrow">
            LA PRÓXIMA GRAN IDEA EMPIEZA CON UNA CONVERSACIÓN
          </p>
          <h2>
            ¿Creamos algo
            <br />
            <span>extraordinario?</span>
          </h2>
        </div>
        <Link
          href="/contact/"
          className="contact-circle"
          aria-label="Hablemos de tu proyecto"
        >
          <ArrowUpRight size={44} strokeWidth={1.3} />
          <span>Hablemos</span>
        </Link>
        <span className="banner-star" aria-hidden="true">
          ✳
        </span>
      </div>
    </section>
  );
}
