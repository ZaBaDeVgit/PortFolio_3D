'use client';

import { useState } from 'react';
import { Search, X } from 'lucide-react';
import { projects } from '@/data';
import PortfolioCard from './portfolio-card';
const filters = ['Todos', 'Aplicaciones', 'Web', 'Juegos'] as const;

export default function ProjectGallery() {
  const [category, setCategory] = useState<string>('Todos');
  const [query, setQuery] = useState('');
  const visible = projects.filter(
    (project) =>
      (category === 'Todos' || category === project.category) &&
      `${project.title} ${project.description} ${project.tags.join(' ')}`
        .toLocaleLowerCase('es')
        .includes(query.toLocaleLowerCase('es').trim()),
  );
  return (
    <>
      <div className="gallery-toolbar">
        <div
          className="filter-list"
          role="group"
          aria-label="Filtrar proyectos por categoría"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setCategory(filter)}
              aria-pressed={category === filter}
              className={category === filter ? 'active' : ''}
            >
              {filter}
              {filter === 'Todos' && <span>{projects.length}</span>}
            </button>
          ))}
        </div>
        <div className="search-field">
          <Search size={17} />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Buscar un proyecto…"
            aria-label="Buscar proyectos"
          />
        </div>
      </div>
      <p className="results-count" role="status">
        {visible.length} {visible.length === 1 ? 'proyecto' : 'proyectos'}
        {query && ` para «${query}»`}
      </p>
      {visible.length ? (
        <div className="projects-grid">
          {visible.map((project) => (
            <PortfolioCard
              key={project.id}
              data={project}
              index={projects.indexOf(project)}
            />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <Search size={30} />
          <h2>No hay coincidencias</h2>
          <p>Prueba otra búsqueda o explora todos los proyectos.</p>
          <button
            className="button button-outline"
            onClick={() => {
              setQuery('');
              setCategory('Todos');
            }}
          >
            Limpiar filtros <X size={16} />
          </button>
        </div>
      )}
    </>
  );
}
