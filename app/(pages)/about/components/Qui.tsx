import { GroupSharp } from "@mui/icons-material";
import { Box, Typography} from "@mui/material";
import Link from "next/link";

export default function Qui({ className }: { className: string }) {
  return (
    <Box  
      className={className}
      borderRadius="30px" 
      padding={{ xs: "1.6rem", md: "3rem" }} 
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
      <Typography width={{ xs: "100%" }} textAlign={{ xs: 'start' }} variant="h2">
        👨‍💻 Qui suis-je ?
      </Typography>

      <Typography textAlign={{ xs: 'start' }}  >
        Alexandre Hernandez, 28 ans, <strong>Développeur web fullstack</strong> passionné par la création d&apos;<strong>expériences digitales</strong>. Maîtrisant <strong>React</strong>, <strong>Next.js</strong>, <strong>JavaScript</strong> et <strong>Tailwind CSS</strong>, j&apos;ai mis à profit ces compétences pour concevoir et développer des sites web dynamiques tels que <strong>"Élisabeth Coach holistique"</strong> (Mon projet le plus concequent), <strong>"Éminence"</strong>, ainsi que ce portfolio entre autres. <Typography color="primary" component={Link} href="/projets" >Voir mes projets</Typography>
      </Typography> 
    </Box>
  )
}

// parler de quoi je m'interesse
// mes competence en design si cest necessaire pour une entreprise en GROS
// LE TEMPS QUE TU PASSE je sais pas tu decrit comment tu fais ta journée en gros