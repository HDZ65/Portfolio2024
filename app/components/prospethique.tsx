'use client'

import { Typography } from "@mui/material";
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Image from "next/image";
import { useRef } from 'react';
import React from "react";




export function Prospethique() {
    const imageSectionRef = useRef<HTMLDivElement>(null);
    const textSectionRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress: imageScrollProgress } = useScroll({
        target: imageSectionRef,
        offset: ["start end", "end end"],
        layoutEffect: false
    });

    const { scrollYProgress: textScrollProgress } = useScroll({
        target: textSectionRef,
        offset: ["start end", "end start"],
        layoutEffect: false
    });

    const springConfig = {
        stiffness: 100,
        damping: 20,
        mass: 0.5
    };

    const smoothImageScroll = useSpring(imageScrollProgress, springConfig);
    const smoothTextScroll = useSpring(textScrollProgress, springConfig);

    return (
        <div className="w-full h-[300dvh] relative">
            {/* Section image */}
            <div
                ref={imageSectionRef}
                className="w-full h-[100dvh] flex items-center justify-center sticky top-0 left-0 right-0 overflow-hidden"
                style={{
                    border: '1px solid transparent'
                }}
            >
                <div className="flex items-center justify-center h-full w-full">
                    <motion.div
                        style={{
                            width: useTransform(smoothImageScroll, [0, 1], ['90vw', '40vw']),
                            height: useTransform(smoothImageScroll, [0, 1], ['90vh', '40vh']),
                            scale: useTransform(smoothTextScroll, [0, 1], [1, 0.9]),
                            y: useTransform(smoothTextScroll, [0, 1], [0, -20]),
                            flexShrink: 0,
                        }}
                    >
                        <motion.img
                            src="/imageProjets/image.png"
                            alt="Image de présentation"
                            className="w-full h-full object-cover object-top rounded-xl"
                        />
                    </motion.div>
                </div>
            </div>

            {/* Section texte */}
            <div
                ref={textSectionRef}
                className="sticky top-0 left-0 right-0 min-h-[100vh] w-full flex items-center justify-between px-4 md:px-20 z-10"
                style={{
                    border: '1px solid transparent'
                }}
            >
                {/* Contenu Textuel 1 (Gauche) */}
                <motion.div
                    className="w-1/4 text-left"
                    style={{
                        opacity: useTransform(smoothTextScroll, [0, 0.3], [0, 1]),
                        y: useTransform(smoothTextScroll, [0, 1], [50, 0])
                    }}
                >
                    <Typography variant="h4" component="h3" color="text.primary" gutterBottom>
                        Prospethique : SaaS de prospection
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Découvrez Prospethique, l'outil SaaS conçu pour révolutionner votre prospection. Gérez vos prospects, envoyez des e-mails personnalisés et automatisez votre communication, le tout de manière éthique et efficace.
                    </Typography>
                </motion.div>


            </div>
            <div
                className=" min-h-[100vh]  w-full flex items-center justify-end px-4 md:px-20  z-10  "
            >

                {/* Contenu Textuel 2 (Droite) */}
                <motion.div
                    className="w-1/4 text-right"
                    style={{
                        opacity: useTransform(smoothTextScroll, [0, 0.3], [0, 1]),
                        y: useTransform(smoothTextScroll, [0, 1], [50, 0])
                    }}
                >
                    <Typography variant="h4" component="h3" color="text.primary" gutterBottom>
                        IA & Personnalisation Avancée
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Boostez votre présence sur LinkedIn avec notre générateur de posts IA. Utilisez des templates d'e-mails dynamiques pour une approche ciblée. Une UX optimisée pour les indépendants et TPE.
                    </Typography>
                </motion.div>
            </div>
        </div>
    );
}

 