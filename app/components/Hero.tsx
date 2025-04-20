'use client'
// Fichier principal pour le composant Hero
import ButtonLink from "@/app/components/Button/ButtonLink";
import Picture from "@/app/components/Picture";
import { Box, Button, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import SwipeDownloadButton from "./SwipeDownloadButton";
import { FlipWords } from "./ui/flip-words";
import { useState, useEffect } from 'react';
import AnimatedContactButton from './AnimatedContactButton';
import { motion, useScroll, useTransform } from 'framer-motion';
import About from "../(pages)/about/components/about";

const heroVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.8,
            ease: 'easeOut'
        }
    }
}

// Fonction principale pour le composant Hero
export default function Hero() {
    // États et hooks
    const words = ["Bonjour", "Hello"];
    const [isHovered, setIsHovered] = useState(false);
    const [isProjectHovered, setIsProjectHovered] = useState(false);
    const [isContactHovered, setIsContactHovered] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    // Configuration du scroll
    const { scrollYProgress } = useScroll({
        offset: ["start start", "end start"]
    });

    const { scrollYProgress: imageScrollProgress } = useScroll({
        target: { current: document.querySelector('.image-section') },
        offset: ["start end", "end end"],
        layoutEffect: false
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 1]);
    const opacity = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

    // Effet pour mobile
    useEffect(() => {
        if (isMobile) {
            setIsProjectHovered(true);
            setIsContactHovered(true);
        }
    }, [isMobile]);

    // Style des boutons
    const ButtonStyle = (isHovered: boolean, inverted: boolean, expandedWidth: string) => ({
        minWidth: isMobile ? '100%' : '48px',
        width: isMobile ? '100%' : (isHovered ? expandedWidth : '48px'),
        height: '48px',
        borderRadius: '24px',
        padding: '0 12px',
        transition: 'all 0.5s cubic-bezier(0.0, 0.0, 0.2, 1)',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: isMobile ? 'center' : 'flex-start',
        alignItems: 'center',
        gap: '8px',
        backgroundColor: inverted ? 'background.paper' : 'primary.main',
        color: inverted ? 'primary.main' : 'background.paper',
        border: inverted ? '1px solid' : 'none',
        borderColor: 'primary.main',
        '&:hover': {
            backgroundColor: inverted ? 'background.paper' : 'primary.main',
            color: inverted ? 'primary.main' : 'background.paper',
        },
    });

    return (
        <motion.div
            style={{
                width: '100%',
                position: 'relative',
            }}
        >
            <Stack
                component="main"
                spacing={0}
                sx={{
                    width: '100%',
                    position: 'relative'
                }}
            >
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    style={{
                        scale: useTransform(scrollYProgress, [0, 0.5], [1, 0.8]),
                        opacity: useTransform(scrollYProgress, [0, 0.5], [1, 0])
                    }}
                >
                    <Stack
                        sx={{
                            maxWidth: '1200px',
                            width: { xs: '100%', md: '90%' },
                            margin: '0 auto',
                            minHeight: '100dvh',
                            padding: { xxs: '0', xs: '0 1rem', md: '2.5rem' },
                            justifyContent: 'center'
                        }}
                        flexDirection={{ xs: 'column' }}
                        alignItems={{ xs: 'start', md: 'center' }}
                        gap={{ xs: "2rem", xl: "2.5rem" }}
                    >
                        <Box
                            component={motion.div}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                ease: "easeOut",
                                delay: 0.1
                            }}
                            display="flex"
                            flexDirection="column"
                            gap="1rem"
                        >
                            <Typography
                                color="primary.main"
                                width="100%"
                                textAlign={{ xs: 'start', md: 'center' }}
                                variant="h1"
                            >
                                <FlipWords words={words} />
                            </Typography>
                            <Typography
                                width="100%"
                                textAlign={{ xs: 'start', md: 'center' }}
                                variant="h1"
                            >
                                Je suis Alexandre Hernandez
                            </Typography>
                        </Box>

                        <Box
                            component={motion.div}
                            initial={{ width: 0 }}
                            animate={{ width: "180px" }}
                            transition={{
                                duration: 1,
                                ease: [0.04, 0, 0.2, 0.8],
                                delay: 1
                            }}
                            sx={{
                                height: "1.5px",
                                background: "linear-gradient(90deg, rgba(176, 141, 87, 0.1) 0%, rgba(176, 141, 87, 0.6) 50%, rgba(176, 141, 87, 0.1) 100%)",
                                borderRadius: "1px",
                            }}
                        />

                        <Box
                            component={motion.div}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                ease: "easeOut",
                                delay: 0.2
                            }}
                        >
                            <Typography
                                width="100%"
                                textAlign={{ xs: 'start', md: 'center' }}
                                variant="h5"
                                component="div"
                                sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: { xs: 'flex-start', md: 'center' } }}
                            >
                                Développeur web fullstack{' '}
                                <Typography
                                    variant="h5"
                                    color="text.secondary"
                                    component="span"
                                    sx={{ ml: 1 }}
                                >
                                    basé à Tarbes, France
                                </Typography>
                            </Typography>
                            <Typography
                                width="100%"
                                textAlign={{ xs: 'start', md: 'center' }}
                                variant="h5"
                                component="div"
                                sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: { xs: 'flex-start', md: 'center' } }}
                            >
                                Actuellement en recherche d'entreprise{' '}
                                <Typography
                                    variant="h5"
                                    color="text.secondary"
                                    component="h5"
                                    sx={{ ml: 1 }}
                                >
                                    pour une alternance Concepteur Développeur d'Applications.
                                </Typography>
                            </Typography>
                        </Box>

                        <Box
                            component={motion.div}
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                ease: "easeOut",
                                delay: 0.5
                            }}
                            display="flex"
                            width="100%"
                            justifyContent="center"
                            alignItems="center"
                            flexDirection={{ xs: 'column', md: 'row' }}
                            gap={{ xs: "1.6rem", md: "2rem" }}
                        >
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Button
                                    variant="contained"
                                    href="#mesProjets"
                                    onMouseEnter={() => !isMobile && setIsProjectHovered(true)}
                                    onMouseLeave={() => !isMobile && setIsProjectHovered(false)}
                                    sx={ButtonStyle(isProjectHovered, false, '160px')}
                                    aria-label={isProjectHovered ? "Mes Projets" : "Voir mes projets"}
                                    title="Voir mes projets de développement web"
                                    fullWidth={isMobile}
                                >
                                    <WorkRoundedIcon sx={{ flexShrink: 0 }} />
                                    <Typography
                                        sx={{
                                            opacity: isMobile || isProjectHovered ? 1 : 0,
                                            maxWidth: isMobile || isProjectHovered ? 'none' : '0',
                                            transition: 'all 0.5s cubic-bezier(0.0, 0.0, 0.2, 1)',
                                            whiteSpace: 'nowrap',
                                            overflow: 'hidden',
                                        }}
                                    >
                                        Mes Projets
                                    </Typography>
                                </Button>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <AnimatedContactButton href="#contact" fullWidth={isMobile} />
                            </motion.div>
                        </Box>
                    </Stack>
                </motion.div>

                {/* Section principale */}
                <div
                    style={{
                        width: '100%',
                        height: '400vh',
                        position: 'relative',
                        border: '1px solid green',
                    }}
                >
                    {/* Section d'animation */}
                    <div
                        style={{
                            width: '100%',
                            height: '100vh',
                            position: 'relative',
                        }}
                    >
                        {/* Section image */}
                        <div
                            className="image-section"
                            style={{
                                width: '100%',
                                height: '100vh',
                                position: 'relative',
                                border: '3px solid red',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <motion.div
                                style={{
                                    width: useTransform(imageScrollProgress, [0, 1], ['100vw', '40vw']),
                                    height: useTransform(imageScrollProgress, [0, 1], ['100vh', '40vh']),
                                    border: '3px solid blue',
                                }}
                            >
                                <motion.img
                                    src="/imageProjets/image.png"
                                    alt="Image de présentation"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        objectPosition: 'top',
                                        borderRadius: '12px',
                                    }}
                                />
                            </motion.div>
                        </div>
                    </div>

                    {/* Section vide pour le défilement */}
                    <div style={{ height: '300vh' }} />
                </div>

                {/* Section des compétences avec animations au scroll */}
                {/* <About /> */}
            </Stack>
        </motion.div>
    );
}
