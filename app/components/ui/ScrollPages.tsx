// Titre : Composant ScrollPages avec animation améliorée
"use client"
import { motion } from 'framer-motion';
import React from 'react';

/**
 * ScrollPages - Composant pour animer les transitions de pages
 * @param {Object} props - Les propriétés du composant
 * @param {React.ReactNode} props.children - Les éléments enfants à afficher
 */
export default function ScrollPages({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0,   }} // État initial : invisible et légèrement décalé vers le bas
      animate={{ opacity: 1,   }} // Animation d'entrée : apparaît et remonte à sa position
      exit={{ opacity: 0,   }} // Animation de sortie : disparaît et monte légèrement
      transition={{
        duration: 0.8, // Durée totale de l'animation
        ease: "easeInOut" // Fonction d'interpolation pour une animation fluide
      }}
      // Ajout d'attributs ARIA pour améliorer l'accessibilité
      aria-live="polite"
      aria-atomic="true"
      className=''
    >
      {children}
    </motion.div>
  )
}