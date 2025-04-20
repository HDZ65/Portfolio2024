import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';
import { skills, Skill } from './data/skills';
import { cn } from "../../../lib/utils";
import React from 'react';
import { Box } from '@mui/material';

// --- Configuration des Animations --- //

const GRID_CONFIG = {
  colWidth: 280,
  rowHeight: 350,
  containerHeight: 400,
  gap: 40,
};


const RANDOM_CONFIG = {
  radiusMin: 1000,
  radiusRange: 400,
  rotateRange: 720   
};
 

// --- Fonctions Utilitaires --- //

/**
 * Génère une position aléatoire pour une carte
 * @returns {Object} Position aléatoire avec coordonnées x, y et rotation
 */
function getRandomPosition() {
  const angle = Math.random() * Math.PI * 2;
  const radius = RANDOM_CONFIG.radiusMin + Math.random() * RANDOM_CONFIG.radiusRange; 
  return {
    x: Math.cos(angle) * radius,
    y: Math.sin(angle) * radius,
    rotate: (Math.random() - 0.5) * RANDOM_CONFIG.rotateRange 
  };
}

/**
 * Calcule la position dans la grille pour une carte donnée
 * @param {number} index - Index de la carte
 * @returns {Object} Position dans la grille avec coordonnées x, y et rotation
 */
function getGridPosition(index: number) {
  return {
    x: (index - 2) * (GRID_CONFIG.colWidth + GRID_CONFIG.gap),
    y: 0,
    rotate: 0
  };
}

// --- Composant Carte de Compétence --- //

/**
 * Interface définissant les props du composant SkillCard
 * @interface SkillCardProps
 */
interface SkillCardProps {
  skill: Skill;
  index: number;
  total: number;
  springProgress: MotionValue<number>;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}

/**
 * Composant représentant une carte de compétence
 * @param {SkillCardProps} props - Propriétés de la carte
 * @returns {JSX.Element} Composant de carte de compétence
 */
function SkillCard({ skill, index, total, springProgress, isHovered, onHover, onLeave }: SkillCardProps) {
  const { random, grid } = React.useMemo(() => ({
    random: getRandomPosition(),
    grid: getGridPosition(index)
  }), [index]);

  const x = useTransform(springProgress, [0, 1], [random.x, grid.x]);
  const y = useTransform(springProgress, [0, 1], [random.y, grid.y]);
  const rotate = useTransform(springProgress, [0, 1], [random.rotate, grid.rotate]);
  const scale = useTransform(springProgress, [0, 0.3, 1], [0, 0.9, 1]);
  const opacity = useTransform(springProgress, [0, 0.3, 1], [0, 0.9, 1]);

  return (
    <motion.div
      style={{ position: 'absolute', left: '50%', x, y, rotate, scale, opacity }}
      className={cn(
        "z-10 w-[280px] h-[350px] -ml-[140px]",
        "group rounded-2xl p-6",
        "bg-gradient-to-br from-transparent to-transparent",
        "backdrop-blur-sm border border-white/[0.08]",
        "shadow-[0_0_50px_-12px_rgba(176,141,87,0.15)]",
        "hover:shadow-[0_0_80px_-12px_rgba(176,141,87,0.4)]",
        "transition-shadow duration-300"
      )}
      onHoverStart={onHover}
      onHoverEnd={onLeave}
    >
      <div className="relative z-10 flex flex-col h-full">
        <motion.div
          className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#B08D57]/30 to-[#B08D57]/10 text-2xl font-bold" 
        >
          {skill.name.charAt(0)}
        </motion.div>
        <h3 className="text-2xl font-semibold mb-4 text-white">{skill.name}</h3>
        <p className="text-base leading-relaxed text-white/90 flex-grow line-clamp-4">{skill.description}</p>
        <div className="mt-4 flex items-center gap-2 text-sm text-white/70">
          <span className="h-[1px] w-12 bg-white/20" />
          {index + 1} / {total}
        </div>
      </div>
      <div className="absolute inset-0 z-10 rounded-2xl bg-gradient-to-tr from-[#B08D57]/30 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
    </motion.div>
  );
}

// --- Composant Principal About --- //


export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 125%"],
    smooth: 1
  });

  const springProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    mass: 0.5
  });

  const backgroundColor = useTransform(
    springProgress,
    [0, 1],
    ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 1)"]
  );

  return (
    <div ref={containerRef} className="relative w-full h-screen py-40 ">
      <motion.div
        className="fixed inset-0 z-[-1]"
        style={{ backgroundColor }}
      />

      <div className="relative z-10">
        <motion.div
          style={{
            opacity: useTransform(springProgress, [0, 0.8], [0, 1]),
            y: useTransform(springProgress, [-10, 0], [100, 0]),
          }}
          className="text-center mb-16 lg:mb-24 z-20 relative"
        >
          <h2 className="text-5xl font-light tracking-tight sm:text-7xl text-white relative antialiased">
            <motion.span className="relative text-white">
              Mes Compétences
            </motion.span>
          </h2>

          <Box
            sx={{
              width: "400px",
              height: "1px",
              position: "relative",
              margin: "1.5rem auto",
              "&::before": {
                content: '""',
                position: "absolute",
                top: "-2px",
                left: "0",
                width: "100%",
                height: "4px",
                background: "linear-gradient(90deg, rgba(176, 141, 87, 0) 0%, rgba(176, 141, 87, 0.3) 20%, rgba(176, 141, 87, 0.4) 50%, rgba(176, 141, 87, 0.3) 80%, rgba(176, 141, 87, 0) 100%)",
                clipPath: "path('M 0,2 Q 200,-15 400,2')",
                filter: "blur(1px)",
              },
              "&::after": {
                content: '""',
                position: "absolute",
                top: "-1px",
                left: "0",
                width: "100%",
                height: "0.5px",
                background: "linear-gradient(90deg, transparent 0%, rgba(245, 141, 87, 0.2) 40%, rgba(245, 141, 87, 0.2) 60%, transparent 100%)",
                clipPath: "path('M 0,1 Q 200,-6 400,1')",
              },
            }}
          />
          
          <p className="mt-6 text-base text-[#86868b] font-light tracking-wide">
            Technologies et outils que j'utilise au quotidien
          </p>
        </motion.div>

        <div 
          className="relative mx-auto overflow-x-clip"
          style={{ height: `${GRID_CONFIG.containerHeight}px` }}
        >
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.name}
              skill={skill}
              index={index}
              total={skills.length}
              springProgress={springProgress}
              isHovered={hoveredCard === index}
              onHover={() => setHoveredCard(index)}
              onLeave={() => setHoveredCard(null)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}