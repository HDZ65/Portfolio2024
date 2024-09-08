"use client"

import React, { useState } from 'react';
import { Box, TextField, Button, Stack, Typography, Alert, keyframes } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import SendIcon from '@mui/icons-material/Send';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import emailjs from 'emailjs-com';

const schema = z.object({
    name: z.string().min(1, "Le nom complet est requis"),
    email: z.string().email("Email invalide"),
    message: z.string().min(1, "Le message est requis"),
});

type FormData = z.infer<typeof schema>;

const formFields = [
    { name: 'name', label: 'Nom / Prénom', multiline: false, rows: 1 },
    { name: 'email', label: 'Email', multiline: false, rows: 1 },
    { name: 'message', label: 'Message', multiline: true, rows: 4 },
];

const morphing = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const ContactForm: React.FC = () => {
    const [status, setStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' });
    const { control, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const onSubmit = async (data: FormData) => {
        try {
            const result = await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                data,
                process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
            );

            console.log(result.text);
            setStatus({ type: 'success', message: 'Message envoyé avec succès !' });
            reset();
        } catch (error) {
            console.error(error);
            setStatus({ type: 'error', message: 'Une erreur est survenue lors de l\'envoi du message.' });
        }
    };

    return (
 
            <Stack
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    backgroundSize: '400% 400%',
                    animation: `${morphing} 15s ease infinite`,
                    padding: {xs: '1.5rem', md: '2.5rem'},
                    gap: {xs: '1.5rem', md: '2.5rem'},
                    justifyContent: 'center',
                    width: '60%',
                    maxWidth: '600px', 
                    borderRadius: '30px',
                    backdropFilter: 'blur(30px)',
                    boxShadow: "0 0px 10px 0 rgba(2, 136, 209, 0.37)", // Ombre légère

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
                <Typography color="text.primary" variant="h2" component="h1" sx={{ textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>
                    Contact
                </Typography>
                <Typography color="text.primary" variant="h4" component="h2" sx={{ textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>
                    Actuellement à la recherche d'un alternance en développement web concepteur développeur d'application.
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <Box display="flex" flexDirection="column" gap={{xs: '1.5rem', md: '2.5rem'}} width="100%">
                        <Box display="flex" flexDirection="column" gap={{xs: '1.5rem', md: '2.5rem'}} width="100%">
                            {formFields.map((field) => (
                                <Controller
                                    key={field.name}
                                    name={field.name as "name" | "email" | "message"}
                                    control={control}
                                    render={({ field: { onChange, value } }) => (
                                        <>
                                            <TextField
                                                id={field.name}
                                                label={field.label}
                                                multiline={field.multiline}
                                                rows={field.rows}
                                                onChange={onChange}
                                                value={value}
                                                error={!!errors[field.name as keyof typeof errors]}
                                                helperText={errors[field.name as keyof typeof errors] ? String(errors[field.name as keyof typeof errors]?.message) : ""}
                                                sx={{
                                                    '& .MuiOutlinedInput-root': {
                                                        '&:hover fieldset': {
                                                        },
                                                    },
                                                    '& .MuiInputBase-input': {
                                                        fontSize: '18px'
                                                    }
                                                }}
                                                aria-invalid={!!errors[field.name as keyof typeof errors]}
                                                aria-describedby={`${field.name}-error`}
                                            />
                                        </>
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
                    </Box>
                </form>
            </Stack>
    );
};

export default ContactForm;