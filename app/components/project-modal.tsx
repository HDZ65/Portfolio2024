'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { cn } from '../lib/utils'
import type { DraggableImage } from './draggable-images' // Importer le type

interface ProjectModalProps {
  image: DraggableImage // DraggableImage inclut maintenant description et projectUrl
  onClose: () => void
}

export function ProjectModal({ image, onClose }: ProjectModalProps) {
  if (!image) return null

  return (
    <AnimatePresence>
      {/* Backdrop */}
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-md z-[60] cursor-pointer"
      />

      {/* Modal Content Wrapper (pour le positionnement et le scroll si besoin) */}
      <div 
        className="fixed inset-0 z-[70] flex items-center justify-center p-4 cursor-pointer"
        onClick={onClose} 
      >
        <motion.div
          key="modal"
          initial={{ opacity: 0, scale: 0.90, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.90, y: 30, transition: { duration: 0.2, ease: "easeOut" } }}
          transition={{ type: "spring", stiffness: 400, damping: 35, mass: 0.8 }}
          className={cn(
            "relative w-full max-w-2xl max-h-[90vh] overflow-y-auto flex flex-col cursor-auto", // cursor-auto pour le contenu
            "bg-neutral-800/85 dark:bg-black/85 backdrop-blur-xl", // Légère augmentation de l'opacité du fond
            "rounded-2xl shadow-2xl border border-neutral-700/50 dark:border-neutral-600/50"
          )}
          onClick={(e) => e.stopPropagation()} // Empêche la fermeture si on clique DANS la modale
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 md:top-4 md:right-4 p-1.5 rounded-full text-neutral-200 hover:text-white bg-neutral-900/50 hover:bg-neutral-700/70 transition-all duration-150 ease-in-out z-10"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>

          {/* Image Container */}
          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-t-2xl flex-shrink-0">
            <img 
              src={image.src} 
              alt={image.alt} 
              className="w-full h-full object-cover" 
            />
          </div>

          {/* Text Content Area */}
          <div className="p-5 md:p-6 text-white flex flex-col flex-grow">
            <h3 className="text-xl md:text-2xl font-semibold text-neutral-100 mb-2">
              {image.name}
            </h3>
            <p className="text-sm md:text-base text-neutral-300 font-light leading-relaxed mb-4 flex-grow">
              {image.description || `Ceci est une description par défaut pour le projet "${image.name}". Ajoutez un champ 'description' à vos données pour un contenu personnalisé.`}
            </p>
            
            {/* Links Container */}
            <div className="mt-auto flex flex-col sm:flex-row sm:items-center sm:justify-between pt-2">
              {/* GitHub Link */}
              {image.githubUrl && image.githubUrl !== '#' && (
                <a
                  href={image.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "text-sm font-medium",
                    "text-neutral-400 hover:text-neutral-300 hover:underline", 
                    "focus:outline-none focus:ring-1 focus:ring-neutral-500 focus:ring-offset-2 focus:ring-offset-neutral-800 dark:focus:ring-offset-black rounded-sm inline-flex items-center gap-1.5"
                  )}
                >
                  Code source
                </a>
              )}

              {/* Project Link */}
              {image.projectUrl && ( 
                <a
                  href={image.projectUrl} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "text-sm font-medium",
                    "text-sky-400 hover:text-sky-300 hover:underline",
                    "focus:outline-none focus:ring-1 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-neutral-800 dark:focus:ring-offset-black rounded-sm inline-flex items-center gap-1.5"
                  )}
                >
                  Voir le projet →
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
} 