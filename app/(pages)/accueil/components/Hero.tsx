import ButtonLink from "@/app/components/Button/ButtonLink";
import Picture from "@/app/components/Picture";
import { Box, Typography } from "@mui/material";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import SwipeDownloadButton from "./SwipeDownloadButton";
export default function Hero() {
  return (
    <Box component="section" display="flex" flexDirection="column" alignItems="start" justifyContent="center" gap="1.6rem" >
    <Picture />
    <Typography variant="h1" >
      <Box color="var(--mui-palette-primary-main)" component="span" >
        Bonjour!
      </Box>
      Je suis Alexandre Hernandez
    </Typography>
    <Typography variant="h4" >
      Bienvenue sur mon portfolio de développeur web basé à Tarbes, France.
    </Typography>
    <Box width="100%" display="flex" gap="1.6rem" >
      <ButtonLink label="Mes Projets" variant="contained" icon={<IoArrowForwardCircleOutline />} to="/projets" />
      <ButtonLink label="Contact" variant="outlined" icon={<EmailRoundedIcon />} to="/contact" />
    </Box>
    <SwipeDownloadButton />
  </Box>
  )
}