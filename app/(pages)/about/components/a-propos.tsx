import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { Typography } from '@mui/material';
import { cn } from "../../../lib/utils";

// Définition du type pour une section
interface SectionData {
  title: string;
  subtitle: string;
  content: string;
}

const sections: SectionData[] = [
  {
    title: "Expérience",
    subtitle: "Développeur Full Stack passionné",
    content: "Avec une expérience diversifiée allant de Net Square à Elisabeth Coaching, j'ai développé des compétences solides en développement web. Mon parcours inclut la création d'APIs, la refonte d'interfaces, et le développement d'applications complètes avec Next.js et MongoDB.",
  },
  {
    title: "Expertise",
    subtitle: "Stack technique complète",
    content: "Maîtrisant React, Next.js, TypeScript, Node.js et les bases de données SQL/MongoDB, je crée des applications web modernes et performantes. Je m'appuie sur des outils comme Git, Trello et Figma pour mener à bien mes projets avec efficacité.",
  },
  {
    title: "Vision",
    subtitle: "Innovation et créativité",
    content: "Passionné par la création d'expériences utilisateur exceptionnelles, je combine mes compétences techniques avec une approche créative. Mon projet Prospethique illustre ma capacité à innover en intégrant l'IA pour simplifier la prospection commerciale.",
  }
];

// Composant enfant pour chaque section
interface SectionItemProps {
  section: SectionData;
  index: number;
}

