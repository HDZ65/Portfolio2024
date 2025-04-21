import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "./libs/ThemeProvider";
import { CustomCursor } from "./components/CustomCursor";

// Metadata pour le site
export const metadata: Metadata = {
  title: "Alexandre Hernandez | Développeur Full Stack",
  description: "Portfolio d'Alexandre Hernandez, développeur full stack spécialisé en React, Next.js et TypeScript. Découvrez mes projets et compétences.",
  keywords: ["développeur", "portfolio", "React", "Next.js", "TypeScript", "full stack"],
  authors: [{ name: "Alexandre Hernandez" }],
  creator: "Alexandre Hernandez",
  openGraph: {
    title: "Alexandre Hernandez | Développeur Full Stack",
    description: "Portfolio d'Alexandre Hernandez, développeur full stack spécialisé en React, Next.js et TypeScript",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alexandre Hernandez | Développeur Full Stack",
    description: "Portfolio d'Alexandre Hernandez, développeur full stack spécialisé en React, Next.js et TypeScript",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Composant RootLayout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <title>Portfolio Alexandre Hernandez</title>
        <link
          href="https://fonts.cdnfonts.com/css/sf-pro-display"
          rel="stylesheet"
        />
        <link
          href="https://fonts.cdnfonts.com/css/sf-pro-text"
          rel="stylesheet"
        />
      </head>
      <body className="overflow-x-hidden">
        <ThemeProvider>
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}