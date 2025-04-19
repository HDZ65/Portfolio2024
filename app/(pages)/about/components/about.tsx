import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';
import { skills, Skill } from './data/skills';
import { cn } from "../../../lib/utils";

// --- Animation Configuration --- //

const GRID_CONFIG = {
  colWidth: 350, // Espace horizontal entre les centres des cartes
  rowHeight: 380, // Espace vertical entre le haut des cartes
  containerWidth: 700,
  containerHeight: 1000,
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

function getGridPosition(index: number) {
  const isLeft = index % 2 === 0;
  const row = Math.floor(index / 2);
  return {
    x: isLeft ? -GRID_CONFIG.colWidth / 2 : GRID_CONFIG.colWidth / 2,
    y: row * GRID_CONFIG.rowHeight,
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
  const grid = getGridPosition(index);

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
        "w-[300px] -ml-[150px]", 
        "group rounded-2xl p-8",
        "bg-gradient-to-br from-white/[0.08] to-transparent",
        "backdrop-blur-sm border border-white/[0.08]",
        "shadow-[0_0_50px_-12px_rgba(176,141,87,0.15)]",
        "hover:bg-gradient-to-br hover:from-white/[0.12] hover:to-transparent"
      )}
    >
      <div className="relative z-10 flex flex-col h-[250px]">
        <motion.div
          whileHover={{ scale: 1.1, rotate: [0, -10, 10, -10, 0], transition: { duration: 0.5 }}}
          className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#B08D57]/30 to-[#B08D57]/10 text-2xl font-bold" 
        >
          {skill.name.charAt(0)}
        </motion.div>
        <h3 className="text-2xl font-semibold mb-4">{skill.name}</h3>
        <p className="text-base leading-relaxed flex-grow">{skill.description}</p>
        <div className="mt-auto flex items-center gap-2 text-sm text-white/50">
          <span className="h-[1px] w-12 bg-white/20" />
          {index + 1} / {total}
        </div>
      </div>
      <div className="absolute inset-0 z-10 rounded-2xl bg-gradient-to-tr from-[#B08D57]/20 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
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
    offset: ["start end", "start -5%"]
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

      {/* Conteneur pour la grille des cartes */}
      <div 
        className="relative mx-auto"
        style={{
          width: `${GRID_CONFIG.containerWidth}px`,
          height: `${GRID_CONFIG.containerHeight}px`,
        }}
      >
        {skills.map((skill, index) => (
          <SkillCard
            key={skill.name}
            skill={skill}
            index={index}
            total={skills.length}
            springProgress={springProgress}
          />
        ))}
      </div>

    </div>
  );
}