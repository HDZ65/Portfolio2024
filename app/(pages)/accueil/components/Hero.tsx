// Fichier principal pour le composant Hero

import ButtonLink from "@/app/components/Button/ButtonLink";
import Picture from "@/app/components/Picture";
import { Box, Typography } from "@mui/material";
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import SwipeDownloadButton from "./SwipeDownloadButton";
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';

// Fonction principale pour le composant Hero
export default function Hero() {
  return (
    <Box component="section" width={{ xs: "100%", lg: "70%" }} display="flex" flexDirection={{ xs: 'column' }} alignItems={{ xs: 'start', sm: 'center' }} justifyContent="center" gap={{ xs: "1.6rem", md: "3rem" }}>
      <Box width="100%" display="flex" flexDirection={{ xs: 'column' }} alignItems="center" justifyContent="center"  gap={{ xs: "1.6rem"}}>
        <Typography color="var(--mui-palette-primary-main)" width={{ xs: '100%' }} textAlign={{ xs: 'start', md: 'center' }} variant="h1">
          Bonjour!
        </Typography>
        <Typography width={{ xs: '100%' }} textAlign={{ xs: 'start', md: 'center' }} variant="h1">
          Je suis Alexandre Hernandez
        </Typography>
        <Typography width={{ xs: '100%' }} textAlign={{ xs: 'start', md: 'center' }} variant="h4">
          Développeur web et web mobile basé à Tarbes, France.
        </Typography>
      </Box>
      <Box width="100%" display="flex" gap={{ xs: "1.6rem", md: "3rem" }}>
        <ButtonLink label="Mes Projets" variant="contained" icon={<WorkRoundedIcon />} to="/projets" />
        <ButtonLink label="Contact" variant="outlined" icon={<EmailRoundedIcon />} to="/contact" />
      </Box>
      <SwipeDownloadButton />
    </Box>
  )
}