'use client'
// Titre principal : Page d'accueil du portfolio

import React, { useEffect } from 'react';
import { Box, Grid, Grid2, Stack, Typography } from "@mui/material";
import Header from "./components/Header/Header";
import PortfolioHeader from "./components/PortfolioHeader";
import Bento from "./(pages)/about/components/Bento";
import ProjectCardMobile from "./(pages)/projets/components/ProjectCardMobile";
import ProjectCard from "./(pages)/projets/components/ProjectCard";
import ProjectDetail from "./(pages)/projets/components/projectDetail";
import { ProjectProvider } from "./(pages)/projets/context/useProjectContext";
import Contact from "./(pages)/contact/components/Contact";
import { projects } from "./(pages)/projets/data/projets";
import Lenis from 'lenis'

export default function Home(): JSX.Element {
  useEffect( () => {

    const lenis = new Lenis()

    function raf(time: number) {

      lenis.raf(time)

      requestAnimationFrame(raf)

    }

    requestAnimationFrame(raf)

  }, [])

  return (
    <>
      <Header />
      <Stack display={'xs:flex md:block'} flexDirection={'column'} gap={{ xs: 20, md: 0 }} sx={{ scrollBehavior: 'smooth' }} component={'main'} width={'98%'}>
        <HeroSection />
      </Stack>
    </>
  );
}


function HeroSection(): JSX.Element {
  return (
    <Stack
      component="section"
      sx={{
        width: '100%',
        height: {  xs: 'calc(100dvh - 112px)', md: 'calc(100dvh - 62px)' },
        backgroundColor: "var(--mui-palette-background-paper)",
        borderRadius: '12px',
      }}
    >
      <PortfolioHeader />
    </Stack>
  );
}

