import { GroupSharp } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import Link from "next/link";

export default function Qui({ className }: { className: string }) {
  return (
    <Box
      className={className}
      borderRadius="12px"
      padding={{ xs: "1.6rem", md: "2rem" }}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gap={{ xs: "1.6rem", md: "2rem" }}
      sx={{
        backgroundColor: "var(--mui-palette-background-paper)",
        transition: 'all 1s ease',
        ":hover": {
          boxShadow: `0 0px 15px 0 var(--mui-palette-primary-main)`,

        },
      }}
    >
      <Box width="100%" display="flex" alignItems="center" justifyContent="between" gap={{ xs: "1.6rem", md: "2rem" }}>
        <Typography width={{ xs: "100%" }} textAlign={{ xs: 'start' }} variant="h2">
          👨‍💻 Qui suis-je ?
        </Typography>

      </Box>
      <Typography textAlign={{ xs: 'start' }}  >
        Alexandre Hernandez, 28 ans, <strong>Développeur web fullstack</strong> passionné par la création d&apos;<strong>expériences digitales</strong>. Maîtrisant <strong>React</strong>, <strong>Next.js</strong>, <strong>JavaScript</strong>, <strong>Node.js</strong> et <strong>Tailwind CSS</strong>, j&apos;ai mis à profit ces compétences pour concevoir et développer des sites web dynamiques tels que <strong>"Élisabeth Coach holistique"</strong> (Mon projet le plus conséquent), <strong>"Éminence"</strong>, ainsi que ce portfolio entre autres. <Typography color="primary" sx={{ "&:hover": { textDecoration: "underline" } }} component={Link} href="#mesProjets" >Voir mes projets</Typography>
      </Typography>
      <Box textAlign={{ xs: 'start' }} >
        <Box textAlign={{ xs: 'start' }} component="div">
          <Typography>
            Je m&apos;intéresse aussi au <strong>design UI/UX</strong> et au <strong>SEO</strong>. je crée des interfaces utilisateur intuitives avec Figma et approfondis mes connaissances en SEO quotidiennement.
          </Typography>

          <Typography>
            Mon rythme reflète ma passion : développement intensif le jour, veille technologique et apprentissage continu le soir. Cette routine me permet d&apos;évoluer constamment dans ce domaine.
          </Typography>
        </Box>
      </Box>
      <Typography width={{ xs: "100%" }} textAlign={{ xs: 'center' }} color="primary" target="_blank" rel="noopener noreferrer" component={Link} href="https://cvdesignr.com/p/66acdd21414fd?hl=fr_FR" variant="h4" sx={{ "&:hover": { textDecoration: "underline" } }}>Lire mon CV</Typography>
    </Box>
  )
}
