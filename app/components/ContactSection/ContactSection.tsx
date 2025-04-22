'use client'

import {
    Box, Stack, Typography, useMediaQuery, useTheme,
    Button, TextField, Snackbar, Alert, CircularProgress
} from "@mui/material";
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { motion, MotionValue, useTransform } from 'framer-motion';
import { useContactForm } from "../../hooks/useContactForm";
import { Controller, Control, FieldErrors } from "react-hook-form";
import { MultiStateBadge } from './MultiStateBadge'
import { useState, useEffect } from 'react';

// Définition temporaire de l'interface. Idéalement, exporter depuis le hook ou un fichier de types.
interface ContactFormData {
    name: string;
    email: string;
    message: string;
}

// Styles communs pour les TextField (Déplacés ici)
const commonInputStyles = (theme: any) => ({
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
            borderColor: '#2C2C2C',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#2C2C2C', // Couleur focus personnalisée
            borderWidth: '1px',
        },
        '&.Mui-focused': {
            backgroundColor: 'white',
        },
    },
    '& .MuiInputLabel-outlined': {
        color: '#666666',
        '&.Mui-focused': {
            color: '#2C2C2C' // Couleur focus personnalisée
        }
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
});

interface ContactSectionProps {
    scrollYProgress: MotionValue<number>;
    control: Control<any>;
    errors: FieldErrors<any>;
    onSubmit: (event: React.BaseSyntheticEvent) => Promise<void>;
    isSubmitting: boolean;
    statusMessage: { type: string; content: string } | null;
    isMobile: boolean;
    reset: () => void;
}

