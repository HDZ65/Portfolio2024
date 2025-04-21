'use client'
// Titre principal : Page d'accueil du portfolio

import React, { useEffect } from 'react';
import { Stack } from "@mui/material";
import Header from "./components/Header/Header";
import Lenis from 'lenis'
import { ProspethiqueWrapper } from './components/prospethique-wrapper';
import { PortfolioPresentation } from './components/PortfolioPresentation';
import { MesCompetencesWrapper } from './(pages)/about/components/mes-competences-wrapper';

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
      <Stack display={'xs:flex md:block'} flexDirection={'column'} sx={{ scrollBehavior: 'smooth' }} component={'main'} width={'98%'}>
        <HeroSection />
        <div className="w-full relative">
          <ProspethiqueWrapper />
          <MesCompetencesWrapper />
        </div>
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
          height: { xs: 'calc(100dvh - 57,59px)', md: 'calc(100dvh - 62px)' },
          backgroundColor: "var(--mui-palette-background-paper)",
          borderRadius: '12px',
        }}
      >
        <PortfolioPresentation />
      </Stack>

    </>
  );
}

