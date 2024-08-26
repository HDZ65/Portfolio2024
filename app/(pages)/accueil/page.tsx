import { Container } from "@mui/material";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import About from "./components/About";
import Objectif from "./components/Objectif";
import { StackAbout } from "./components/StackAbout";
import { AppleCardsCarouselDemo } from "./components/cards-carousel";
import Picture from "@/app/components/Picture";

export default function Accueil() {
  return (
    <Container  >
      <Hero />
      <StackAbout />
      <About />
      <AppleCardsCarouselDemo />
      <Objectif />
      <Contact />
    </Container>
  )
}