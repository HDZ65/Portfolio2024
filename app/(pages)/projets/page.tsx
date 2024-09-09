import ScrollPages from "@/app/components/ui/ScrollPages";
import Header from "@/app/components/Header/Header";
import { Box, Container, Stack, Typography } from "@mui/material";
import ScrollArrow from "@/app/components/Button/ScrollArrow";
import { ProjectProvider } from "./context/useProjectContext";
import { projects } from "./data/projets";
import ProjectCard from "./components/ProjectCard";
import ProjectDetail from "./components/projectDetail";
import ProjectCardMobile from "./components/ProjectCardMobile";
import Grid2 from '@mui/material/Grid2';
export default function Page() {
    return (
        <ProjectProvider>
            <ScrollPages>
                <Header />
                <Stack
                    component={'main'}
 
                    height={{ xs: 'auto', md: "calc(100dvh - 113.48px)" }}
                    maxHeight={{ xs: 'none', md: "calc(100dvh - 113.48px)" }}
                    display='flex'
                    flexDirection='row'
                    justifyContent='space-between'
                    gap={4}
                    paddingBottom={{ xs: 0, md: 4 }}

                >
                    <Box
                        display='flex'
                        flexDirection='column'
                        paddingX={{ xs: "1rem", md: "1rem", lg: "1rem", xl: "0" }}

                        width={{ xs: '100%', md: '40%' }}
                        height='100%'
                        gap={{ xs: 0, md: 4 }}
                    >
                        <Typography marginBottom={{ xs: 4, md: 0 }} variant="h2">Parcourir mes projets :</Typography>
                        <Box display={{ xs: 'block', md: 'none' }}>
                            <Grid2 container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 2, md: 12 }}>
                                {projects.map((project, index) => (
                                    <Grid2 size={{ xs: 1, sm: 1, md: 4 }} key={project.slug}>
                                        <ProjectCardMobile
                                            project={project}
                                            isLast={index === projects.length - 1}
                                        />
                                    </Grid2>
                                ))}
                            </Grid2>
                        </Box>

                        <ProjectCard />
                    </Box>
                    <ProjectDetail />
                </Stack>
            </ScrollPages>
        </ProjectProvider>
    )
}