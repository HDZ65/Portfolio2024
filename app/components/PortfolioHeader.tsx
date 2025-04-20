// Fichier principal pour le composant PortfolioHeader
import { Stack } from "@mui/material";
import { motion } from 'framer-motion';
import About from "../(pages)/about/components/about";
import { PortfolioShowcase } from "./PortfolioShowcase";
import { PortfolioPresentation } from "./PortfolioPresentation";

export default function PortfolioHeader() {
    return (
        <motion.div className="w-full relative">
            <Stack
                component="main"
                spacing={0}
                className="w-full relative"
            >
                <PortfolioPresentation />
                <PortfolioShowcase />
                <About />
            </Stack>
        </motion.div>
    );
} 