import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "InnoTech Solutions - Agentes Conversacionales",
  description: "Plataforma de agentes especializados para emprendedores",
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
    <body className={inter.className}>
    {children}
    </body>
    </html>
  );
}