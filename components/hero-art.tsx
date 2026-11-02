'use client';

import dynamic from 'next/dynamic';
import { Component, useEffect, useRef, useState, type ReactNode } from 'react';
import {
  ArrowUpRight,
  Box,
  MoveUpRight,
  Pause,
  Play,
  Rotate3D,
} from 'lucide-react';
import { assetPath } from '@/lib/utils';

const SculptureCanvas = dynamic(() => import('./sculpture-canvas'), {
  ssr: false,
  loading: () => <div className="sculpture-fallback" />,
});

class SceneBoundary extends Component<
  { children: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? (
      <div className="sculpture-fallback" />
    ) : (
      this.props.children
    );
  }
}

export default function HeroArt() {
  const root = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [reduced, setReduced] = useState(true);
  const [paused, setPaused] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(media.matches);
    const frame = requestAnimationFrame(update);
    media.addEventListener('change', update);
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { rootMargin: '80px' },
    );
    if (root.current) observer.observe(root.current);
    const onVisibility = () => setPageVisible(!document.hidden);
    document.addEventListener('visibilitychange', onVisibility);
    return () => {
      cancelAnimationFrame(frame);
      media.removeEventListener('change', update);
      observer.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);
  const playing = visible && pageVisible && !reduced && !paused;

  return (
    <div ref={root} className="hero-art">
      <div className="art-grid" aria-hidden="true" />
      <div className="art-orbit orbit-one" aria-hidden="true" />
      <div className="art-orbit orbit-two" aria-hidden="true" />
      <span className="art-coordinate coordinate-top">
        EXPERIMENT_001 <span>© ZABАDEV</span>
      </span>
      <div
        className="sculpture-stage"
        style={
          {
            '--fallback-image': `url("${assetPath('/sculpture.svg')}")`,
          } as React.CSSProperties
        }
      >
        <SceneBoundary>
          <SculptureCanvas playing={playing} />
        </SceneBoundary>
      </div>
      <div className="floating-label label-code">
        <span className="label-icon">
          <Box size={17} />
        </span>
        <span>
          Diseño + código<strong>Ideas en otra dimensión</strong>
        </span>
        <ArrowUpRight size={15} />
      </div>
      <div className="floating-label label-creative">
        <span className="little-star">✳</span>
        <span>
          Creative developer<small>Siempre explorando.</small>
        </span>
      </div>
      <div className="art-bottom">
        <span>
          <Rotate3D size={14} /> Arrastra para explorar
        </span>
        <button
          type="button"
          aria-label={paused ? 'Reanudar animación 3D' : 'Pausar animación 3D'}
          aria-pressed={paused}
          onClick={() => setPaused(!paused)}
        >
          {paused || reduced ? <Play size={13} /> : <Pause size={13} />}
          <span>
            {reduced ? 'Movimiento reducido' : paused ? 'En pausa' : 'Live 3D'}
          </span>
          <span className={`live-dot ${!playing ? 'is-paused' : ''}`} />
        </button>
      </div>
      <MoveUpRight
        className="art-corner"
        size={25}
        strokeWidth={1}
        aria-hidden="true"
      />
    </div>
  );
}
