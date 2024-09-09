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
        justifyContent: 'center',
        width: { xs: '100%', md: '60%' },
        margin: { xs: ' auto'  },
      }}

      display="flex"
      flexDirection={{ xs: 'column' }}
      alignItems="center"
      gap={{
        xxs: "1rem",
        xs: "2rem",
        md: "2.5rem"
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
        <Typography width={{ xs: '100%' }} textAlign={{ xs: 'start', md: 'center' }} variant="h4">
          Développeur web fullstack basé à Tarbes, France.
        </Typography>
        <Typography width={{ xs: '100%' }} textAlign={{ xs: 'start', md: 'center' }} variant="h4">
          Actuellement en recherche d'entreprise pour une alternance Concepteur Développeur d'Applications.
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