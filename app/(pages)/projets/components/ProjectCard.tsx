import React from 'react';
import { Card, CardContent, CardMedia, Typography, Chip, Box, Button } from '@mui/material';
import { Project } from '../data/projets';
import Link from 'next/link';

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <Card>
            <CardMedia
                component="img"
                alt={`Image de ${project.title}`}
                height="500"
                image={project.image}
                title={`Image de ${project.title}`}
            />
            <CardContent>
                <Typography width="100%" gutterBottom variant="h3" component="div">
                    {project.title}
                </Typography>
                <Box width="100%" sx={{ display: "flex", flexDirection: "row", gap: "0.5rem", flexWrap: "nowrap" }}>
                    {project.chips.slice(0, 2).map((chip, index) => (
                        <Chip sx={{ fontSize: "12px", height: "1rem" }} key={index} label={chip} variant="outlined" />
                    ))}
                </Box>
                <Link href={`/projets/${project.slug}`}>
                    <Button sx={{ fontSize: "16px", }} variant="outlined" >En savoir plus</Button>
                </Link>
            </CardContent>
        </Card>
    );
};

export default ProjectCard;