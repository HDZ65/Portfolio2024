import { Container } from "@mui/material";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import SwipeDownloadButton from "./components/SwipeDownloadButton";
import { BentoAbout } from "./components/BentoAbout";

export default function Accueil() {
  return (
    <Container  >
      <Hero />
      <SwipeDownloadButton />
      <BentoAbout  />
      <Contact />
    </Container>
  )
}