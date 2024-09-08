// Fichier: Header.tsx
"use client"

import { Box, Container, Link, Stack, Typography } from "@mui/material";
import MenuReseaux from "../Button/MenuReseaux";
import { usePathname } from 'next/navigation';
import { useEffect, useState } from "react";
import SwipeDownloadButton from "@/app/components/SwipeDownloadButton";
import LinkNav from "./LinkNav";
import Grid2 from '@mui/material/Grid2';

// Fonction principale du composant Header
export default function Header() {
  const pathname = usePathname()?.slice(1) || '';

  return (
    <Stack sx={{ zIndex: 1000 }}>
      <Grid2 zIndex={1000} container component="header" sx={{ position: 'relative', paddingY: "2rem", paddingX: { xs: "1rem", md: "0" } }}>
        <Grid2 size="grow" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'start' }}>
          <Typography sx={{ textTransform: 'capitalize', textDecoration: 'underline' }} variant="h3"  >
            {pathname || 'Portfolio'}
          </Typography>
          <Link sx={{ textDecoration: 'none', color: 'inherit', '&:hover': { color: 'var(--mui-palette-primary-main)' } }} href="/" variant="h4">
            Alexandre HERNANDEZ
          </Link>
        </Grid2>
        <LinkNav />
        <Grid2 size={{ xs: 2, md: "grow" }} position={'relative'} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <MenuReseaux />
        </Grid2>
      </Grid2>
    </Stack>
  )
}