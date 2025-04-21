import { useRef, useState, useMemo } from 'react';
import { motion, useScroll, useTransform, useSpring, MotionValue, useMotionValue } from 'framer-motion';
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

const SPRING_CONFIG = {
  damping: 20,
  stiffness: 150,
  mass: 1.2,
};

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

function TiltedSkillCard({ skill, index, total, springProgress, isHovered, onHover, onLeave }: SkillCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useSpring(useMotionValue(0), SPRING_CONFIG);
  const rotateY = useSpring(useMotionValue(0), SPRING_CONFIG);
  const scale = useSpring(1, SPRING_CONFIG);
  const [lastY, setLastY] = useState(0);

  const { random, grid } = useMemo(() => ({
    random: getRandomPosition(),
    grid: getGridPosition(index)
  }), [index]);

  const gridX = useTransform(springProgress, [0, 1], [random.x, grid.x]);
  const gridY = useTransform(springProgress, [0, 1], [random.y, grid.y]);
  const gridRotate = useTransform(springProgress, [0, 1], [random.rotate, grid.rotate]);
  const gridScale = useTransform(springProgress, [0, 0.3, 1], [0, 0.9, 1]);
  const gridOpacity = useTransform(springProgress, [0, 0.3, 1], [0, 0.9, 1]);

  function handleMouse(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -8;
    const rotationY = (offsetX / (rect.width / 2)) * 8;

    rotateX.set(rotationX);
    rotateY.set(rotationY);

    const velocityY = offsetY - lastY;
    setLastY(offsetY);
  }

  function handleMouseEnter() {
    scale.set(1.05);
    onHover();
  }

  function handleMouseLeave() {
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
    onLeave();
  }

  return (
    <motion.div
      style={{ 
        position: 'absolute', 
        left: '50%', 
        x: gridX, 
        y: gridY, 
        rotate: gridRotate, 
        scale: gridScale, 
        opacity: gridOpacity,
      }}
      className="relative"
    >
      <div
        ref={ref}
        className={cn(
          "relative [perspective:800px]",
          "w-[180px] h-[220px] -ml-[90px]",
          "xs:w-[190px] xs:h-[230px] xs:-ml-[95px]",
          "sm:w-[200px] sm:h-[240px] sm:-ml-[100px]",
          "md:w-[210px] md:h-[250px] md:-ml-[105px]",
          "lg:w-[220px] lg:h-[260px] lg:-ml-[110px]",
          "xl:w-[230px] xl:h-[270px] xl:-ml-[115px]",
          "2xl:w-[240px] 2xl:h-[280px] 2xl:-ml-[120px]"
        )}
        onMouseMove={handleMouse}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          className={cn(
            "relative [transform-style:preserve-3d] w-full h-full",
            "rounded-xl p-4",
            "bg-gradient-to-br from-transparent to-transparent",
            "backdrop-blur-sm border border-white/[0.08]",
            "shadow-[0_0_50px_-12px_rgba(176,141,87,0.4)]",
            "relative overflow-hidden",
            "before:absolute before:inset-0 before:bg-gradient-to-tr before:from-[#B08D57]/30 before:via-transparent before:to-transparent before:z-0",
            "after:absolute after:inset-0 after:bg-gradient-to-r after:from-transparent after:via-white/10 after:to-transparent",
            "after:translate-x-[-100%] after:transition-transform after:duration-1000",
            "hover:after:translate-x-[100%]",
            "transform-gpu",
            "group"
          )}
          style={{
            rotateX,
            rotateY,
            scale,
          }}
        >
          <motion.div
            className="relative z-10 flex flex-col h-full gap-2"
            style={{
              transformStyle: 'preserve-3d',
            }}
          >
            <motion.div
              style={{
                transform: 'translateZ(0px)',
                transition: 'transform 0.3s ease-out'
              }}
              whileHover={{
                transform: 'translateZ(100px)'
              }}
            >
              <Typography variant="h5" className="text-white transform-gpu" >
                {skill.name}
              </Typography>
            </motion.div>

            <motion.div
              style={{
                transform: 'translateZ(0px)',
                transition: 'transform 0.3s ease-out'
              }}
              whileHover={{
                transform: 'translateZ(80px)'
              }}
              className="flex-grow"
            >
              <Typography variant="body2" className="text-white/70 line-clamp-4 font-light transform-gpu" >
                {skill.description}
              </Typography>
            </motion.div>

            <motion.div
              style={{
                transform: 'translateZ(0px)',
                transition: 'transform 0.3s ease-out'
              }}
              whileHover={{
                transform: 'translateZ(60px)'
              }}
              className="mt-auto flex items-center gap-2 text-xs text-white/70 transform-gpu"
            >
              <span className="h-[1px] w-4 xs:w-6 sm:w-8 md:w-10 lg:w-12 xl:w-14 2xl:w-16 bg-white/20" />
              {index + 1} / {total}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
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
        id="background-gradient"
        className="fixed inset-0 z-[-1] w-full overflow-x-hidden"
        style={{ backgroundColor }}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
        <motion.div
          style={{
            opacity: useTransform(springProgress, [0, 0.8], [0, 1]),
            y: useTransform(springProgress, [-10, 0], [100, 0]),
          }}
          className="flex flex-col items-center justify-center gap-4 text-center z-20 relative"
        >
          <Typography variant="h1">
            <motion.span className="relative text-white">
              Mes Compétences
            </motion.span>
          </Typography>

          <div className={cn("w-[40rem] relative mx-auto")}>
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-[#B08D57]/100 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-[#B08D57]/80 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-[#B08D57]/70 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-[#B08D57]/60 to-transparent h-px w-1/4" />
          </div>

          <p className={cn(
            "mt-3 text-xs lg:text-base xl:text-lg text-[#86868b] font-light tracking-wide"
          )}>
            Technologies et outils que j'utilise au quotidien
          </p>
        </motion.div>

        <div className={cn(
          "relative mx-auto w-full overflow-x-clip",
          "h-[300px]",
          "sm:h-[350px]",
          "md:h-[400px]",
          "lg:h-[450px]"
        )}>
          <div className="relative w-full h-full flex items-center justify-center">
            {skills.map((skill, index) => (
              <TiltedSkillCard
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