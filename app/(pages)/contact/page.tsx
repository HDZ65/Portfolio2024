'use client'

import { Box, Stack, Typography, useMediaQuery, useTheme, Button, TextField } from "@mui/material";
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import Header from "../../components/Header/Header";

export default function ContactPage() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [isEmailHovered, setIsEmailHovered] = useState(false);
    const [isLinkedInHovered, setIsLinkedInHovered] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        name: '',
        message: ''
    });

    const { scrollYProgress } = useScroll({
        offset: ["start start", "end start"]
    });

    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const y = useTransform(scrollYProgress, [0, 0.5], [0, 50]);

    useEffect(() => {
        if (isMobile) {
            setIsEmailHovered(true);
            setIsLinkedInHovered(true);
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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Formulaire soumis:', formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <>
            <Header />
            <motion.div
                style={{
                    scale,
                    opacity,
                    y
                }}
            >
                <Stack
                    component={motion.div}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, ease: [0.04, 0, 0.2, 0.8] }}
                    sx={{
                        maxWidth: '1200px',
                        width: { xs: '100%', md: '90%' },
                        margin: '0 auto',
                        height: 'calc(100dvh - 62px)',
                        padding: { xs: '1rem', md: '2rem' },
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: { xs: 3, md: 4 }
                    }}
                >
                    <Box
                        component={motion.div}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.6,
                            ease: [0.04, 0, 0.2, 0.8],
                            delay: 0.1
                        }}
                        display="flex"
                        flexDirection="column"
                        gap="0.5rem"
                        alignItems="center"
                        textAlign="center"
                    >
                        <Typography
                            variant="h2"
                            sx={{ color: '#b08d57' }}
                        >
                            Contactez-moi
                        </Typography>
                        <Typography
                            sx={{ 
                                color: 'text.secondary',
                            }}
                        >
                            N'hésitez pas à me contacter pour discuter de vos projets
                        </Typography>
                    </Box>

                    <Box
                        component={motion.div}
                        initial={{ width: 0 }}
                        animate={{ width: "120px" }}
                        transition={{
                            duration: 1,
                            ease: [0.04, 0, 0.2, 0.8],
                            delay: 1
                        }}
                        sx={{
                            height: "1px",
                            background: "linear-gradient(90deg, rgba(176, 141, 87, 0.1) 0%, rgba(176, 141, 87, 0.6) 50%, rgba(176, 141, 87, 0.1) 100%)",
                            borderRadius: "1px",
                        }}
                    />

                    <Box
                        component={motion.div}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.5,
                            ease: [0.04, 0, 0.2, 0.8],
                            delay: 0.5
                        }}
                        display="flex"
                        width="100%"
                        justifyContent="center"
                        alignItems="center"
                        flexDirection={{ xs: 'column', md: 'row' }}
                        gap={{ xs: "1rem", md: "1.5rem" }}
                    >
                        <motion.div
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 0.5,
                                ease: [0.04, 0, 0.2, 0.8],
                                delay: 0.6
                            }}
                        >
                            <Button
                                variant="contained"
                                href="mailto:votre@email.com"
                                onMouseEnter={() => !isMobile && setIsEmailHovered(true)}
                                onMouseLeave={() => !isMobile && setIsEmailHovered(false)}
                                sx={ButtonStyle(isEmailHovered, false, '200px')}
                                aria-label={isEmailHovered ? "Envoyer un email" : "Email"}
                                fullWidth={isMobile}
                            >
                                <EmailRoundedIcon sx={{ flexShrink: 0 }} />
                                <Typography
                                    sx={{
                                        opacity: isMobile || isEmailHovered ? 1 : 0,
                                        maxWidth: isMobile || isEmailHovered ? 'none' : '0',
                                        transition: 'all 0.3s cubic-bezier(0.0, 0.0, 0.2, 1)',
                                        whiteSpace: 'nowrap',
                                        overflow: 'hidden',
                                    }}
                                >
                                    Envoyer un email
                                </Typography>
                            </Button>
                        </motion.div>

                        <motion.div
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 0.5,
                                ease: [0.04, 0, 0.2, 0.8],
                                delay: 0.7
                            }}
                        >
                            <Button
                                variant="outlined"
                                href="https://linkedin.com/in/votre-profil"
                                target="_blank"
                                onMouseEnter={() => !isMobile && setIsLinkedInHovered(true)}
                                onMouseLeave={() => !isMobile && setIsLinkedInHovered(false)}
                                sx={ButtonStyle(isLinkedInHovered, true, '200px')}
                                aria-label={isLinkedInHovered ? "Visiter LinkedIn" : "LinkedIn"}
                                fullWidth={isMobile}
                            >
                                <LinkedInIcon sx={{ flexShrink: 0 }} />
                                <Typography
                                    sx={{
                                        opacity: isMobile || isLinkedInHovered ? 1 : 0,
                                        maxWidth: isMobile || isLinkedInHovered ? 'none' : '0',
                                        transition: 'all 0.3s cubic-bezier(0.0, 0.0, 0.2, 1)',
                                        whiteSpace: 'nowrap',
                                        overflow: 'hidden',
                                    }}
                                >
                                    Visiter LinkedIn
                                </Typography>
                            </Button>
                        </motion.div>
                    </Box>

                    <Box
                        component={motion.form}
                        onSubmit={handleSubmit}
                        className="group"
                        sx={{
                            width: '100%',
                            maxWidth: '480px',
                            borderRadius: '12px',
                            p: { xs: 2.5, sm: 3 },
                            background: 'rgba(255, 255, 255, 0.02)',
                            backdropFilter: 'blur(8px)',
                            transition: 'all 0.3s ease',
                            marginTop: { xs: 1, md: 2 },
                            '& .MuiTextField-root': {
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '8px',
                                    backgroundColor: 'white',
                                    transition: theme.transitions.create([
                                        'border-color',
                                        'background-color',
                                        'box-shadow',
                                    ]),
                                    '& fieldset': {
                                        borderColor: '#e0e0e0',
                                        borderWidth: '1px',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: '#b0b0b0',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: theme.palette.primary.main,
                                        borderWidth: '1px',
                                    },
                                    '&.Mui-focused': {
                                        backgroundColor: 'white',
                                    },
                                },
                                '& .MuiInputLabel-outlined': {
                                    color: '#666666',
                                },
                                '& .MuiOutlinedInput-input': {
                                     padding: '14px 16px',
                                     color: '#333333',
                                },
                                '& .MuiOutlinedInput-input:-webkit-autofill': {
                                    'WebkitBoxShadow': '0 0 0 100px white inset',
                                    'WebkitTextFillColor': '#333333',
                                    borderRadius: 'inherit',
                                    caretColor: '#333333',
                                },
                            },
                        }}
                    >
                        <Stack spacing={3}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.6,
                                    ease: [0.04, 0, 0.2, 0.8],
                                    delay: 0.9
                                }}
                            >
                                <TextField
                                    fullWidth
                                    label="Nom et Prénom"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    variant="outlined"
                                />
                            </motion.div>
                            
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.6,
                                    ease: [0.04, 0, 0.2, 0.8],
                                    delay: 1.0
                                }}
                            >
                                <TextField
                                    fullWidth
                                    label="Email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    variant="outlined"
                                />
                            </motion.div>
                            
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.6,
                                    ease: [0.04, 0, 0.2, 0.8],
                                    delay: 1.1
                                }}
                            >
                                <TextField
                                    fullWidth
                                    label="Message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    multiline
                                    rows={4}
                                    variant="outlined"
                                />
                            </motion.div>
                            
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.6,
                                    ease: [0.04, 0, 0.2, 0.8],
                                    delay: 1.2
                                }}
                            >
                                <Button
                                    component={motion.button}
                                    whileHover={{ scale: 1.01 }}
                                    whileTap={{ scale: 0.99 }}
                                    type="submit"
                                    variant="contained"
                                    fullWidth
                                    sx={{
                                        mt: 1,
                                        py: 1.5,
                                        borderRadius: '8px',
                                        backgroundColor: 'primary.main',
                                        color: 'background.paper',
                                        textTransform: 'none',
                                        fontSize: '1rem',
                                        fontWeight: 500,
                                        letterSpacing: '-0.01em',
                                        transition: 'all 0.2s ease',
                                        boxShadow: 'none',
                                        '&:hover': {
                                            backgroundColor: 'primary.dark',
                                        }
                                    }}
                                >
                                    Envoyer le message
                                </Button>
                            </motion.div>
                        </Stack>
                    </Box>

                </Stack>
            </motion.div>
        </>
    );
} 