import React from 'react';
import { Card, CardContent, CardMedia, Typography, Chip, Box, Button } from '@mui/material';
import { Project } from '../data/projets';
import Link from 'next/link';

interface ProjectCardProps {
    project: Project;
}

const ProjectCardMobile: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <Card  sx={{width: '100%', display: { xs: "flex", md: "none" } }} >
            <CardMedia
                component="img"
                alt={`Image de ${project.title}`}
                height="600"
                image={project.image}
                title={`Image de ${project.title}`}
            />
            <CardContent>
                <Typography width="100%" gutterBottom variant="h3" component="div">
                    {project.title}
                </Typography>
                <Box width="100%" >
                    {project.techno.slice(0, 1).map((techno, index) => (
                        <Typography key={index} variant="body2" sx={{fontSize: "14px"}}>{techno.name}</Typography>

                    ))}
                </Box>
 
                <Link className='w-full' href={`/projets/${project.slug}`}>
                    <Button sx={{ fontSize: "16px", }} variant="outlined" >En savoir plus</Button>
                </Link>
            </CardContent>
        </Card>
    );
};

export default ProjectCardMobile;