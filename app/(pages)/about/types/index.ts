export interface Skill {
  name: string;
  description: string;
}

export interface SkillCardProps {
  skill: Skill;
  index: number;
  total: number;
  springProgress: MotionValue<number>;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}

export interface GridConfig {
  colWidth: number;
  rowHeight: number;
  containerWidth: string;
  containerHeight: number;
}

export interface RandomConfig {
  radiusMin: number;
  radiusRange: number;
  rotateRange: number;
}

export interface SpringConfig {
  stiffness: number;
  damping: number;
  mass: number;
  restDelta?: number;
}

export interface Position {
  x: number;
  y: number;
  rotate: number;
} 