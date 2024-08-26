import { Box, Typography } from "@mui/material";

export default function Objectif() {
    return (
        <Box display="flex" flexDirection="column" alignItems="start" justifyContent="center" gap="1.6rem" >
            <Typography variant="h2">
                Mon objectif
            </Typography>

            <Typography fontSize="16px">
                Mon objectif est de rejoindre une équipe dynamique où je pourrai mettre en pratique mes connaissances et contribuer à la réalisation de projets ambitieux.
            </Typography>
        </Box>
    )
}