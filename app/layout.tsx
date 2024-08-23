import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "./libs/ThemeProvider";
import Header from "./components/Header";
import BottumBar from "./(pages)/accueil/components/BottumBar";

// Metadata pour le site
export const metadata: Metadata = {
  title: "Portfolio Alexandre Hernandez",
  description: "Portfolio de Alexandre Hernandez",
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
      </head>
      <body>
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <BottumBar />
        </ThemeProvider>
      </body>
    </html>
  );
}