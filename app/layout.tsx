import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "./libs/ThemeProvider";
import Header from "./components/Header/Header";
import { AuroraBackground } from "./components/ui/aurora-background";

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
        <link
          href="https://fonts.cdnfonts.com/css/sf-pro-display"
          rel="stylesheet"
        />
        <link
          href="https://fonts.cdnfonts.com/css/sf-pro-text"
          rel="stylesheet"
        />
      </head>
      <body className="overflow-x-hidden ">
        <ThemeProvider>
            {children}
        </ThemeProvider>
      </body>
    </html>
  );
}