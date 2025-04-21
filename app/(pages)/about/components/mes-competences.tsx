import { useRef, useState, useMemo } from 'react';
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';
import { skills, Skill } from './data/skills';
import { cn } from "../../../lib/utils";

// Types
interface GridPosition {
  x: number;
  y: number;
  rotate: number;
}

interface RandomPosition extends GridPosition {}

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
  colWidth: 240,
  rowHeight: 300,
  containerHeight: 400,
  gap: 16
} as const;

const RANDOM_CONFIG = {
  radiusMin: 800,
  radiusRange: 300,
  rotateRange: 360
} as const;

const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280
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
  const gap = screenWidth >= BREAKPOINTS.lg ? 40 : 
             screenWidth >= BREAKPOINTS.md ? 30 : 
             GRID_CONFIG.gap;

  const colWidth = screenWidth >= BREAKPOINTS.lg ? 280 : 
                  screenWidth >= BREAKPOINTS.md ? 260 : 
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
        "z-10 w-[240px] h-[300px] -ml-[120px]",
        "rounded-2xl p-4",
        "bg-gradient-to-br from-transparent to-transparent",
        "backdrop-blur-sm border border-white/[0.08]",
        "shadow-[0_0_50px_-12px_rgba(176,141,87,0.15)]",
        "transition-shadow duration-300",
        
        // Hover styles
        "group hover:shadow-[0_0_80px_-12px_rgba(176,141,87,0.4)]",
        
        // Responsive styles
        "sm:w-[260px] sm:h-[320px] sm:-ml-[130px] sm:p-5",
        "lg:w-[280px] lg:h-[350px] lg:-ml-[140px] lg:p-6"
      )}
      onHoverStart={onHover}
      onHoverEnd={onLeave}
      aria-label={`Carte de compétence : ${skill.name}`}
    >
      <div className="relative z-10 flex flex-col h-full">
        <motion.div 
          className={cn(
            // Base styles (mobile)
            "mb-4 flex h-12 w-12 items-center justify-center",
            "rounded-2xl bg-gradient-to-br from-[#B08D57]/30 to-[#B08D57]/10",
            "text-xl font-bold",
            
            // Responsive styles
            "sm:mb-5 sm:h-14 sm:w-14 sm:text-2xl",
            "lg:mb-6 lg:h-16 lg:w-16"
          )}
          aria-hidden="true"
        >
          {skill.name.charAt(0)}
        </motion.div>

        <h3 className={cn(
          "text-xl font-semibold mb-3 text-white",
          "sm:text-2xl sm:mb-4"
        )}>
          {skill.name}
        </h3>

        <p className={cn(
          "text-sm leading-relaxed text-white/90 flex-grow line-clamp-4",
          "sm:text-base"
        )}>
          {skill.description}
        </p>

        <div className={cn(
          "mt-3 flex items-center gap-2 text-xs text-white/70",
          "sm:mt-4 sm:text-sm"
        )}>
          <span className="h-[1px] w-8 sm:w-12 bg-white/20" />
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
      className="relative w-full h-screen flex flex-col justify-center"
      aria-label="Section des compétences"
    >
      <motion.div
        className="fixed inset-0 z-[-1]"
        style={{ backgroundColor }}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
        <motion.div
          style={{
            opacity: useTransform(springProgress, [0, 0.8], [0, 1]),
            y: useTransform(springProgress, [-10, 0], [100, 0]),
          }}
          className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-24 z-20 relative"
        >
          <h2 className={cn(
            "text-3xl font-light tracking-tight text-white relative antialiased",
            "sm:text-4xl md:text-5xl lg:text-7xl"
          )}>
            <motion.span className="relative text-white">
              Mes Compétences
            </motion.span>
          </h2>

          <div className={cn(
            "w-[240px] h-[1px] relative my-3 mx-auto",
            "sm:w-[280px] sm:my-4",
            "md:w-[350px] md:my-5",
            "lg:w-[400px] lg:my-6"
          )}>
            <div className="absolute top-[-2px] left-0 w-full h-[4px] bg-gradient-to-r from-transparent via-[#B08D57]/30 to-transparent clip-path-[path('M_0,2_Q_200,-15_400,2')] blur-[1px]" />
            <div className="absolute top-[-1px] left-0 w-full h-[0.5px] bg-gradient-to-r from-transparent via-[#F58D57]/20 to-transparent clip-path-[path('M_0,1_Q_200,-6_400,1')]" />
          </div>
          
          <p className={cn(
            "mt-3 text-xs text-[#86868b] font-light tracking-wide",
            "sm:mt-4 sm:text-sm",
            "md:mt-5 md:text-base",
            "lg:mt-6"
          )}>
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