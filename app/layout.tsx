import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Dock from "@/components/dock";
import CustomCursor from "@/components/custom-cursor";
import Scene3D from "@/components/scene-3d";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

export const metadata: Metadata = {
  title: "ZaBaDeV — Full Stack Developer & Formador",
  description: "Portfolio de ZaBaDeV. Si puedes imaginarlo, puedes programarlo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body className="font-sans antialiased bg-[#0a0a0a] text-white overflow-x-hidden">
        <Scene3D />
        <CustomCursor />
        <Header />
        <main className="relative z-10">{children}</main>
        <Dock />
      </body>
    </html>
  );
}
