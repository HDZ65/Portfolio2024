// Fichier: Header.tsx
"use client"

import { Box, Stack, Typography } from "@mui/material";
import MenuReseaux from "./Button/MenuReseaux";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// Fonction principale du composant Header
export default function Header() {
  const pathname = usePathname();
  const [pageTitle, setPageTitle] = useState("Portfolio");

  // Utilisation de useEffect pour mettre à jour le titre de la page en fonction du chemin
  useEffect(() => {
    const title = pathname === "/" ? "Portfolio" : pathname.replace("/", "");
    setPageTitle(title);
  }, [pathname]);

  return (
    <Box component="header" aria-label="En-tête du site">
      <Stack className="flex flex-col justify-center gap-3" borderRadius="0 0 30px 30px" sx={{ position: 'relative', paddingY: "1rem" }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography color="var(--mui-palette-text-secondary)" variant="h3"  >
            {pageTitle}
          </Typography>
          <MenuReseaux />
        </Box>
        <Box className="flex flex-col items-start">
          <Typography color="var(--mui-palette-text-secondary)" variant="h2">
            Alexandre HERNANDEZ
          </Typography>
          <Typography color="var(--mui-palette-text-secondary)" variant="h4">
            Développeur web et web mobile
          </Typography>
        </Box>
      </Stack>
    </Box>
  )
}