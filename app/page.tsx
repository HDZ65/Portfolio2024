// Titre principal : Page d'accueil du portfolio
import React from 'react';
import { Box, Grid, Grid2, Stack, Typography } from "@mui/material";
import ScrollPages from "./components/ui/ScrollPages";
import Header from "./components/Header/Header";
import Hero from "./components/Hero";
import Bento from "./(pages)/about/components/Bento";
import ProjectCardMobile from "./(pages)/projets/components/ProjectCardMobile";
import ProjectCard from "./(pages)/projets/components/ProjectCard";
import ProjectDetail from "./(pages)/projets/components/projectDetail";
import { ProjectProvider } from "./(pages)/projets/context/useProjectContext";
import Contact from "./(pages)/contact/components/Contact";
import { projects } from "./(pages)/projets/data/projets";
import ScrollDownButton from './components/Fleche';

/**
 * Composant principal de la page d'accueil
 * @returns {JSX.Element} Le rendu de la page d'accueil
 */
export default function Home(): JSX.Element {
  return (
    <ScrollPages>
      <Header />
      <Stack display={'xs:flex md:block'} flexDirection={'column'} gap={{ xs: 20, md: 0 }} sx={{ scrollBehavior: 'smooth' }} component={'main'} width={'98%'}>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </Stack>
      <ScrollDownButton />
    </ScrollPages>
  );
}

/**
 * Section Hero de la page d'accueil
 * @returns {JSX.Element} Le rendu de la section Hero
 */
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
      <Hero />
    </Stack>
  );
}

/**
 * Section À propos de la page d'accueil
 * @returns {JSX.Element} Le rendu de la section À propos
 */
function AboutSection(): JSX.Element {
  return (
    <Stack
      component="section"
      id="aPropos"
      sx={{
        height: { xs: 'fit-content', md: '100dvh' },
      }}
    >
      <Stack
        sx={{
          display: "flex",
          justifyContent: "center",
          height: { xs: 'fit-content', md: '100dvh' },
          paddingX: { xs: "1rem", md: "1rem", lg: "1rem", xl: "0" },
          flexDirection: { xs: 'column' },
          alignItems: { xs: 'start', sm: 'center' },
        }}
      >
        <Bento />
      </Stack>
    </Stack>
  );
}

/**
 * Section Projets de la page d'accueil
 * @returns {JSX.Element} Le rendu de la section Projets
 */
function ProjectsSection(): JSX.Element {
  return (
    <ProjectProvider>
      <Stack
        component="section"
        id="mesProjets"
        sx={{
          width: '98%',
          height: { xs: 'fit-content', md: '100dvh' },
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 4,
          padding: { xs: 0, md: 4 },
          maxWidth: '2000px',

        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            paddingX: { xs: "1rem", md: "1rem", lg: "1rem", xl: "0" },
            width: { xs: '100%', md: '40%' },
            height: { xs: 'fit-content', md: '100%' },
            gap: { xs: 0, md: 4 },
          }}
        >
          <Typography variant="h2" sx={{ marginBottom: { xs: 4, md: 0 } }}>
            Parcourir mes projets :
          </Typography>
          <Box sx={{ display: { xs: 'block', md: 'none' } }}>
            <Grid2 container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 2, md: 12 }}>
              {projects.map((project, index) => (
                <Grid item xs={12} sm={12} md={4} key={project.slug}>
                  <ProjectCardMobile
                    project={project}
                  />
                </Grid>
              ))}
            </Grid2>
          </Box>
          <ProjectCard />
        </Box>
        <ProjectDetail />
      </Stack>
    </ProjectProvider>
  );
}

/**
 * Section Contact de la page d'accueil
 * @returns {JSX.Element} Le rendu de la section Contact
 */
function ContactSection(): JSX.Element {
  return (
    <Stack
      component="section"
      id="contact"
      sx={{
        width: '98%',
        height: { xs: 'fit-content', md: '100dvh' },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: { xs: 12, md: 0 },
      }}
    >
      <Contact />
    </Stack>
  );
}