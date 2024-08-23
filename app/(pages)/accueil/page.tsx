import { Container } from "@mui/material";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";

export default function Accueil() {
  return (
    <Container  >
      <Hero />
      <About />
      <Contact />
    </Container>
  )
}