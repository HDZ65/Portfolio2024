'use client';

import { useAnimation, useTransform, useSpring } from 'framer-motion';
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";
import { SkillCardProps } from '../types';
import { getRandomPosition, getGridPosition } from '../utils/position';
import { useMemo, useEffect } from 'react';

export function SkillCard({ 
  skill, 
  index, 
  total, 
  springProgress, 
  isHovered, 
  onHover, 
  onLeave 
}: SkillCardProps) {
  const controls = useAnimation();
  
  const { random, grid } = useMemo(() => ({
    random: getRandomPosition(),
    grid: getGridPosition(index)
  }), [index]);

  const x = useTransform(springProgress, [0, 1], [random.x, 0]);
  const y = useTransform(springProgress, [0, 1], [random.y, 0]);
  const rotate = useTransform(springProgress, [0, 1], [random.rotate, 0]);
  const scale = useTransform(springProgress, [0, 0.3, 1], [0, 0.9, 1]);
  const opacity = useTransform(springProgress, [0, 0.3, 1], [0, 0.9, 1]);

  const cardSpring = useSpring(springProgress, {
    stiffness: 250,
    damping: 35,
    mass: 0.7
  });

  useEffect(() => {
    controls.start({
      opacity: 1,
      transition: { delay: index * 0.1 }
    });
  }, [controls, index]);

  return (
    <motion.div
      style={{ x, y, rotate, scale, opacity }}
      className={cn(
        "w-full h-full",
        "group rounded-xl p-4",
        "bg-gradient-to-br from-transparent to-transparent",
        "backdrop-blur-sm border border-white/[0.08]",
        "shadow-[0_0_30px_-8px_rgba(176,141,87,0.15)]",
        "hover:shadow-[0_0_50px_-8px_rgba(176,141,87,0.4)]",
        "transition-shadow duration-300",
      )}
      onHoverStart={onHover}
      onHoverEnd={onLeave}
    >
      <div className="relative z-10 flex flex-col h-full">
        <motion.div
          className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#B08D57]/30 to-[#B08D57]/10 text-xl font-bold" 
        >
          {skill.name.charAt(0)}
        </motion.div>
        <h3 className="text-xl font-semibold mb-2 text-white">{skill.name}</h3>
        <p className="text-sm leading-relaxed text-white/90 flex-grow line-clamp-3">{skill.description}</p>
        <div className="mt-3 flex items-center gap-2 text-xs text-white/70">
          <span className="h-[1px] w-8 bg-white/20" />
          {index + 1} / {total}
        </div>
      </div>
      <div className="absolute inset-0 z-10 rounded-xl bg-gradient-to-tr from-[#B08D57]/30 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
    </motion.div>
  );
} 