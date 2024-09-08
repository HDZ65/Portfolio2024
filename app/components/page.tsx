
import React from 'react';
import { projects } from '../(pages)/projets/data/projets';
import ProjectCardMobile from '../(pages)/projets/components/ProjectCardMobile';
import { Box, Container, Stack, Typography } from '@mui/material';
import About from '../(pages)/about/components/Bento';
import ScrollPages from '@/app/components/ui/ScrollPages';
import Header from '@/app/components/Header/Header';
import ScrollArrow from '@/app/components/Button/ScrollArrow';
import ProjectCard from '../(pages)/projets/components/ProjectCard';
import { ProjectProvider } from '@/app/(pages)/projets/context/useProjectContext';
import { useProjectContext } from '@/app/(pages)/projets/context/useProjectContext';
import ProjectDetail from '../(pages)/projets/components/projectDetail';
const ProjectsPage: React.FC = () => {

    return (
        <ProjectProvider>
            <ScrollPages>
                <Header />
                <Stack component={'main'} className="h-[100dvh]">

                    <Stack className='!bg-red-500' width="100%" position="relative" height="calc(100dvh - 176.99px)" component="section" display="flex" flexDirection={{ xs: 'column' }} alignItems={{ xs: 'start', sm: 'center' }} justifyContent="space-between" gap={'4rem'}>
                        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" gap="2rem" width="100%" >
                            <Typography variant='h1'>
                                Mes projets
                            </Typography>
                            {projects.map((project) => (
                                <ProjectCardMobile key={project.slug} project={project} />
                            ))}
                            <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center" gap="2rem" width="100%" >
                                {projects.map((project) => (
                                    <ProjectCard key={project.slug} project={project} />
                                ))}
                            </Box>
                        </Box>
                        <Box >
                            <ProjectDetail />

                        </Box>
                        <ScrollArrow pagesSuivante="Contact" pagesPrecedente="À propos" />
                    </Stack>
                </Stack>
            </ScrollPages>
        </ProjectProvider>
    );
};

export default ProjectsPage;