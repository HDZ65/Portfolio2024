// Fichier: Header.tsx
"use client"

import { Box, Container, Stack, Typography } from "@mui/material";
import MenuReseaux from "../Button/MenuReseaux";
import { usePathname } from 'next/navigation';
import { useEffect, useState } from "react";

// Fonction principale du composant Header
export default function Header() {
  const pathname = usePathname()?.slice(1) || '';

  return (
      <Stack component="header" className="flex flex-col justify-center gap-1"  sx={{ position: 'relative', paddingY: "1rem" }}>
        <MenuReseaux />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography sx={{ textTransform: 'capitalize' }} variant="h3"  >
            {pathname || 'Portfolio'}
          </Typography>
        </Box>
        <Box className="flex flex-col items-start">
          <Typography  variant="h4">
            Alexandre HERNANDEZ
          </Typography>

        </Box>
      </Stack>
  )
}