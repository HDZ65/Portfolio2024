'use client'
// Titre principal : Page d'accueil du portfolio

import React, { useEffect } from 'react';
import { Stack } from "@mui/material";
import Header from "./components/Header/Header";
import PortfolioHeader from "./components/PortfolioHeader";
import Lenis from 'lenis'
import { Prospethique } from './components/prospethique';
import { PortfolioPresentation } from './components/PortfolioPresentation';
import MesCompetences from './(pages)/about/components/mes-competences';

export default function Home(): JSX.Element {

  useEffect(() => {
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
    <>
      <Stack
        component="section"
        sx={{
          width: '100%',
          height: { xs: 'calc(100dvh - 112px)', md: 'calc(100dvh - 62px)' },
          backgroundColor: "var(--mui-palette-background-paper)",
          borderRadius: '12px',
        }}
      >
        <PortfolioPresentation />

      </Stack>
      <div className="w-full relative">
        <Prospethique />
        <MesCompetences />
      </div>
    </>
  );
}

