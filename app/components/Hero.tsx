// Fichier principal pour le composant Hero

import ButtonLink from "@/app/components/Button/ButtonLink";
import Picture from "@/app/components/Picture";
import { Box, Stack, Typography } from "@mui/material";
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import SwipeDownloadButton from "./SwipeDownloadButton";
import { FlipWords } from "./ui/flip-words";

// Fonction principale pour le composant Hero
export default function Hero() {
  const words = ["Bonjour", "Hello"];
  return (

    <Stack
      sx={{
        backgroundSize: '400% 400%',
        padding: { xxs: ' 0 ', xs: ' 0 1rem', md: '2.5rem' },
        width: { xs: '100%', md: '90%' },
        marginX: { xs: ' auto' },
        height: 'fit-content',
      }}

      display="flex"
      flexDirection={{ xs: 'column' }}
      alignItems={{ xs: 'start', md: 'center' }}
      justifyContent="start"
      gap={{
        xxs: "1rem",
        xs: "2rem",
        xl: "2.5rem"
      }}
      direction="column"
      aria-label="Hero section pour Alexandre Hernandez"
    >
      <Picture />
      <Typography color="var(--mui-palette-primary-main)" width={{ xs: '100%' }} textAlign={{ xs: 'start', md: 'center' }} variant="h1">
        <FlipWords words={words} />
      </Typography>
      <Typography width={{ xs: '100%' }} textAlign={{ xs: 'start', md: 'center' }} variant="h1">
        Je suis Alexandre Hernandez
      </Typography>
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
      <Box width="100%" display="flex" gap={{ xs: "1.6rem", md: "2rem" }}>
        <ButtonLink label="Mes Projets" variant="contained" icon={<WorkRoundedIcon />} to="/projets" />
        <ButtonLink label="Contact" variant="outlined" icon={<EmailRoundedIcon />} to="/contact" />
      </Box>
      <SwipeDownloadButton />
    </Stack>
  )
}