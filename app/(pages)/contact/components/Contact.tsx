"use client"

/**
 * Composant ContactForm
 * 
 * Ce composant affiche un formulaire de contact et gère l'envoi d'e-mails via Nodemailer.
 * Il utilise react-hook-form pour la gestion du formulaire et zod pour la validation.
 */

import React, { useState } from 'react';
import { Box, TextField, Button, Stack, Typography, Alert } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import SendIcon from '@mui/icons-material/Send';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import axios from 'axios';

// Schéma de validation du formulaire
const schema = z.object({
    name: z.string().min(1, "Le nom complet est requis"),
    email: z.string().email("Email invalide"),
    message: z.string().min(1, "Le message est requis"),
});

type FormData = z.infer<typeof schema>;

// Configuration des champs du formulaire
const formFields = [
    { name: 'name', label: 'Nom / Prénom', multiline: false, rows: 1 },
    { name: 'email', label: 'Email', multiline: false, rows: 1, type: 'email' },
    { name: 'message', label: 'Message', multiline: true, rows: 4 },
];

const ContactForm: React.FC = () => {
    const [status, setStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' });
    const { control, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    // Fonction pour gérer l'envoi du formulaire
    const onSubmit = async (data: FormData) => {
        try {
            console.log('Envoi des données:', data);
            const response = await axios.post('/api/send-email', data);
            console.log('Réponse reçue:', response.data);
            setStatus({ type: 'success', message: 'Votre message a été envoyé avec succès!' });
            reset();
        } catch (error: any) {
            console.error('Erreur détaillée:', error.response?.data || error.message);
            setStatus({ type: 'error', message: 'Une erreur est survenue lors de l\'envoi du message.' });
        }
    };

    return (
        <Stack
        sx={{
            margin: { xs: 'auto' },
            backgroundSize: '400% 400%',
            padding: {xs: '1.6rem', md: '2rem'},
            gap: {xs: '1.6rem', md: '2rem'},
            justifyContent: 'center',
            width: '60%',
            maxWidth: '600px', 
            borderRadius: '30px',
            boxShadow: "0 0px 10px 0 rgba(2, 136, 209, 0.37)",
            border: '1px solid rgba(255, 255, 255, 0.18)',
            transition: 'all 1s ease',

            ":hover": {
                boxShadow: `0 0px 15px 0 var(--mui-palette-primary-main)`,
            },
            '@media (prefers-reduced-motion: reduce)': {
                animation: 'none',
            },
            '@media (max-width: 600px)': {
                width: '90%', 
            },
        }}
        direction="column"
        aria-label="Formulaire de contact pour Alexandre Hernandez"
        >
            <Typography id="contact-title" color="text.primary" variant="h2" component="h1" sx={{ textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>
                Contact
            </Typography>
            <Typography color="text.primary" variant="h4" component="h2" sx={{ textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>
                Actuellement à la recherche d'une alternance en développement web concepteur développeur d'application.
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <Box display="flex" flexDirection="column" gap={{xs: '1.5rem', md: '2.5rem'}} width="100%">
                    {formFields.map((field) => (
                        <Controller
                            key={field.name}
                            name={field.name as keyof FormData}
                            control={control}
                            render={({ field: { onChange, value, ref } }) => (
                                <TextField
                                    id={field.name}
                                    label={field.label}
                                    multiline={field.multiline}
                                    rows={field.rows}
                                    onChange={onChange}
                                    value={value}
                                    inputRef={ref}
                                    type={field.type || 'text'}
                                    error={!!errors[field.name as keyof FormData]}
                                    helperText={errors[field.name as keyof FormData]?.message}
                                    sx={{
                                        '& .MuiInputBase-input': {
                                            fontSize: '18px'
                                        }
                                    }}
                                    aria-invalid={!!errors[field.name as keyof FormData]}
                                    aria-describedby={`${field.name}-error`}
                                    required
                                />
                            )}
                        />
                    ))}
                    {status.type && (
                        <Alert severity={status.type} sx={{ mt: 2 }}>
                            {status.message}
                        </Alert>
                    )}
                    <Button
                        type="submit"
                        variant="contained"
                        endIcon={<SendIcon />}
                        sx={{ mt: 2 }}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
                    </Button>
                </Box>
            </form>
        </Stack>
    );
};

export default ContactForm;