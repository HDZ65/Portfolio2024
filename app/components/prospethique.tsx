'use client'

import { Typography, Button } from "@mui/material";
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Image from "next/image";
import { useRef } from 'react';
import React from "react";
import { RocketLaunchIcon, SparklesIcon, ChartBarIcon, EnvelopeIcon, UserGroupIcon } from "@heroicons/react/24/outline";

export function Prospethique() {
    const imageSectionRef = useRef<HTMLDivElement>(null);
    const textSectionRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress: containerScrollProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
        layoutEffect: false
    });

    const { scrollYProgress: imageScrollProgress } = useScroll({
        target: imageSectionRef,
        offset: ["start end", "end end"],
        layoutEffect: false
    });

    const springConfig = {
        stiffness: 100,
        damping: 20,
        mass: 0.5
    };

    const smoothContainerScroll = useSpring(containerScrollProgress, springConfig);
    const smoothImageScroll = useSpring(imageScrollProgress, springConfig);

    // Animations décalées simples
    const leftTextAnimation = {
        y: useTransform(smoothContainerScroll, [0, 0.4], [1000, 0])
    };

    const rightTextAnimation = {
        y: useTransform(smoothContainerScroll, [0.5, 0.8], [1000, 0])
    };

    const features = [
        {
            icon: <ChartBarIcon className="w-6 h-6 text-indigo-400" />,
            title: "Analytics Avancés",
            description: "Suivez vos performances et optimisez vos campagnes en temps réel"
        },
        {
            icon: <EnvelopeIcon className="w-6 h-6 text-green-400" />,
            title: "Emails Intelligents",
            description: "Templates personnalisables avec IA pour maximiser vos conversions"
        },
        {
            icon: <UserGroupIcon className="w-6 h-6 text-purple-400" />,
            title: "Gestion des Prospects",
            description: "Organisation intuitive de vos leads et suivi automatisé"
        }
    ];

    return (
        <div ref={containerRef} className="w-full h-[300dvh] relative">
            {/* Section image */}
            <div
                ref={imageSectionRef}
                className="w-full h-[100dvh] flex items-center justify-center sticky top-0 left-0 right-0 overflow-hidden"
            >
                <div className="flex items-center justify-center h-full w-full ">
                    <motion.div
                        style={{
                            width: useTransform(smoothImageScroll, [0, 1], ['90vw', '40vw']),
                            height: useTransform(smoothImageScroll, [0, 1], ['90vh', '40vh']),
                            scale: useTransform(smoothContainerScroll, [0, 1], [1, 0.9]),
                            y: useTransform(smoothContainerScroll, [0, 1], [0, -20]),
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

            {/* Section texte enrichie */}
            <div className="sticky top-0 left-0 right-0 min-h-[100vh] w-full flex flex-col items-center justify-center px-4 md:px-20 z-10 ">
                <div className="flex w-full justify-between items-center ">
                    {/* Contenu Textuel 1 (Gauche) */}
                    <motion.div
                        className="w-[25%] text-left max-w-[450px] xl:max-w-[550px] "
                        style={leftTextAnimation}
                    >
                        <div className="flex items-center gap-3 mb-4 ">
                            <RocketLaunchIcon className="w-6 h-6 xl:w-8 xl:h-8 text-orange-400" />
                            <Typography variant="h4" component="h3" color="text.primary" gutterBottom>
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 text-2xl xl:text-3xl">
                                    Prospethique : SaaS de prospection
                                </span>
                            </Typography>
                        </div>
                        <Typography variant="body1" color="text.secondary" className="leading-relaxed text-base mb-4  ">
                            Découvrez Prospethique, l'outil SaaS conçu pour révolutionner votre prospection. Gérez vos prospects, envoyez des e-mails personnalisés et automatisez votre communication, le tout de manière éthique et efficace.
                        </Typography>
                    </motion.div>

                    {/* Contenu Textuel 2 (Droite) */}
                    <motion.div
                        className="w-[25%] text-left max-w-[450px] xl:max-w-[550px]"
                        style={rightTextAnimation}
                    >
                        <div className="flex items-center justify-start gap-3 mb-4  ">
                            <Typography variant="h4" component="h3" color="text.primary" gutterBottom>
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 text-2xl xl:text-3xl">
                                    IA & Personnalisation Avancée
                                </span>
                            </Typography>
                            <SparklesIcon className="w-6 h-6 xl:w-8 xl:h-8 text-blue-400" />
                        </div>
                        <Typography variant="body1" color="text.secondary" className="leading-relaxed text-base ">
                            Boostez votre présence sur LinkedIn avec notre générateur de posts IA. Utilisez des templates d'e-mails dynamiques pour une approche ciblée. Une UX optimisée pour les indépendants et TPE.
                        </Typography>
                    </motion.div>

                </div>
            </div>
            <div id="callToAction" className="sticky bottom-0 left-0 right-0 h-[100vh] m-auto gap-4 mt-4 max-w-[450px] xl:max-w-[550px] grid grid-cols-1 grid-rows-3">
                <div className="flex flex-col items-center gap-4  ">
                </div>
                <div className="flex flex-col items-center gap-4  ">
                </div>
                <div className="flex  items-center justify-center gap-4 w-full">
                    <Button
                        variant="contained"
                        className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600"
                    >
                        Voir la Démo
                    </Button>
                    <Button
                        variant="outlined"
                        className="border-orange-500 text-orange-500 hover:border-orange-600 hover:text-orange-600"
                    >
                        GitHub
                    </Button>
                </div>
            </div>
        </div>
    );
}

