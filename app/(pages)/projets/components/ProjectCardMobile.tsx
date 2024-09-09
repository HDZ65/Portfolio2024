import React from 'react';
import { Card, CardContent, CardMedia, Typography, Chip, Box, Button } from '@mui/material';
import { Project } from '../data/projets';
import Link from 'next/link';

interface ProjectCardProps {
    project: Project;
    isLast?: boolean; // Ajout d'une prop pour identifier la dernière carte
}

const ProjectCardMobile: React.FC<ProjectCardProps> = ({ project, isLast = false }) => {
    return (
        <Card 
        sx={{ 
            width: '100%', 
            display: { xs: "flex", md: "none" }, 
            marginBottom: isLast ? "5rem" : "2.5rem", // Augmentation de la marge pour la dernière carte
            padding: "1.5rem", 
            borderRadius: '30px',
            boxShadow: "0 0px 10px 0 rgba(2, 136, 209, 0.37)",
            border: '1px solid rgba(255, 255, 255, 0.18)',
            transition: 'all 1s ease',

            ":hover": {
                boxShadow: `0 0px 15px 0 var(--mui-palette-primary-main)`,
            }, 
        }} >
            <CardMedia
                component="img"
                alt={`Image de ${project.title}`}
                height="600"
                image={project.image}
                title={`Image de ${project.title}`}
            />
            <CardContent>
                <Box>
                    <Typography width="100%" gutterBottom variant="h3" component="div">
                        {project.title}
                    </Typography>
                    <Box width="100%" >
                        {project.techno.slice(0, 1).map((techno, index) => (
                            <Typography key={index} variant="body2" sx={{ fontSize: "14px" }}>{techno.name}</Typography>

                        ))}
                    </Box>
                </Box>

                <Link className='w-full' href={`/projets/${project.slug}`}>
                    <Button sx={{ fontSize: "16px", }} variant="outlined" >En savoir plus</Button>
                </Link>
            </CardContent>
        </Card>
    );
};

export default ProjectCardMobile;