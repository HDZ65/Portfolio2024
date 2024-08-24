import { Container } from "@mui/material";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import SwipeDownloadButton from "./components/SwipeDownloadButton";

export default function Accueil() {
  return (
    <Container  >
      <Hero />
      <SwipeDownloadButton />
      <About />
      <Contact />
    </Container>
  )
}