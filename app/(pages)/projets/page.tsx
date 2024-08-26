import React from 'react';
import { projects } from './data/projets';
import ProjectCard from './components/ProjectCard';
import { Box, Container } from '@mui/material';
import About from '../accueil/components/About';

const ProjectsPage: React.FC = () => {
  return (
    <Container  >
      <Box display="grid" gridTemplateColumns="repeat(1, 1fr)" gap={4}>
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </Box>
    </Container>
  );
};

export default ProjectsPage;