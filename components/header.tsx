'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { navigation } from '@/data';

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    document.addEventListener('keydown', close);
    return () => document.removeEventListener('keydown', close);
  }, [open]);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link
          href="/"
          className="wordmark"
          aria-label="ZaBaDeV, inicio"
          onClick={() => setOpen(false)}
        >
          <span className="brand-symbol" aria-hidden="true">
            z<span>↗</span>
          </span>
          ZaBa<span className="brand-end">DeV</span>
          <span className="brand-dot">.</span>
        </Link>
        <nav aria-label="Navegación principal" className="desktop-nav">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? 'page' : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="/contact/" className="button header-cta">
          Hablemos <ArrowUpRight size={16} />
        </Link>
        <button
          ref={menuButton}
          className="menu-toggle"
          type="button"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-nav"
          className="mobile-nav"
          aria-label="Navegación móvil"
        >
          {[...navigation, { label: 'Contacto', href: '/contact/' }].map(
            (item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                aria-current={pathname === item.href ? 'page' : undefined}
              >
                {item.label}
                <ArrowUpRight size={18} />
              </Link>
            ),
          )}
        </nav>
      )}
    </header>
  );
}
