import { Position } from '../types';
import { GRID_CONFIG, RANDOM_CONFIG } from '../config/constants';

export function getRandomPosition(): Position {
  const angle = Math.random() * Math.PI * 2;
  const radius = RANDOM_CONFIG.radiusMin + Math.random() * RANDOM_CONFIG.radiusRange; 
  
  return {
    x: Math.cos(angle) * radius,
    y: Math.sin(angle) * radius,
    rotate: (Math.random() - 0.5) * RANDOM_CONFIG.rotateRange 
  };
}

export function getGridPosition(index: number): Position {
  return {
    x: (index - 2) * GRID_CONFIG.colWidth,
    y: 0,
    rotate: 0
  };
} 