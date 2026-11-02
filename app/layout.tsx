import type { Metadata, Viewport } from 'next';
import '@fontsource-variable/manrope';
import '@fontsource-variable/space-grotesk';
import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { assetPath } from '@/lib/utils';

export const metadata: Metadata = {
  metadataBase: new URL('https://zabadevgit.github.io'),
  title: {
    default: 'ZaBaDeV — Código con propósito. Experiencias con carácter.',
    template: '%s · ZaBaDeV',
  },
  description:
    'Portfolio de Juan José Zabala Ríos. Desarrollo Full Stack, experiencias web interactivas y formación online. Si puedes imaginarlo, puedes programarlo.',
  applicationName: 'ZaBaDeV Portfolio',
  authors: [{ name: 'Juan José Zabala Ríos' }],
  openGraph: {
    title: 'ZaBaDeV — Del código a lo extraordinario.',
    description:
      'Desarrollo Full Stack, experiencias digitales y formación online.',
    locale: 'es_ES',
    type: 'website',
    siteName: 'ZaBaDeV',
    images: [
      {
        url: assetPath('/og-image.png'),
        width: 1200,
        height: 630,
        alt: 'ZaBaDeV — Full Stack Developer & Formador',
      },
    ],
  },
  twitter: { card: 'summary_large_image' },
  icons: { icon: assetPath('/icon.svg') },
};
export const viewport: Viewport = {
  themeColor: '#10110f',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>
        <a className="skip-link" href="#main">
          Saltar al contenido
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
