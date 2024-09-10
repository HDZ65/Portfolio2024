

import { Box, Container, Link, Stack, Typography } from "@mui/material";
import MenuReseaux from "../Button/MenuReseaux";

import { useEffect, useState } from "react";
import SwipeDownloadButton from "@/app/components/SwipeDownloadButton";
import LinkNav from "./LinkNav";
import Grid2 from '@mui/material/Grid2';
import Image from "next/image";
import logo from './../../../public/logo.png';

// Fonction principale du composant Header
export default function Header() {


  return (
    <Stack sx={{ zIndex: 1000 }}>
      <Grid2 zIndex={1000} container component="header" sx={{ position: 'relative', paddingY: { xs: "1rem", md: "2rem" }, paddingX: { xs: "1rem", md: "1rem", lg: "1rem", xl: "0" } }}>
        <Grid2 size="grow" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'start' }}>
          <Link href="/">
            <Image className="w-10 h-10 md:w-14 md:h-14" src={logo} alt="logo" width={500} height={500} />
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