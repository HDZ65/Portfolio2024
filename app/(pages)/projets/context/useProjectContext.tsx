'use client'

// Contexte de gestion des projets
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Project, projects } from '../data/projets';

// Interface pour le contexte
interface ProjectContextType {
  openProject: Project;
  setOpenProject: (project: Project) => void;
}

// Création du contexte
const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

// Hook personnalisé pour utiliser le contexte
export function useProjectContext() {
  const context = useContext(ProjectContext);
  if (context === undefined) {
    throw new Error('useProjectContext doit être utilisé à l\'intérieur d\'un ProjectProvider');
  }
  return context;
}

// Props pour le provider
interface ProjectProviderProps {
  children: ReactNode;
}

// Composant Provider
export function ProjectProvider({ children }: ProjectProviderProps) {
  // Initialisation avec le premier projet
  const [openProject, setOpenProject] = useState<Project>(projects[0]);

  return (
    <ProjectContext.Provider value={{ openProject, setOpenProject }}>
      {children}
    </ProjectContext.Provider>
  );
}