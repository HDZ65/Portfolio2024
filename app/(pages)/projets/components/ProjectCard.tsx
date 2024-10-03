// Carte de projet
'use client'

import { Typography, Box } from '@mui/material';
import { Project, projects } from '../data/projets';
import Image from 'next/image';
import { useProjectContext } from '../context/useProjectContext';

// Fonction pour afficher une carte de projet
export default function ProjectCard() {
    const { setOpenProject, openProject } = useProjectContext();

    return (
        <>
            {projects.map((project, index) => (
                <Box 
                    display={{xs: 'none', md: 'block'}}
                    onClick={() => setOpenProject(project)}
                    aria-label={`Voir les détails du projet ${project.title}`} 
                    key={index} 
                    sx={{ 
                        height: `${100 / projects.length}%`, 
                        position: 'relative', 
                        cursor: 'pointer',
                        boxShadow: openProject?.slug === project.slug ? '0 0 20px 0 var(--mui-palette-primary-main)' : 'none',
                        borderRadius: '12px',
                        overflow: 'hidden',
                    }}
                    className='group'
                >
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className='object-cover object-top transition-all duration-300 group-hover:brightness-75 group-hover:blur-xs'
                    />
                    <Box
                        position='absolute'
                        top={0}
                        left={0}
                        right={0}
                        bottom={0}
                        className='transition-all duration-300 backdrop-blur-sm bg-gray-900/30 opacity-0 group-hover:opacity-100'
                    />
                    <Box
                        position='absolute'
                        top='50%'
                        left='50%'
                        sx={{
                            transform: "translate(-50%, -50%)",
                            textAlign: 'center', 
                            width: '100%',
                            zIndex: 1,
                        }}
                        className='transition-all duration-300 opacity-0 group-hover:opacity-100'
                    >
                        <Typography color="white" variant='h2'>{project.title}</Typography>
                        <Typography sx={{ color: "var(--mui-palette-primary-main)", textDecoration: 'underline' }}>
                            Voir en détail
                        </Typography>
                    </Box>
                </Box>
            ))}
        </>
    )
}