import { ArrowUpRight, Github } from 'lucide-react';
import { type Project } from '@/data';
import { assetPath } from '@/lib/utils';

export default function PortfolioCard({
  data,
  index = 0,
}: {
  data: Project;
  index?: number;
}) {
  return (
    <article className={`project-card project-${data.accent}`}>
      <a
        href={data.urlDemo}
        target="_blank"
        rel="noopener noreferrer"
        className="project-visual"
        aria-label={`Abrir demo de ${data.title} (nueva pestaña)`}
      >
        <div className="project-topline">
          <span>{data.category}</span>
          <span className="project-number">0{index + 1}</span>
        </div>
        <div className="project-image-window">
          <div className="window-bar">
            <i />
            <i />
            <i />
            <span>{data.title.toLowerCase().replaceAll(' ', '-')}.app</span>
          </div>
          <img
            src={assetPath(data.image)}
            width={800}
            height={500}
            loading="lazy"
            alt={`Captura de la interfaz de ${data.title}`}
          />
        </div>
        <span className="project-open">
          <ArrowUpRight size={20} />
        </span>
      </a>
      <div className="project-info">
        <div className="project-title-row">
          <h3>
            <a href={data.urlDemo} target="_blank" rel="noopener noreferrer">
              {data.title} <ArrowUpRight size={20} />
            </a>
          </h3>
          <a
            href={data.urlGithub}
            target="_blank"
            rel="noopener noreferrer"
            className="project-source"
            aria-label={`Código fuente de ${data.title} en GitHub (nueva pestaña)`}
          >
            <Github size={18} />
          </a>
        </div>
        <p>{data.description}</p>
        <div className="tags">
          {data.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </article>
  );
}
