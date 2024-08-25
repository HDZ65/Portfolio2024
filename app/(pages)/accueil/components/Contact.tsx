"use client"

import { Box, Stack, Typography, TextField, Button } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import ButtonLink from "@/app/components/Button/ButtonLink";
import SendIcon from '@mui/icons-material/Send'; // Import de l'icône


// Schéma de validation avec Zod
const schema = z.object({
    name: z.string().min(1, "Le nom complet est requis"),
    email: z.string().email("Email invalide"),
    message: z.string().min(1, "Le message est requis"),
});

export default function Contact() {
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(schema),
    });

    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (

        <Stack sx={{ backgroundColor: "var(--mui-palette-text-primary)" }} direction="column" gap="1.6rem" justifyContent="center" width="100%" component="section"  borderRadius="30px">

            <Typography color="var(--mui-palette-background-paper)" variant="h2">
                Contact
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box display="flex" flexDirection="column" gap="1.6rem" width="100%">
                    <Box color="var(--mui-palette-background-paper)" display="flex" flexDirection="column" gap="1.6rem" width="100%">
                        <Controller
                            name="name"
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Nom / Prénom"
                                    error={!!errors.name}
                                    helperText={errors.name ? String(errors.name.message) : ""}
                                    InputProps={{
                                        style: { color: 'var(--mui-palette-background-paper)', fontSize: '18px' } // Texte en noir et 18px
                                    }}
                                />
                            )}
                        />
                        <Controller
                            name="email"
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Email"
                                    error={!!errors.email}
                                    helperText={errors.email ? String(errors.email.message) : ""}
                                    InputProps={{
                                        style: { color: 'var(--mui-palette-background-paper)', fontSize: '18px' } // Texte en noir et 18px
                                    }}
                                />
                            )}
                        />
                        <Controller
                            name="message"
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Message"
                                    multiline
                                    rows={4}
                                    error={!!errors.message}
                                    helperText={errors.message ? String(errors.message.message) : ""}
                                    InputProps={{
                                        style: { color: 'black', fontSize: '18px' } // Texte en noir et 18px
                                    }}
                                />
                            )}
                        />
                        <ButtonLink to="/" label="Envoyer" variant="contained" icon={<SendIcon />} /> {/* Ajout de l'icône */}
                    </Box>
                </Box>
            </form>
        </Stack >

    );
}