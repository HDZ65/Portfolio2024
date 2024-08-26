import { Box, Typography } from "@mui/material";

export default function About() {
    return (
        <Box display="flex" flexDirection="column" alignItems="start" justifyContent="center" gap="1.6rem" >
            <Typography variant="h2">
                Qui suis-je ?
            </Typography>

            <Typography fontSize="16px">
                Alexandre Hernandez, 28 ans, Développeur web junior passionné par la création d&apos;expériences digitales immersives.
            </Typography>
        </Box>
    )
}