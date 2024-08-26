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
    <Stack component="header" display={'flex'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}  sx={{ position: 'relative', paddingY: "1rem" }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'start' }}>
        <Typography sx={{ textTransform: 'capitalize' }} variant="h3"  >
          {pathname || 'Portfolio'}
        </Typography>
        <Typography variant="h4">
          Alexandre HERNANDEZ
        </Typography>
      </Box>
      <Box position={'relative'} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <MenuReseaux />
      </Box>
    </Stack>
  )
}