// Carte de projet
'use client'

import { Typography, Box } from '@mui/material';
import { Project, projects } from '../data/projets';
import Image from 'next/image';
import { useState } from 'react';
import { useProjectContext } from '../context/useProjectContext';

// Fonction pour afficher une carte de projet
export default function ProjectCard() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const { setOpenProject, openProject } = useProjectContext();

    return (
        <>
            {projects.map((project, index) => (
                <Box 
                    display={{xs: 'none', md: 'block'}}
                    onClick={() => setOpenProject(project)}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    aria-label={`Voir les détails du projet ${project.title}`} 
                    key={index} 
                    sx={{ 
                        height: `${100 / projects.length}%`, 
                        position: 'relative', 
                        cursor: 'pointer',
                        boxShadow: openProject?.slug === project.slug ? '0 0 20px 0 var(--mui-palette-primary-main)' : 'none',
                        borderRadius: '30px',
                        overflow: 'hidden',

                    }}
                    className='group'
                >
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill

                        className='group-hover:brightness-[0.5] object-cover object-top transition-all duration-300'


                    />
                    <Box
                        position='absolute'
                        top='50%'
                        left='50%'
                        sx={{
                            transform: "translate(-50%, -50%)",
                            transition: "all 0.3s ease-in-out",
                            opacity: hoveredIndex === index ? 1 : 0,
                            textAlign: 'center', 
                            width: '100%'  
                        }}
                    >
                        <Typography variant='h2'>{project.title}</Typography>
                        <Typography sx={{ color: "var(--mui-palette-primary-main)", textDecoration: 'underline' }}>
                            Voir en détail
                        </Typography>
                    </Box>
                </Box>
            ))}
        </>
    )
}