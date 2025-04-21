import { Box, Container, Link, Stack, Typography } from "@mui/material";
import MenuReseaux from "../Button/MenuReseaux";
import LinkNav from "./LinkNav";
import Grid2 from '@mui/material/Grid2';
import Image from "next/image";
import logo from './../../../public/logo.png';
import { motion } from 'framer-motion';

// Fonction principale du composant Header
export default function Header() {
    const headerVariants = {
        hidden: {
            opacity: 0,
            y: -10
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                when: "beforeChildren"
            }
        }
    };

    return (
        <Stack sx={{ zIndex: 1000 }}>
            <Grid2
                component={motion.header}
                variants={headerVariants}
                initial="hidden"
                animate="visible"
                zIndex={1000}
                container
                sx={{ position: 'relative', paddingY: { xs: "1.8rem", md: "1rem" }, paddingX: { xs: "1rem", md: "1rem", lg: "1rem", xl: "0" } }}
            >
                <Grid2 size="grow" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'start' }}>
                </Grid2>
                <LinkNav />
                <Grid2
                    component={motion.div}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                    size={{ xs: 2, md: "grow" }}
                    position={'relative'}
                    sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                    <MenuReseaux />
                </Grid2>
            </Grid2>
        </Stack>
    )
}