import type { Metadata } from 'next';
import { Urbanist } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar';
import Header from '@/components/header';
import CustomCursor from '@/components/custom-cursor';

const urbanist = Urbanist({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ZaBaDev — Full Stack Developer & Formador',
  description: 'Portfolio de ZaBaDeV — Desarrollador Full Stack y Formador Online. Si puedes imaginarlo, puedes programarlo.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body className={`${urbanist.className} w-full min-h-screen overflow-x-hidden`}>
        <div className="relative w-full min-h-screen">
          <CustomCursor />
          <Header />
          {children}
          <Navbar />
          <div className="noise-overlay" />
        </div>
      </body>
    </html>
  );
}
