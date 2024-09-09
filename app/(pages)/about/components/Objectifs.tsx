import ButtonLink from "@/app/components/Button/ButtonLink";
import { Box, Typography } from "@mui/material";
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';

export default function Objectif({ className }: { className: string }) {
    return (
        <Box
            className={className}

            sx={{
                boxShadow: "0 0px 10px 0 rgba(2, 136, 209, 0.37)", // Ombre légère
                border: "1px solid rgba(255, 255, 255, 0.18)", // Bordure subtile
                color: "#ffffff", // Assurez-vous que le texte est lisible sur le nouveau fond
                transition: 'all 1s ease',
                marginBottom: { xxs: '90px', xs: '0px', md: '0' },

                ":hover": {
                    boxShadow: `0 0px 15px 0 var(--mui-palette-primary-main)`,
                },
            }}
            borderRadius="30px"
            padding={{ xs: "1.6rem", md: "2rem" }}
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
                Mon objectif est de <strong>trouver une alternance en tant que concepteur développeur d'applications</strong> où je pourrai mettre en pratique mes <strong>connaissances</strong>, développer mes compétences et contribuer à la réalisation de <strong>projets</strong> au sein d'une équipe.
            </Typography>
            <ButtonLink label="Contactez-moi" variant="outlined" icon={<EmailRoundedIcon />} to="/contact" />
        </Box>
    )
}