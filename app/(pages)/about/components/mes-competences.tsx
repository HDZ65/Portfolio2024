import { useRef, useState, useMemo } from 'react';
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';
import { skills, Skill } from './data/skills';
import { cn } from "../../../lib/utils";
import { Typography } from '@mui/material';

// Types
interface GridPosition {
  x: number;
  y: number;
  rotate: number;
}

interface RandomPosition extends GridPosition { }

interface SkillCardProps {
  skill: Skill;
  index: number;
  total: number;
  springProgress: MotionValue<number>;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}

// Constants
const GRID_CONFIG = {
  colWidth: 180,
  rowHeight: 220,
  containerHeight: 280,
  gap: 10
} as const;

const RANDOM_CONFIG = {
  radiusMin: 800,
  radiusRange: 300,
  rotateRange: 360
} as const;

const BREAKPOINTS = {
  xs: 480,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
} as const;

// Utils
function getRandomPosition(): RandomPosition {
  const angle = Math.random() * Math.PI * 2;
  const radius = RANDOM_CONFIG.radiusMin + Math.random() * RANDOM_CONFIG.radiusRange;
  return {
    x: Math.cos(angle) * radius,
    y: Math.sin(angle) * radius,
    rotate: (Math.random() - 0.5) * RANDOM_CONFIG.rotateRange
  };
}

function getGridPosition(index: number): GridPosition {
  if (typeof window === 'undefined') return { x: 0, y: 0, rotate: 0 };

  const screenWidth = window.innerWidth;
  
  const gap = screenWidth >= BREAKPOINTS['2xl'] ? 32 :
    screenWidth >= BREAKPOINTS.xl ? 28 :
    screenWidth >= BREAKPOINTS.lg ? 24 :
    screenWidth >= BREAKPOINTS.md ? 20 :
    screenWidth >= BREAKPOINTS.sm ? 16 :
    GRID_CONFIG.gap;

  const colWidth = screenWidth >= BREAKPOINTS['2xl'] ? 260 :
    screenWidth >= BREAKPOINTS.xl ? 240 :
    screenWidth >= BREAKPOINTS.lg ? 220 :
    screenWidth >= BREAKPOINTS.md ? 200 :
    screenWidth >= BREAKPOINTS.sm ? 190 :
    GRID_CONFIG.colWidth;

  return {
    x: (index - 2) * (colWidth + gap),
    y: 0,
    rotate: 0
  };
}

// Components
function SkillCard({ skill, index, total, springProgress, isHovered, onHover, onLeave }: SkillCardProps) {
  const { random, grid } = useMemo(() => ({
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
        // Base styles (mobile)
        "z-10 w-[180px] h-[220px] -ml-[90px]",
        "rounded-xl p-4",
        "bg-gradient-to-br from-transparent to-transparent",
        "backdrop-blur-sm border border-white/[0.08]",
        "shadow-[0_0_50px_-12px_rgba(176,141,87,0.15)]",
        "transition-shadow duration-300",

        // Hover styles
        "group hover:shadow-[0_0_80px_-12px_rgba(176,141,87,0.4)]",

        // Responsive styles
        "xs:w-[190px] xs:h-[230px] xs:-ml-[95px] xs:p-4",
        "sm:w-[200px] sm:h-[240px] sm:-ml-[100px] sm:p-4",
        "md:w-[210px] md:h-[250px] md:-ml-[105px] md:p-5",
        "lg:w-[220px] lg:h-[260px] lg:-ml-[110px] lg:p-5",
        "xl:w-[230px] xl:h-[270px] xl:-ml-[115px] xl:p-5",
        "2xl:w-[240px] 2xl:h-[280px] 2xl:-ml-[120px] 2xl:p-5"
      )}
      onHoverStart={onHover}
      onHoverEnd={onLeave}
      aria-label={`Carte de compétence : ${skill.name}`}
    >
      <div className="relative z-10 flex flex-col h-full gap-2">
         

        <Typography variant="h5" className="text-white "  >
          {skill.name}
        </Typography>

        <Typography variant="body2" className="text-white/70 flex-grow line-clamp-4 font-light "  >
          {skill.description}
        </Typography>

        <div className={cn(
          "mt-2 flex items-center gap-2 text-xs text-white/70",
          "xs:mt-2",
          "sm:mt-2",
          "md:mt-3",
          "lg:mt-3",
          "xl:mt-3",
          "2xl:mt-3"
        )}>
          <span className="h-[1px] w-4 xs:w-6 sm:w-8 md:w-10 lg:w-12 xl:w-14 2xl:w-16 bg-white/20" />
          {index + 1} / {total}
        </div>
      </div>

      <div
        className="absolute inset-0 z-10 rounded-2xl bg-gradient-to-tr from-[#B08D57]/30 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100"
        aria-hidden="true"
      />
    </motion.div>
  );
}

export default function MesCompetences() {
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
    <section
      ref={containerRef}
      className="relative w-full h-screen flex flex-col justify-center md:py-16"
      aria-label="Section des compétences"
    >
      <motion.div
        className="fixed inset-0 z-[-1]"
        style={{ backgroundColor }}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full  px-4 sm:px-6 lg:px-8">
        <motion.div
          style={{
            opacity: useTransform(springProgress, [0, 0.8], [0, 1]),
            y: useTransform(springProgress, [-10, 0], [100, 0]),
          }}
          className="flex flex-col items-center justify-center gap-4 text-center  z-20 relative"
        >
          <Typography variant="h1"   >
            <motion.span className="relative text-white">
              Mes Compétences
            </motion.span>
          </Typography>

          {/* Ligne de séparation */}
          <div className={cn(
            "w-[40rem] relative mx-auto")}>
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-[#B08D57]/100 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-[#B08D57]/80 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-[#B08D57]/70 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-[#B08D57]/60 to-transparent h-px w-1/4" />
          </div>

          <p className={cn(
            "mt-3 text-xs lg:text-base xl:text-lg text-[#86868b] font-light tracking-wide")}>
            Technologies et outils que j'utilise au quotidien
          </p>
        </motion.div>

        <div className={cn(
          "relative mx-auto w-full",
          "h-[300px]",
          "sm:h-[350px]",
          "md:h-[400px]",
          "lg:h-[450px]"
        )}>
          <div className="relative w-full h-full flex items-center justify-center">
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
    </section>
  );
}