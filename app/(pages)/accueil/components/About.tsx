import { Box, Typography } from "@mui/material";

export default function About() {
    return (
        <Box component="section" display="flex" flexDirection="column" alignItems="start" justifyContent="center" gap="1.5rem">

            <Typography variant="h1">
                Qui suis-je ?
            </Typography>

            <Typography variant="body1">
                Développeur web junior passionné par la création d&apos;expériences digitales immersives, je suis particulièrement intéressé par le développement front-end et le UI/UX design. Maîtrisant React, Next.js, JavaScript et Tailwind CSS, j&apos;ai mis à profit ces compétences pour concevoir et développer des sites web dynamiques tels que &quot;Élisabeth Coach holistique&quot; (Mon plus grand projet), &quot;Éminence&quot;, ainsi que ce portfolio.
            </Typography>

            <Typography variant="body1">
                Rigoureux et créatif, j&apos;ai développé de solides compétences que ce soit en maquetage sur figma ou en développement. Particulierement avec react, nextJS et mongoDB.
            </Typography>

            <Box>
                <Typography variant="body1">
                    Mon objectif est de rejoindre une équipe dynamique où je pourrai mettre en pratique mes connaissances et contribuer à la réalisation de projets ambitieux.
                </Typography>
            </Box>
        </Box>
    )
}