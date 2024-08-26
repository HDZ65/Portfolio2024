import { Box, Link, Stack, Typography } from "@mui/material";

export default function About() {
    return (
        <Box  display="flex" flexDirection="column" gap="1.6rem" justifyContent="center" width="100%" component="section" borderRadius="30px">
            <Box sx={{ backgroundColor: "var(--mui-palette-text-primary)", color: "var(--mui-palette-background-default)" }} borderRadius="30px" padding={{ xs: "1.6rem", md: "3rem" }} width={{ xs: "100%" }} display="flex" flexDirection="column" alignItems="center" justifyContent="center" gap="1.6rem" >
                <Typography width={{ xs: "100%", md: "60%" }} textAlign={{ xs: 'start', md: 'center' }} variant="h2">
                    Qui suis-je ?
                </Typography>

                <Typography textAlign={{ xs: 'start', md: 'center' }}  >
                    Alexandre Hernandez, 28 ans, <strong>Développeur web junior</strong> passionné par la création d&apos;<strong>expériences digitales immersives</strong>. Je suis particulièrement intéressé par le <strong>développement front-end</strong> et le <strong>UI/UX design</strong>. Maîtrisant <strong>React</strong>, <strong>Next.js</strong>, <strong>JavaScript</strong> et <strong>Tailwind CSS</strong>, j&apos;ai mis à profit ces compétences pour concevoir et développer des sites web dynamiques tels que <strong>"Élisabeth Coach holistique"</strong> (Mon projet le plus important), <strong>"Opolence"</strong>, ainsi que ce portfolio entre autres. <Link href="/projets">Voir mes projets</Link>
                </Typography>
            </Box>
            <Box display="flex" flexDirection="row" gap="1.6rem">
                <Box sx={{ backgroundColor: "var(--mui-palette-text-primary)", color: "var(--mui-palette-background-default)" }} borderRadius="30px" padding={{ xs: "1.6rem", md: "3rem" }} width={{ xs: "100%" }} display="flex" flexDirection="column" alignItems="start" justifyContent="center" gap="1.6rem">
                    <Typography variant="h2">
                        Mes compétences
                    </Typography>
                    <Typography>
                        J'ai travaillé sur plusieur projets avec des technologies telles que <strong>React</strong>, <strong>Next.js</strong>, <strong>Tailwind CSS</strong>, <strong>Node.js</strong>, <strong>Express</strong>, <strong>MongoDB</strong>. J'ai aussi un projet en cours avec <strong>Symfony</strong> pour apprendre à travailler avec ce framework.
                    </Typography>
                </Box>
                <Box sx={{ backgroundColor: "var(--mui-palette-text-primary)", color: "var(--mui-palette-background-default)" }} borderRadius="30px" padding={{ xs: "1.6rem", md: "3rem" }} width={{ xs: "100%" }} display="flex" flexDirection="column" alignItems="start" justifyContent="center" gap="1.6rem">
                    <Typography variant="h2">
                        Mon objectif
                    </Typography>
                    <Typography>
                        Mon objectif est de <strong>rejoindre une équipe dynamique</strong> où je pourrai mettre en pratique mes <strong>connaissances</strong> et contribuer à la réalisation de <strong>projets ambitieux</strong>.
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}