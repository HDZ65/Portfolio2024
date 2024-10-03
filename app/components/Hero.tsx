'use client'
// Fichier principal pour le composant Hero
import ButtonLink from "@/app/components/Button/ButtonLink";
import Picture from "@/app/components/Picture";
import { Box, Button, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import SwipeDownloadButton from "./SwipeDownloadButton";
import { FlipWords } from "./ui/flip-words";
import { useState, useEffect } from 'react';
import AnimatedContactButton from './AnimatedContactButton';

// Fonction principale pour le composant Hero
export default function Hero() {
  const words = ["Bonjour", "Hello"];
  const [isHovered, setIsHovered] = useState(false);
  const [isProjectHovered, setIsProjectHovered] = useState(false);
  const [isContactHovered, setIsContactHovered] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  useEffect(() => {
    if (isMobile) {
      setIsProjectHovered(true);
      setIsContactHovered(true);
    }
  }, [isMobile]);

  const ButtonStyle = (isHovered: boolean, inverted: boolean, expandedWidth: string) => ({
    minWidth: isMobile ? expandedWidth : '48px',
    width: isMobile || isHovered ? expandedWidth : '48px',
    height: '48px',
    borderRadius: '24px',
    padding: '0 12px',
    transition: 'width 0.3s ease-in-out',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: inverted ? 'background.paper' : 'primary.main',
    color: inverted ? 'primary.main' : 'background.paper',
    border: inverted ? '1px solid' : 'none',
    borderColor: 'primary.main',
    '&:hover': {
      backgroundColor: inverted ? 'background.paper' : 'primary.main',
      color: inverted ? 'primary.main' : 'background.paper',
    },
  });

  return (

    <Stack
      sx={{
        maxWidth: '1200px',
        backgroundSize: '400% 400%',
        padding: { xxs: ' 0 ', xs: ' 0 1rem', md: '2.5rem' },
        width: { xs: '100%', md: '90%' },
        margin: { xs: ' auto' },
        height: 'fit-content',
      }}

      display="flex"
      flexDirection={{ xs: 'column' }}
      alignItems={{ xs: 'start', md: 'center' }}
      justifyContent="start"
      gap={{

        xs: "2rem",
        xl: "2.5rem"
      }}
      direction="column"
      aria-label="Hero section pour Alexandre Hernandez"
    >
      <Box display="flex" flexDirection="column" gap="1rem">
        <Typography color="var(--mui-palette-primary-main)" width={{ xs: '100%' }} textAlign={{ xs: 'start', md: 'center' }} variant="h1">
          <FlipWords words={words} />
        </Typography>
        <Typography width={{ xs: '100%' }} textAlign={{ xs: 'start', md: 'center' }} variant="h1">
          Je suis Alexandre Hernandez
        </Typography>
      </Box>
      <Box>
        <Typography
          width={{ xs: '100%' }}
          textAlign={{ xs: 'start', md: 'center' }}
          variant="h5"
          component="div"
          sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: { xs: 'flex-start', md: 'center' } }}
        >
          Développeur web fullstack{' '}
          <Typography
            variant="h5"
            color="text.secondary"
            component="span"
            sx={{ ml: 1 }}
          >
            basé à Tarbes, France
          </Typography>
        </Typography>
        <Typography
          width={{ xs: '100%' }}
          textAlign={{ xs: 'start', md: 'center' }}
          variant="h5"
          component="div"
          sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: { xs: 'flex-start', md: 'center' } }}
        >
          Actuellement en recherche d'entreprise{' '}
          <Typography
            variant="h5"
            color="text.secondary"
            component="h5"
            sx={{ ml: 1 }}
          >
            pour une alternance Concepteur Développeur d'Applications.
          </Typography>
        </Typography>

      </Box>
      <Box display="flex" gap={{ xs: "1.6rem", md: "2rem" }}>
        <Button
          variant="contained"
          href="#mesProjets"
          onMouseEnter={() => !isMobile && setIsProjectHovered(true)}
          onMouseLeave={() => !isMobile && setIsProjectHovered(false)}
          sx={ButtonStyle(isProjectHovered, false, '160px')}
          aria-label={isProjectHovered ? "Mes Projets" : "Voir mes projets"}
          title="Voir mes projets de développement web"
        >
          <WorkRoundedIcon sx={{ flexShrink: 0 }} />
          <Typography
            sx={{
              opacity: isMobile || isProjectHovered ? 1 : 0,
              maxWidth: isMobile || isProjectHovered ? '120px' : '0',
              transition: 'opacity 0.3s ease-in-out, max-width 0.3s ease-in-out',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
            }}
          >
            Mes Projets
          </Typography>
        </Button>

        <AnimatedContactButton href="#contact" />
      </Box>
      {/* <SwipeDownloadButton /> */}
    </Stack>
  )
}