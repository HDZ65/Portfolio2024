import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Typography } from '@mui/material';
import { cn } from "../../../lib/utils";

interface Project {
  name: string;
  description: string;
  technologies: string[];
  image: string;
}

const projects: Project[] = [
  {
    name: "Projet 1",
    description: "Description détaillée du premier projet avec ses objectifs et réalisations.",
    technologies: ["React", "TypeScript", "Node.js"],
    image: "/images/project1.jpg"
  },
  {
    name: "Projet 2",
    description: "Description détaillée du deuxième projet avec ses objectifs et réalisations.",
    technologies: ["Next.js", "MongoDB", "Tailwind"],
    image: "/images/project2.jpg"
  },
  // Ajoutez d'autres projets ici
];

export default function MesProjets() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 125%"],
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
      aria-label="Section des projets"
    >
      <motion.div
        className="fixed inset-0 z-[-1] w-screen overflow-x-clip"
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
              Mes Projets
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
            Découvrez mes réalisations et projets personnels
          </p>
        </motion.div>

        <div className={cn(
          "relative mx-auto w-full mt-12",
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        )}>
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              className={cn(
                "relative group",
                "rounded-xl overflow-hidden",
                "bg-gradient-to-br from-transparent to-transparent",
                "backdrop-blur-sm border border-white/[0.08]",
                "shadow-[0_0_50px_-12px_rgba(176,141,87,0.4)]",
                "hover:scale-105 transition-transform duration-300"
              )}
              onHoverStart={() => setHoveredProject(index)}
              onHoverEnd={() => setHoveredProject(null)}
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
              
              <div className="p-6">
                <Typography variant="h5" className="text-white mb-2">
                  {project.name}
                </Typography>
                <Typography variant="body2" className="text-white/70 mb-4">
                  {project.description}
                </Typography>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full bg-white/10 text-white/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 