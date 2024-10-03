'use client'
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import AnimatedContactButton from "@/app/components/AnimatedContactButton";

export default function Objectif({ className }: { className: string }) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Box
            className={className}

            sx={{
                transition: 'all 1s ease',
                marginBottom: { xxs: '90px', xs: '0px', md: '0' },
                backgroundColor: "var(--mui-palette-background-paper)",

                ":hover": {
                    boxShadow: `0 0px 15px 0 var(--mui-palette-primary-main)`,
                },
            }}
            borderRadius="12px"
            padding={{ xs: "1.6rem", md: "2rem" }}
            display="flex"
            flexDirection="column"
            alignItems="start"
            justifyContent="start"
            gap={{ xs: "1.6rem", md: "2rem" }}
        >
            <Typography variant="h2" component="h2" sx={{ position: "relative", zIndex: 2 }}>
                🚀 Mon objectif
            </Typography>
            <Typography sx={{ position: "relative", zIndex: 2 }}>
                Mon objectif est de <strong>trouver une alternance en tant que concepteur développeur d'applications</strong> où je pourrai mettre en pratique mes <strong>connaissances</strong>, développer mes compétences et contribuer à la réalisation de <strong>projets</strong> au sein d'une équipe.
            </Typography>
            <AnimatedContactButton href="#contact" fullWidth={isMobile}/>
        </Box>
    )
}