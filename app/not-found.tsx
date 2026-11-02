import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
export default function NotFound() {
  return (
    <section className="container not-found">
      <p className="eyebrow accent">ERROR 404 / FUERA DE ÓRBITA</p>
      <h1>
        Esta idea aún
        <br />
        no está programada<span className="accent">.</span>
      </h1>
      <p>La página que buscas no existe o ha cambiado de lugar.</p>
      <Link className="button button-primary" href="/">
        Volver al inicio <ArrowUpRight size={18} />
      </Link>
    </section>
  );
}
