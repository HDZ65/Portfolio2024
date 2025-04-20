import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';
import { skills, Skill } from './data/skills';
import { cn } from "../../../lib/utils";

// --- Animation Configuration --- //

const GRID_CONFIG = {
  colWidth: 350, // Espace horizontal alloué par carte (inclut la marge)
  rowHeight: 250, // Hauteur suffisante pour une carte minimaliste
  // containerWidth et containerHeight seront définis dynamiquement plus bas
};

const RANDOM_CONFIG = {
  radiusMin: 1000, // Rayon réduit
  radiusRange: 400,  // Plage réduite
  rotateRange: 720   
};

const SPRING_CONFIG = {
  stiffness: 100,
  damping: 10,
  mass: 0.05,
  restDelta: 0.001
};

// Apparition pendant la première moitié de la courte animation
const APPEAR_CONFIG = {
  scale: [0, 0.5], 
  opacity: [0, 0.5], 
  title: [0, 0.5], // Timing pour opacity, y ET scale du titre
  titleScale: [0.8, 1] // Valeurs de début et fin pour l'échelle du titre
};

// --- Helpers --- //

function getRandomPosition() {
  const angle = Math.random() * Math.PI * 2;
  const radius = RANDOM_CONFIG.radiusMin + Math.random() * RANDOM_CONFIG.radiusRange; 
  return {
    x: Math.cos(angle) * radius,
    y: Math.sin(angle) * radius,
    rotate: (Math.random() - 0.5) * RANDOM_CONFIG.rotateRange 
  };
}

function getGridPosition(index: number, total: number) {
  const totalWidth = total * GRID_CONFIG.colWidth;
  // Calcul de la position x pour centrer la ligne de cartes
  const x = (index * GRID_CONFIG.colWidth) - (totalWidth / 2) + (GRID_CONFIG.colWidth / 2);
  return {
    x: x,
    y: 0, // Toutes les cartes alignées sur y=0
    rotate: 0
  };
}

// --- Composant Carte --- //

interface SkillCardProps {
  skill: Skill;
  index: number;
  total: number;
  springProgress: MotionValue<number>;
}

function SkillCard({ skill, index, total, springProgress }: SkillCardProps) {
  const random = getRandomPosition();
  const grid = getGridPosition(index, total);

  const x = useTransform(springProgress, [0, 1], [random.x, grid.x]);
  const y = useTransform(springProgress, [0, 1], [random.y, grid.y]);
  const rotate = useTransform(springProgress, [0, 1], [random.rotate, grid.rotate]);
  const scale = useTransform(springProgress, APPEAR_CONFIG.scale, [0.5, 1]);
  const opacity = useTransform(springProgress, APPEAR_CONFIG.opacity, [0, 1]);

  return (
    <motion.div
      style={{ position: 'absolute', left: '50%', x, y, rotate, scale, opacity }}
      className={cn(
        "z-10",
        "w-[300px] -ml-[150px]", // Centrage de la carte elle-même
        "rounded-lg p-5",
        "bg-transparent",
        "border border-neutral-700",
        "shadow-none",
        "transition-colors duration-300 ease-in-out",
        "hover:bg-neutral-800/40"
      )}
    >
      <div className="relative z-10 flex flex-col h-auto"> {/* Hauteur auto */}
        <h3 className="text-lg font-medium mb-2">{skill.name}</h3> {/* Typo simplifiée */}
        <p className="text-sm font-light flex-grow text-neutral-400">{skill.description}</p> {/* Typo simplifiée */}
      </div>
    </motion.div>
  );
}

// --- Composant Principal --- //

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    // Animation très courte, finie quand le haut a dépassé 0% de l'écran
    // (Dès l'entrée)
    offset: ["start end", "start 0%"]
  });

  const springProgress = useSpring(scrollYProgress, SPRING_CONFIG);

  return (
    <div 
      ref={containerRef} 
      className="relative w-full py-20 lg:py-32"
    >
      {/* Titre animé */}
      <motion.div
        style={{
          opacity: useTransform(springProgress, APPEAR_CONFIG.title, [0, 1]),
          y: useTransform(springProgress, APPEAR_CONFIG.title, [100, 0]),
          // Ajout de l'échelle
          scale: useTransform(springProgress, APPEAR_CONFIG.title, APPEAR_CONFIG.titleScale),
        }}
        className="text-center mb-16 lg:mb-24 z-20 relative"
      >
        <h2 className="text-5xl font-bold tracking-tight sm:text-7xl">
          Mes Compétences
        </h2>
        <p className="mt-6 text-lg">
          Technologies et outils que j'utilise au quotidien
        </p>
      </motion.div>

      {/* Conteneur pour la ligne des cartes */}
      <div
        className="relative mx-auto" // Centré horizontalement
        style={{
          // Largeur calculée pour contenir toutes les cartes et leurs marges
          width: `${skills.length * GRID_CONFIG.colWidth}px`,
          // Hauteur fixe pour une seule ligne
          height: `${GRID_CONFIG.rowHeight}px`,
        }}
      >
        {skills.map((skill, index) => (
          <SkillCard
            key={skill.name}
            skill={skill}
            index={index}
            total={skills.length} // Passer total
            springProgress={springProgress}
          />
        ))}
      </div>

    </div>
  );
}