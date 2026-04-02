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
      <body className={urbanist.className}>
        <CustomCursor />
        <Header />
        {children}
        <Navbar />
        <div className="noise-overlay" />
      </body>
    </html>
  );
}
