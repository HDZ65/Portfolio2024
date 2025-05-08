'use client'

import { Typography, Button } from "@mui/material";
import { motion } from 'framer-motion';
import React from "react";
import { RocketLaunchIcon, SparklesIcon } from "@heroicons/react/24/outline";

export function ProspethiqueMobile() {
    return (
        <div className="w-full flex flex-col gap-8 px-4 py-8">
            {/* Section image */}
            <motion.div 
                className="w-full aspect-video overflow-hidden rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
            >
                <img
                    src="/imageProjets/image.png"
                    alt="Image de présentation"
                    className="w-full h-full object-cover object-top"
                />
            </motion.div>

            {/* Section texte */}
            <div className="flex flex-col gap-6">
                {/* Premier bloc de texte */}
                <motion.div
                    className="w-full"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex items-center gap-2 mb-3">
                        <RocketLaunchIcon className="w-5 h-5 text-orange-400" />
                        <Typography variant="h4" component="h3" color="text.primary">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 text-lg">
                                Prospethique : SaaS de prospection
                            </span>
                        </Typography>
                    </div>
                    <Typography variant="body1" color="text.secondary" className="leading-relaxed text-sm">
                        Découvrez Prospethique, l&apos;outil SaaS conçu pour révolutionner votre prospection. Gérez vos prospects, envoyez des e-mails personnalisés et automatisez votre communication, le tout de manière éthique et efficace.
                    </Typography>
                </motion.div>

                {/* Deuxième bloc de texte */}
                <motion.div
                    className="w-full"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex items-center gap-2 mb-3">
                        <SparklesIcon className="w-5 h-5 text-blue-400" />
                        <Typography variant="h4" component="h3" color="text.primary">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 text-lg">
                                IA & Personnalisation Avancée
                            </span>
                        </Typography>
                    </div>
                    <Typography variant="body1" color="text.secondary" className="leading-relaxed text-sm">
                        Boostez votre présence sur LinkedIn avec notre générateur de posts IA. Utilisez des templates d&apos;e-mails dynamiques pour une approche ciblée. Une UX optimisée pour les indépendants et TPE.
                    </Typography>
                </motion.div>
            </div>

            {/* Call to Action */}
            <div className="w-full flex flex-col gap-3">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5 }}
                >
                    <Button
                        variant="contained"
                        className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 py-2"
                    >
                        Voir la Démo
                    </Button>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5 }}
                >
                    <Button
                        variant="outlined"
                        className="w-full border-orange-500 text-orange-500 hover:border-orange-600 hover:text-orange-600 py-2"
                    >
                        GitHub
                    </Button>
                </motion.div>
            </div>
        </div>
    );
} 