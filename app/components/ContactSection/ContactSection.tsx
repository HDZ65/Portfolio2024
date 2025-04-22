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
    control: Control<ContactFormData>;
    errors: FieldErrors<ContactFormData>;
    onSubmit: (event: React.BaseSyntheticEvent) => Promise<void>;
    isSubmitting: boolean;
    statusMessage: { type: string; content: string } | null;
    isMobile: boolean;
}

export default function ContactSection({
    scrollYProgress,
    control,
    errors,
    onSubmit,
    isSubmitting,
    statusMessage,
    isMobile
}: ContactSectionProps) {
    const theme = useTheme();
    // useMediaQuery n'est plus nécessaire ici, la valeur isMobile est passée en prop

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
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.1 } }
    };

    const dividerVariants = {
        hidden: { width: 0 },
        visible: { width: "120px", transition: { duration: 1, ease: [0.04, 0, 0.2, 0.8], delay: 1 } }
    };


    const formItemVariants = (delay: number) => ({
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.04, 0, 0.2, 0.8], delay } }
    });

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
                    sx={{ textAlign: 'center' }}
                >
                    <Typography variant="h2" sx={{ color: '#b08d57' }}>
                        Contactez-moi
                    </Typography>
                </Box>

                {/* Ligne de séparation */}
                <Box component={motion.div} variants={dividerVariants} sx={{ height: "1px", background: "linear-gradient(90deg, rgba(176, 141, 87, 0.1) 0%, rgba(176, 141, 87, 0.6) 50%, rgba(176, 141, 87, 0.1) 100%)", borderRadius: "1px", }} />


                {/* Formulaire de contact */}
                <Box
                    component={motion.form}
                    onSubmit={onSubmit}
                    noValidate // Désactiver la validation HTML native
                    variants={formItemVariants(0.8)} // Animation simple pour l'entrée du formulaire
                    initial="hidden" // Assurez-vous que l'état initial est défini
                    animate="visible" // Assurez-vous que l'animation se déclenche
                    sx={{
                        width: '100%',
                        maxWidth: '480px',
                        minHeight: '100%',
                        borderRadius: '12px',
                        px: { xs: 3, sm: 4 }, // Augmenter le padding
                        transition: 'all 0.3s ease',
                    }}
                >
                    <Stack className="flex flex-col justify-center items-center gap-4"> 
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
                                    helperText={errors.name?.message}
                                    required
                                    variant="outlined"
                                    sx={commonInputStyles(theme)}
                                />
                            )}
                        />

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
                                    helperText={errors.email?.message}
                                    required
                                    variant="outlined"
                                    sx={commonInputStyles(theme)}
                                />
                            )}
                        />

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
                                    helperText={errors.message?.message}
                                    required
                                    multiline
                                    rows={4}
                                    variant="outlined"
                                    sx={commonInputStyles(theme)}
                                />
                            )}
                        />

                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                            disabled={isSubmitting}
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
                                position: 'relative',
                                '&:hover': {
                                    backgroundColor: 'primary.dark',
                                },
                                '&:disabled': {
                                    backgroundColor: 'grey.300',
                                    color: 'grey.500'
                                }
                            }}
                        >
                            {isSubmitting ? (
                                <>
                                    <CircularProgress
                                        size={24}
                                        sx={{
                                            color: 'grey.500',
                                            position: 'absolute',
                                            top: '50%', // Centrer verticalement
                                            left: '50%',
                                            marginTop: '-12px', // Ajustement pour le centrage
                                            marginLeft: '-12px',
                                        }}
                                    />
                                    {/* Masquer le texte pendant le chargement pour éviter le décalage */}
                                    <Typography component="span" sx={{ visibility: 'hidden' }}>
                                        Envoyer le message
                                    </Typography>
                                </>
                            ) : (
                                'Envoyer le message'
                            )}
                        </Button>
                    </Stack>
                </Box>

                {/* Snackbar pour les notifications */}
                <Snackbar
                    open={!!statusMessage}
                    autoHideDuration={6000}
                    onClose={() => { /* Gérer la fermeture si nécessaire */ }}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                    sx={{ mb: 2 }} // Ajouter une marge en bas
                >
                    <Alert
                        severity={statusMessage?.type === 'success' ? 'success' : statusMessage?.type === 'error' ? 'error' : 'info'}
                        sx={{ width: '100%' }}
                        elevation={6}
                        variant="filled" // Style plus visible
                    >
                        {statusMessage?.content}
                    </Alert>
                </Snackbar>

            </Stack>
        </motion.div>
    );
} 