export default function ContactSection({
    scrollYProgress,
    control,
    errors,
    onSubmit,
    isSubmitting,
    statusMessage,
    isMobile,
    reset,
}: ContactSectionProps) {
    const theme = useTheme();
    // useMediaQuery n'est plus nécessaire ici, la valeur isMobile est passée en prop

    const [internalStatus, setInternalStatus] = useState<{ type: string; content: string } | null>(null);
    const [isResetting, setIsResetting] = useState(false);

    // Styles partagés pour les boutons de contact - Texte visible par défaut sur desktop
    const contactButtonStyle = (inverted: boolean) => ({
        height: '48px',
        borderRadius: '24px',
        padding: '0 16px', // Padding pour le texte
        transition: 'background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease', // Animer les changements
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '8px',
        width: { xs: '280px', md: 'auto' }, // Largeur auto sur desktop pour s'adapter au texte
        backgroundColor: inverted ? 'background.paper' : 'primary.main',
        color: inverted ? 'primary.main' : 'background.paper',
        border: inverted ? '1px solid' : 'none',
        borderColor: 'primary.main',
        textTransform: 'none', // Pas de majuscules auto
        '& .button-text': { // Texte toujours visible
            opacity: 1,
            maxWidth: 'none',
            whiteSpace: 'nowrap',
            fontWeight: 500,
            // Supprimer la logique d'opacité/maxWidth conditionnelle d'ici
        },
        '&:hover': {
            // Pas de changement de largeur au survol
            backgroundColor: inverted ? theme.palette.grey[100] : theme.palette.primary.dark, // Léger changement de fond
            // La couleur du texte et la bordure restent les mêmes qu'à l'initial
        },
    });

    // Framer motion variants pour les animations
    const sectionVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
    };

    const titleVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                delay: 0.1
            }
        }
    };

    const inputVariants = {
        hidden: { 
            opacity: 0,
            y: 20
        },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                delay: 0.2 + (0.2 * i)
            }
        })
    };

    const buttonVariants = {
        hidden: { opacity: 0, y: 5 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
                delay: 0.5
            }
        }
    };

    const dividerVariants = {
        hidden: { width: 0 },
        visible: {
            width: "120px",
            transition: {
                duration: 1,
                ease: [0.04, 0, 0.2, 0.8],
                delay: 1
            }
        }
    };

    // Déterminer l'état du badge en fonction de isSubmitting et statusMessage
    const getBadgeState = () => {
        if (isSubmitting) return 'loading';
        if (internalStatus?.type === 'success' || statusMessage?.type === 'success') return 'success';
        if (internalStatus?.type === 'error' || statusMessage?.type === 'error') return 'error';
        return 'idle';
    }

    const handleReset = () => {
        // Réinitialiser le formulaire et le statut
        reset();
    }

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isResetting) {
            setIsResetting(false);
            return;
        }
        onSubmit(e as any);
    }

    // Mettre à jour l'état interne quand statusMessage change
    useEffect(() => {
        setInternalStatus(statusMessage);
    }, [statusMessage]);

    return (
        <motion.div
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '2rem 0',
                height: '100%'
            }}
        >

            {/* Conteneur principal */}
            <Stack
                sx={{
                    width: '100%',
                    maxWidth: '1200px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: "center",
                    gap: "2rem"
                }}
            >

                {/* Titre */}
                <Box
                    component={motion.div}
                    variants={titleVariants}
                    initial="hidden"
                    animate="visible"
                    sx={{ textAlign: 'center' }}
                >
                    <Typography variant="h2" sx={{ color: '#b08d57' }}>
                        Contactez-moi
                    </Typography>
                </Box>

                <Box 
                    component={motion.div} 
                    variants={dividerVariants} 
                    initial="hidden"
                    animate="visible"
                    sx={{ 
                        height: "1px", 
                        background: "linear-gradient(90deg, rgba(176, 141, 87, 0.1) 0%, rgba(176, 141, 87, 0.6) 50%, rgba(176, 141, 87, 0.1) 100%)", 
                        borderRadius: "1px" 
                    }} 
                />

                {/* Formulaire de contact */}
                <Box
                    component={motion.form}
                    onSubmit={handleFormSubmit}
                    noValidate
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    sx={{
                        width: '100%',
                        maxWidth: '480px',
                        minHeight: '100%',
                        borderRadius: '12px',
                        px: { xs: 3, sm: 4 },
                        transition: 'all 0.3s ease',
                    }}
                >
                    <Stack className="flex flex-col justify-center items-center gap-4">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            custom={0}
                            variants={inputVariants}
                            style={{ width: '100%' }}
                        >
                            <Controller
                                name="name"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        fullWidth
                                        label="Nom et Prénom"
                                        error={!!errors.name}
                                        helperText={errors.name?.message?.toString()}
                                        required
                                        variant="outlined"
                                        sx={commonInputStyles(theme)}
                                    />
                                )}
                            />
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            animate="visible"
                            custom={1}
                            variants={inputVariants}
                            style={{ width: '100%' }}
                        >
                            <Controller
                                name="email"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        fullWidth
                                        label="Email"
                                        type="email"
                                        error={!!errors.email}
                                        helperText={errors.email?.message?.toString()}
                                        required
                                        variant="outlined"
                                        sx={commonInputStyles(theme)}
                                    />
                                )}
                            />
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            animate="visible"
                            custom={2}
                            variants={inputVariants}
                            style={{ width: '100%' }}
                        >
                            <Controller
                                name="message"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        fullWidth
                                        label="Message"
                                        error={!!errors.message}
                                        helperText={errors.message?.message?.toString()}
                                        required
                                        multiline
                                        rows={4}
                                        variant="outlined"
                                        sx={commonInputStyles(theme)}
                                    />
                                )}
                            />
                        </motion.div>

                        <motion.div
                            variants={buttonVariants}
                            initial="hidden"
                            animate="visible"
                            style={{ width: '100%' }}
                        >
                            <Box sx={{ 
                                width: '100%',
                                position: 'relative'
                            }}>
                                <MultiStateBadge
                                    state={getBadgeState()}
                                    message={statusMessage?.content}
                                    isValid={!errors.name && !errors.email && !errors.message}
                                    onReset={handleReset}
                                />
                            </Box>
                        </motion.div>
                    </Stack>
                </Box>
            </Stack>
        </motion.div>
    );
} 