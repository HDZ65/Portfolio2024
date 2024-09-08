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
    const { control, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const onSubmit = async (data: FormData) => {
        setStatusMessage({ type: 'info', content: 'Envoi en cours...' });
        const startTime = performance.now();
        
        try {
            const response = await fetch('https://formsubmit.co/8eb17c19225f5f6bdfca429ebd58b8c4', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(data)
            });
            
            const endTime = performance.now();
            console.log(`Temps d'envoi : ${endTime - startTime} ms`);

            if (response.ok) {
                setStatusMessage({ type: 'success', content: 'Message envoyé avec succès !' });
                reset();
            } else {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Erreur lors de l\'envoi du message');
            }
        } catch (error) {
            console.error('Erreur:', error);
            setStatusMessage({ type: 'error', content: 'Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer.' });
        }
    };

    return {
        control,
        errors,
        onSubmit: handleSubmit(onSubmit),
        isSubmitting,
        statusMessage,
    };
};