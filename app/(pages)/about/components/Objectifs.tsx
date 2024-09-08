import { Box, Typography } from "@mui/material";

export default function Objectif({ className }: { className: string }) {
    return (
        <Box
      className={className}

            sx={{
                backdropFilter: "blur(10px)", // Effet de flou
                boxShadow: "0 0px 10px 0 rgba(2, 136, 209, 0.37)", // Ombre légère
                border: "1px solid rgba(255, 255, 255, 0.18)", // Bordure subtile
                color: "#ffffff", // Assurez-vous que le texte est lisible sur le nouveau fond
                transition: 'all 1s ease',

                ":hover": {
                    boxShadow: `0 0px 15px 0 var(--mui-palette-primary-main)`,
                },
            }}
            borderRadius="30px"
            padding={{ xs: "1.6rem", md: "3rem" }}
            display="flex"
            flexDirection="column"
            alignItems="start"
            justifyContent="start"
            gap="1.6rem"
        >
            <Typography variant="h2" component="h2" sx={{ position: "relative", zIndex: 2 }}>
            🚀 Mon objectif 
            </Typography>
            <Typography sx={{ position: "relative", zIndex: 2 }}>
                Mon objectif est de <strong>rejoindre une équipe dynamique</strong> où je pourrai mettre en pratique mes <strong>connaissances</strong> et contribuer à la réalisation de <strong>projets ambitieux</strong>.
            </Typography>
        </Box>
    )
}