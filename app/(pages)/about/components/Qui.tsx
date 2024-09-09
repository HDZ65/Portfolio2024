import { GroupSharp } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import Link from "next/link";

export default function Qui({ className }: { className: string }) {
  return (
    <Box
      className={className}
      borderRadius="30px"
      padding={{ xs: "1.6rem", md: "2rem" }}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gap="1.6rem"
      sx={{
        boxShadow: "0 0px 10px 0 rgba(2, 136, 209, 0.37)", // Ombre légère
        border: "1px solid rgba(255, 255, 255, 0.18)", // Bordure subtile
        color: "#ffffff", // Assurez-vous que le texte est lisible sur le nouveau fond
        transition: 'all 1s ease',

        ":hover": {
          boxShadow: `0 0px 15px 0 var(--mui-palette-primary-main)`,

        },
      }}
    >
      <Box width="100%" display="flex" alignItems="center" justifyContent="between" gap="1.6rem">
        <Typography width={{ xs: "100%" }} textAlign={{ xs: 'start' }} variant="h2">
          👨‍💻 Qui suis-je ?
        </Typography>

      </Box>
      <Typography textAlign={{ xs: 'start' }}  >
        Alexandre Hernandez, 28 ans, <strong>Développeur web fullstack</strong> passionné par la création d&apos;<strong>expériences digitales</strong>. Maîtrisant <strong>React</strong>, <strong>Next.js</strong>, <strong>JavaScript</strong> et <strong>Tailwind CSS</strong>, j&apos;ai mis à profit ces compétences pour concevoir et développer des sites web dynamiques tels que <strong>"Élisabeth Coach holistique"</strong> (Mon projet le plus conséquent), <strong>"Éminence"</strong>, ainsi que ce portfolio entre autres. <Typography color="primary" sx={{ "&:hover": { textDecoration: "underline" } }} component={Link} href="/projets" >Voir mes projets</Typography>
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
      <Typography width={{ xs: "100%" }} textAlign={{ xs: 'center' }} color="primary" component={Link} href="https://cvdesignr.com/p/66acdd21414fd?hl=fr_FR" variant="h4" sx={{ "&:hover": { textDecoration: "underline" } }}>Lire mon CV</Typography>
    </Box>
  )
}

// parler de quoi je m'interesse :
// - J'aime m'interresser au seo et design
// -
// mes competence en design si cest necessaire pour une entreprise en GROS :
// - aillant debuter avec figma, j'ai appris a faire des maquettes assez rapidement. j'essai de m'ameliorer sans arret sur les bonnes pratiques et les standards du marché en ui design
// LE TEMPS QUE TU PASSE je sais pas tu decrit comment tu fais ta journée en gros :
// - je passe beaucoup de temps a coder durant mes journée et le soir j'aime regarder des videos youtube sur le dev, lire des docs, comme ça je fais en sorte de m'ameliorer sans arret.

