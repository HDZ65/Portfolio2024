'use client'

import { Box, Stack, Typography, useMediaQuery, useTheme, Button } from "@mui/material";
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import { FlipWords } from "./ui/flip-words";
import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import AnimatedContactButton from "./AnimatedContactButton";
import Link from 'next/link';

export function PortfolioPresentation() {
    const words = ["Bonjour", "Hello"];
    const [isProjectHovered, setIsProjectHovered] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const { scrollYProgress } = useScroll({
        offset: ["start start", "end start"]
    });

    useEffect(() => {
        if (isMobile) {
            setIsProjectHovered(true);
        }
    }, [isMobile]);

    const ButtonStyle = (isHovered: boolean, inverted: boolean, expandedWidth: string) => ({
        minWidth: isMobile ? '100%' : '48px',
        width: isMobile ? '100%' : (isHovered ? expandedWidth : '48px'),
        height: '48px',
        borderRadius: '24px',
        padding: '0 12px',
        transition: 'all 0.3s cubic-bezier(0.0, 0.0, 0.2, 1)',
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{
                scale: useTransform(scrollYProgress, [0, 0.5], [1, 0.8]),
                opacity: useTransform(scrollYProgress, [0, 0.5], [1, 0]),
                height: useTransform(scrollYProgress, [0, 0.5], ['calc(100vh - 57.59px)', 'calc(100dvh - 62px)']),
                width: '100%'
            }}
        >
            <Stack
                sx={{
                    maxWidth: '1200px',
                    width: { xs: '100%', md: '90%' },
                    margin: '0 auto',
                    height: '100%',
                    padding: { xxs: '0', xs: '0 1rem', md: '2.5rem' },
                    justifyContent: 'center',
                }}
                flexDirection={{ xs: 'column' }}
                alignItems={{ xs: 'center', md: 'center' }}
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
                        textAlign={{ xs: 'center', md: 'center' }}
                        variant="h1"
                    >
                        <FlipWords words={words} />
                    </Typography>
                    <Typography
                        width="100%"
                        textAlign={{ xs: 'center', md: 'center' }}
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
                        textAlign={{ xs: 'center', md: 'center' }}
                        variant="h5"
                        component="div"
                        sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: { xs: 'center', md: 'center' } }}
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
                        textAlign={{ xs: 'center', md: 'center' }}
                        variant="h5"
                        component="div"
                        sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: { xs: 'center', md: 'center' } }}
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
                    sx={{
                        '& > *': {
                            width: { xs: '100%', md: 'auto' }
                        }
                    }}
                >
                    <motion.div
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link href="mesProjets" passHref>
                            <Button
                                variant="contained"
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
                                        transition: 'all 0.3s cubic-bezier(0.0, 0.0, 0.2, 1)',
                                        whiteSpace: 'nowrap',
                                        overflow: 'hidden',
                                    }}
                                >
                                    Mes Projets
                                </Typography>
                            </Button>
                        </Link>
                    </motion.div>
                    <motion.div
                        whileTap={{ scale: 0.95 }}
                    >
                        <AnimatedContactButton href="contact" fullWidth={isMobile} />
                    </motion.div>
                </Box>
            </Stack>
        </motion.div>
    );
} 