function SectionItem({ section, index }: SectionItemProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  // 1. Suivre le scroll
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "end 20%"]
  });

  // 2. Lisser la progression
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 300, damping: 40 });

  // --- Transformations existantes pour l'effet global ---
  const scale = useTransform(smoothProgress, [0, 0.5, 1], [0.97, 1.01, 0.97]);
  const opacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0.7, 1, 1, 0.7]);
  const x = useTransform(smoothProgress, [0, 0.5, 1], [0, 10, 0]);
  const borderColor = useTransform(
    smoothProgress,
    [0, 0.4, 0.6, 1],
    ['#555555', '#ffffff', '#ffffff', '#555555']
  );
  const pointScale = useTransform(smoothProgress, [0, 0.5, 1], [1, 1.8, 1]);
  const pointShadow = useTransform(
    smoothProgress,
    [0, 0.4, 0.6, 1],
    ['none', '0 0 10px rgba(150,150,150,0.5)', '0 0 10px rgba(150,150,150,0.5)', 'none']
  );
  // --- Fin transformations existantes ---

  // === Nouvelles Transformations pour la couleur du texte ===
  const titleColor = useTransform(
    smoothProgress,
    [0, 0.4, 0.6, 1],
    ['rgba(255,255,255,0.7)', '#ffffff', '#ffffff', 'rgba(255,255,255,0.7)']
  );
  const subtitleColor = useTransform(
    smoothProgress,
    [0, 0.4, 0.6, 1],
    ['rgba(255,255,255,0.5)', 'rgba(255,255,255,0.8)', 'rgba(255,255,255,0.8)', 'rgba(255,255,255,0.5)']
  );
    const contentColor = useTransform(
    smoothProgress,
    [0, 0.3, 0.7, 1],
    ['rgba(255,255,255,0.6)', 'rgba(255,255,255,0.9)', 'rgba(255,255,255,0.9)', 'rgba(255,255,255,0.6)']
  );
  // =======================================================

  // Variants pour l'entrée initiale
  const entryVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 0.7, 
      transition: { duration: 0.5, delay: index * 0.05 } 
    }
  };

  return (
    <motion.div
      ref={sectionRef}
      className="relative"
      variants={entryVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      style={{ scale, opacity }} 
    >
      <div className="relative">
        <motion.div 
          className="relative pl-8 border-l-2"
          style={{ x, borderColor }} 
        >
          {/* Contenu texte avec couleur animée */}
          <motion.div> 
            {/* Titre */}
            <motion.div style={{ color: titleColor }}>
              <Typography 
                variant="h3" 
                className="text-2xl font-light mb-4" 
              >
                {section.title}
              </Typography>
            </motion.div>

            {/* Sous-titre */}
            <motion.div style={{ color: subtitleColor }}>
              <Typography 
                variant="subtitle1" 
                className="text-sm font-light mb-8" 
              >
                {section.subtitle}
              </Typography>
            </motion.div>

            {/* Contenu */}
            <motion.div style={{ color: contentColor }}>
              <Typography 
                variant="body1" 
                className="text-lg font-light leading-relaxed mb-6" 
              >
                {section.content}
              </Typography>
            </motion.div>
          </motion.div>

          {/* Point indicateur animé (ajusté) */}
          <motion.div
            className="absolute -left-[5px] top-[1px] w-2 h-2 rounded-full"
            style={{ 
              scale: pointScale, 
              backgroundColor: borderColor,
              boxShadow: pointShadow 
            }} 
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

// Composant principal
export default function APropos() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(textRef, { once: false, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 125%"], // Ajusté pour un déclenchement peut-être plus pertinent
  });

  // Utilisation de useSpring pour une animation plus fluide
  const springProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30, // Légèrement plus amorti
    restDelta: 0.001
  });

  // Transformations basées sur le spring pour le texte de gauche
  const opacityLeft = useTransform(springProgress, [0, 0.25], [0, 1]); // Apparition plus rapide
  const yLeft = useTransform(springProgress, [0, 0.25], [50, 0]);
  const scaleLeft = useTransform(springProgress, [0, 0.25], [0.95, 1]);

  const titleAnimation = {
    hidden: { y: 20, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1, // Garde le délai stagger
        duration: 0.8,
        ease: [0.33, 1, 0.68, 1]
      }
    })
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen flex flex-col justify-center py-16 overflow-hidden "
      // Ajout d'un fond explicite pour le contraste
      aria-label="Section À propos"
    >
      <div className="relative z-10 w-full max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr,2fr] gap-12 lg:gap-24">
          {/* Colonne Gauche - Texte Introduction */}
          <div ref={textRef} className="lg:sticky lg:top-32 lg:self-start h-fit">
            <motion.div
              style={{ opacity: opacityLeft, y: yLeft, scale: scaleLeft }}
              className="space-y-8"
            >
              {/* Titre accroche */}
              <motion.div
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                custom={0}
                variants={titleAnimation} // Utilisation des variants définis
              >
                <Typography 
                  component="h2" 
                  className="text-[clamp(1.2rem,3vw,1.5rem)] leading-tight tracking-tight mb-8 text-white/60"
                  // Utilisation de clamp pour la taille responsive
                >
                  {["JE CRÉE", "DES SOLUTIONS", "QUI FONT", "LA DIFFÉRENCE"].map((line, i) => (
                    <motion.span
                      key={line}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="block"
                    >
                      {line}
                    </motion.span>
                  ))}
                </Typography>
              </motion.div>

              {/* Titre principal */}
              <motion.div
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                custom={1} // Délai différent
                variants={titleAnimation}
              >
                <Typography 
                  variant="h1" 
                  className="text-[clamp(4rem,10vw,6rem)] leading-[0.9] tracking-tight font-light text-white"
                  // Utilisation de clamp pour la taille responsive
                >
                  {["Je code", "avec vision."].map((line, i) => (
                    <motion.span
                      key={line}
                      initial={{ opacity: 0, x: -50 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                      transition={{ 
                        duration: 0.8, 
                        delay: (i * 0.15) + 0.4, // Léger décalage supplémentaire
                        ease: [0.33, 1, 0.68, 1]
                      }}
                      className="block"
                    >
                      {line}
                    </motion.span>
                  ))}
                </Typography>
              </motion.div>
            </motion.div>
          </div>

          {/* Colonne Droite - Sections */}
          <div className="space-y-20 md:space-y-32"> {/* Espacement ajusté */}
            {sections.map((section, index) => (
              <SectionItem key={section.title} section={section} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* Gradient Décoratif (optionnel) */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/80 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />
    </section>
  );
} 