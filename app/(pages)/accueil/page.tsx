import { Container } from "@mui/material";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import SwipeDownloadButton from "./components/SwipeDownloadButton";
import About from "./components/About";
import Objectif from "./components/Objectif";
import { StackAbout } from "./components/StackAbout";

export default function Accueil() {
  return (
    <Container  >
      <Hero />
      <SwipeDownloadButton />
      <About />
      <StackAbout />
      <Objectif />
      <Contact />
    </Container>
  )
}