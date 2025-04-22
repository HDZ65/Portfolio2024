// Titre principal : Hook personnalisé pour gérer le formulaire de contact

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// Schéma de validation avec Zod
const schema = z.object({
    name: z.string().min(1, "Le nom complet est requis"),
    email: z.string().email("Email invalide"),
    message: z.string().min(1, "Le message est requis"),
});

type FormData = z.infer<typeof schema>;

type StatusMessage = {
    type: 'success' | 'error' | 'info';
    content: string;
} | null;

export const useContactForm = () => {
    const [statusMessage, setStatusMessage] = useState<StatusMessage>(null);
    const { control, handleSubmit, formState: { errors, isSubmitting }, reset: formReset } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const onSubmit = async (data: FormData) => {
        setStatusMessage({ type: 'info', content: 'Envoi en cours...' });
        const startTime = performance.now();
        
        try {
            // Ajout d'un délai minimum de 500ms pour le chargement
            const [response] = await Promise.all([
                fetch('/api/send-email', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify(data)
                }),
                new Promise(resolve => setTimeout(resolve, 500)) // Délai minimum de 500ms
            ]);
            
            const endTime = performance.now();
            console.log(`Temps d'envoi : ${endTime - startTime} ms`);

            if (response.ok) {
                setStatusMessage({ type: 'success', content: 'Message envoyé avec succès !' });
                formReset();
            } else {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Erreur lors de l\'envoi du message');
            }
        } catch (error: any) {
            console.error('Erreur:', error);
            const errorMessage = error.message || 'Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer.';
            setStatusMessage({ type: 'error', content: errorMessage });
        }
    };

    const reset = () => {
        setStatusMessage(null);
        formReset(); // Réinitialise aussi le formulaire
    };

    return {
        control,
        errors,
        onSubmit: handleSubmit(onSubmit),
        isSubmitting,
        statusMessage,
        reset,
    };
};