import { GridConfig, RandomConfig, SpringConfig } from '../types';

export const GRID_CONFIG: GridConfig = {
  colWidth: 280,
  rowHeight: 350,
  containerWidth: "100%",
  containerHeight: 400,
};

export const RANDOM_CONFIG: RandomConfig = {
  radiusMin: 1000,
  radiusRange: 400,
  rotateRange: 720   
};

export const SPRING_CONFIG: SpringConfig = {
  stiffness: 100,
  damping: 10,
  mass: 0.05,
  restDelta: 0.001
};

export const APPEAR_CONFIG = {
  scale: [0, 0.5], 
  opacity: [0, 0.5], 
  title: [0, 0.5],
  titleScale: [0.8, 1]
}; 