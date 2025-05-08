'use client'

import { useRef, useMemo, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, useSpring, useMotionValue, MotionValue, AnimatePresence } from 'framer-motion'
import { cn } from '../lib/utils'
import { ProjectModal } from './project-modal'

export interface DraggableImage {
  id: string
  src: string
  alt: string
  name: string;
  description?: string;
  projectUrl?: string;
  githubUrl?: string;
}

interface DraggableImagesProps {
  images: DraggableImage[]
}

const IMAGE_ASPECT_RATIO = 9 / 16;

// Config pour l'effet de survol (tilt)
const HOVER_SPRING_CONFIG = {
  stiffness: 150,
  damping: 20,
  mass: 0.5,
};

// Config pour l'animation d'entrée basée sur le scroll (comme mes-competences.tsx)
const ENTRY_SCROLL_SPRING_CONFIG = {
  stiffness: 180,
  damping: 40,
  mass: 0.2,
};

// Aligné sur mes-competences.tsx
// const RANDOM_CONFIG = {
//   radiusMin: 800,
//   radiusRange: 300,
//   rotateRange: 360,
//   finalRotateZRange: 20, // +/- 10 degrés pour la rotation finale
//   sizeFactorMin: 0.8,
//   sizeFactorRange: 0.4, // Facteur de taille entre 0.8 et 1.2
// };

// function getRandomPosition() {
//   const angle = Math.random() * Math.PI * 2;
//   const radius = RANDOM_CONFIG.radiusMin + Math.random() * RANDOM_CONFIG.radiusRange;
//   return {
//     x: Math.cos(angle) * radius,
//     y: Math.sin(angle) * radius,
//     rotate: (Math.random() - 0.5) * RANDOM_CONFIG.rotateRange, // Rotation initiale pour l'animation d'entrée
//     finalRotateZ: (Math.random() - 0.5) * RANDOM_CONFIG.finalRotateZRange, // Rotation finale légère
//     sizeFactor: RANDOM_CONFIG.sizeFactorMin + Math.random() * RANDOM_CONFIG.sizeFactorRange, // Facteur de taille aléatoire
//   };
// }

const ENTRY_ANIMATION_CONFIG = {
  initialYOffset: 450,        // Les images commencent 450px en dessous de leur position finale
  initialXSpread: 250,         // Dispersion horizontale initiale maximale (+/- 125px)
  initialRotateDegrees: 5,   // Rotation initiale aléatoire maximale (+/- 5 degrés)
  finalRotateZDegrees: 0,    // Rotation finale mise à 0 pour des images droites
};

function getEntryAnimationProperties() {
  return {
    initialY: ENTRY_ANIMATION_CONFIG.initialYOffset,
    initialX: (Math.random() - 0.5) * ENTRY_ANIMATION_CONFIG.initialXSpread,
    initialRotate: (Math.random() - 0.5) * ENTRY_ANIMATION_CONFIG.initialRotateDegrees,
    finalRotateZ: (Math.random() - 0.5) * ENTRY_ANIMATION_CONFIG.finalRotateZDegrees,
  };
}

interface ImageCardProps {
  image: DraggableImage;
  springProgress: MotionValue<number>; // Reçoit la progression du scroll
  index: number; // Index de l'image pour l'animation en cascade
  totalImages: number; // Nombre total d'images pour calculer le décalage
  onClick: () => void; // Ajout de la prop onClick
}

// Fonction pour obtenir les dimensions responsives
const BREAKPOINTS = {
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1920, // Nouveau breakpoint pour les écrans plus larges
};

function getResponsiveImageDimensions(): { width: number; height: number } {
  let width = 580; // Taille par défaut pour les petits écrans

  if (typeof window !== 'undefined') {
    const screenWidth = window.innerWidth;
    if (screenWidth >= BREAKPOINTS['2xl']) { // Nouveau
      width = 550; // Taille pour les très grands écrans (ex: 27 pouces et plus)
    } else if (screenWidth >= BREAKPOINTS.xl) {
      width = 480; // Taille ajustée pour les écrans type 24 pouces (anciennement 550px)
    } else if (screenWidth >= BREAKPOINTS.lg) {
      width = 500;
    } else if (screenWidth >= BREAKPOINTS.md) {
      width = 440;
    }
  }
  return { width, height: Math.round(width * IMAGE_ASPECT_RATIO) }; // Arrondir la hauteur
}

function ImageCard({ image, springProgress, index, totalImages, onClick }: ImageCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  
  // Rétablir useMotionValue et useSpring pour une animation de suivi
  const tooltipX_motion = useMotionValue(0);
  const tooltipY_motion = useMotionValue(0);

  // Configuration de ressort pour un suivi très réactif et direct
  const SPRING_TOOLTIP_CONFIG = { 
    stiffness: 800, 
    damping: 60, 
    mass: 0.2 
  };
  const smoothTooltipX = useSpring(tooltipX_motion, SPRING_TOOLTIP_CONFIG);
  const smoothTooltipY = useSpring(tooltipY_motion, SPRING_TOOLTIP_CONFIG);

  const rotateX_hover = useSpring(useMotionValue(0), HOVER_SPRING_CONFIG);
  const rotateY_hover = useSpring(useMotionValue(0), HOVER_SPRING_CONFIG);
  const scale_hover = useSpring(1, HOVER_SPRING_CONFIG);

  const entryProps = useMemo(() => getEntryAnimationProperties(), []);

  // Calcul pour l'animation en cascade
  const ANIMATION_RUN_PERCENTAGE = 0.6; // Chaque carte anime sur 60% de la progression du scroll
  let staggerDelay = 0;
  if (totalImages > 1) {
    staggerDelay = (1 - ANIMATION_RUN_PERCENTAGE) / (totalImages - 1);
  }
  staggerDelay = Math.max(0, staggerDelay); // Assurer que le délai n'est pas négatif

  const cardAnimStart = index * staggerDelay;
  const cardAnimEnd = cardAnimStart + ANIMATION_RUN_PERCENTAGE;

  // Progression locale pour cette carte, mappée depuis la progression globale du scroll
  const localSpringProgress = useTransform(springProgress, [cardAnimStart, cardAnimEnd], [0, 1]);

  // Transformations pour l'animation d'entrée, pilotées par localSpringProgress
  const x_entry = useTransform(localSpringProgress, [0, 1], [entryProps.initialX, 0]);
  const y_entry = useTransform(localSpringProgress, [0, 1], [entryProps.initialY, 0]); // Animation de montée
  const rotate_entry = useTransform(localSpringProgress, [0, 1], [entryProps.initialRotate, entryProps.finalRotateZ]);
  const scale_entry = useTransform(localSpringProgress, [0, 0.6, 1], [0.5, 1.1, 1]);
  const opacity_entry = useTransform(localSpringProgress, [0, 0.3], [0, 1]); // Opacité finale à 1

  const [currentDimensions, setCurrentDimensions] = useState(() => getResponsiveImageDimensions());

  useEffect(() => {
    const handleResize = () => {
      setCurrentDimensions(getResponsiveImageDimensions());
    };
    // S'assurer que la fonction est appelée après que window soit défini
    if (typeof window !== 'undefined') {
        handleResize(); // Appel initial pour définir la bonne taille
        window.addEventListener('resize', handleResize);
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []); // Le tableau de dépendances vide assure que cela s'exécute une fois au montage et se nettoie au démontage

  function handleMouse(e: React.MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;
    const tiltX = (offsetY / (rect.height / 2)) * -8;
    const tiltY = (offsetX / (rect.width / 2)) * 8;
    rotateX_hover.set(tiltX);
    rotateY_hover.set(tiltY);

    // Met à jour les MotionValues pour le tooltip avec les décalages souhaités
    tooltipX_motion.set(e.clientX - rect.left + 10);     // Axe X est bon
    tooltipY_motion.set(e.clientY - rect.top - 280);     // Monté encore plus haut
  }

  function handleMouseEnter(e: React.MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    
    // Définir la position initiale du tooltip dès l'entrée de la souris
    tooltipX_motion.set(e.clientX - rect.left + 10);    
    tooltipY_motion.set(e.clientY - rect.top - 280); 

    scale_hover.set(1.05);
    setIsTooltipVisible(true);
  }

  function handleMouseLeave() {
    scale_hover.set(1);
    rotateX_hover.set(0);
    rotateY_hover.set(0);
    setIsTooltipVisible(false);
  }

  return (
    <motion.div
      key={image.id}
      style={{
        width: currentDimensions.width,
        height: currentDimensions.height,
        x: x_entry,
        y: y_entry,
        rotate: rotate_entry,
        scale: scale_entry,
        opacity: opacity_entry,
      }}
      className="relative cursor-pointer"
      onClick={onClick}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouse}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="group w-full h-full [perspective:800px]"
      >
        <motion.div
          style={{
            width: '100%',
            height: '100%',
            rotateX: rotateX_hover,
            rotateY: rotateY_hover,
            scale: scale_hover,
          }}
          className={cn(
            "w-full h-full [transform-style:preserve-3d] rounded-lg overflow-hidden",
            "border border-white/[0.08] shadow-2xl",
            "relative",
            "after:absolute after:inset-0 after:bg-gradient-to-r after:from-transparent after:via-white/10 after:to-transparent",
            "after:-translate-x-full group-hover:after:translate-x-full after:transition-transform after:duration-1000"
          )}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover pointer-events-none"
          />
        </motion.div>
      </div>

      <AnimatePresence>
        {isTooltipVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92, transition: { duration: 0.15, ease: "easeOut" } }}
            transition={{ type: "spring", stiffness: 500, damping: 30, mass: 0.5 }}
            style={{
              position: 'absolute',
              x: smoothTooltipX,
              y: smoothTooltipY,
            }}
            className={cn(
              "px-3.5 py-2.5 min-w-max whitespace-nowrap",
              "bg-neutral-800/70 dark:bg-black/70 backdrop-blur-lg",
              "text-xs rounded-xl shadow-lg",
              "pointer-events-none z-50"
            )}
          >
            <p className="font-semibold text-neutral-100">{image.name}</p>
            <p className="text-neutral-300">Cliquez pour en savoir plus</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function DraggableImages({ images }: DraggableImagesProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<DraggableImage | null>(null);

  const openModal = (image: DraggableImage) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 125%"],
  });

  const springProgress = useSpring(scrollYProgress, ENTRY_SCROLL_SPRING_CONFIG);

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <section
      id="projets"
      ref={containerRef}
      className="relative w-full min-h-screen flex flex-col justify-center items-center py-16 md:py-24"
    >
      {/* Titre inspiré de mes-competences.tsx */}
      <motion.div
        style={{
          opacity: useTransform(springProgress, [0, 0.5], [0, 1]), // Apparition plus rapide
          y: useTransform(springProgress, [0, 0.5], [50, 0]),      // Montée moins importante
        }}
        className="flex flex-col items-center justify-center gap-3 text-center mb-12 md:mb-16"
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
          <span className="relative">
            Mes Projets
          </span>
        </h2>
        <div className={cn("w-full max-w-md relative mx-auto")}> {/* Ajustement de la largeur max */}
          <div className="absolute inset-x-10 sm:inset-x-16 top-0 bg-gradient-to-r from-transparent via-[#B08D57]/80 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-10 sm:inset-x-16 top-0 bg-gradient-to-r from-transparent via-[#B08D57]/70 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-20 sm:inset-x-28 top-0 bg-gradient-to-r from-transparent via-[#B08D57]/60 to-transparent h-[3px] w-1/2 blur-sm" /> {/* Ajustement pour H2 */}
          <div className="absolute inset-x-20 sm:inset-x-28 top-0 bg-gradient-to-r from-transparent via-[#B08D57]/50 to-transparent h-px w-1/2" /> {/* Ajustement pour H2 */}
        </div>
        <p className={cn(
          "mt-2 text-sm sm:text-base text-gray-600 dark:text-gray-400 font-light tracking-wide max-w-xl"
        )}>
          Découvrez une sélection de mes travaux et explorations dans le développement web.
        </p>
      </motion.div>

      {/* Ce div interne est pour le flex layout, sa hauteur est déterminée par le contenu */}
      <div
        className="relative w-full h-full flex flex-wrap justify-around items-center gap-8 p-6"
      >
        {images.map((image, idx) => (
          <ImageCard 
            key={image.id} 
            image={image} 
            springProgress={springProgress} 
            index={idx}
            totalImages={images.length}
            onClick={() => openModal(image)}
          /> 
        ))}
      </div>

      {selectedImage && (
        <ProjectModal image={selectedImage} onClose={closeModal} />
      )}
    </section>
  );
} 