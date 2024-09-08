import ScrollPages from "@/app/components/ui/ScrollPages";
import Header from "@/app/components/Header/Header";
import { Box, Container, Stack, Typography } from "@mui/material";
import ScrollArrow from "@/app/components/Button/ScrollArrow";
import { ProjectProvider } from "./context/useProjectContext";
import { projects } from "./data/projets";
import ProjectCard from "./components/ProjectCard";
import ProjectDetail from "./components/projectDetail";
import ProjectCardMobile from "./components/ProjectCardMobile";


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
                    flexDirection='column'
                    justifyContent='space-between'
                >

                    <Box display='flex' flexDirection='row' height='100%' gap={4}>
                        <Box gap={4} display='flex' flexDirection='column' padding={{xs: 1, md: 0}} width={{ xs: '100%', md: '40%' }} height='100%' >
                            <Typography variant="h2">Parcourir mes projets :</Typography>
                            <ProjectCardMobile project={projects[0]} />
                            <ProjectCardMobile project={projects[1]} />
                            <ProjectCardMobile project={projects[2]} />
                            <ProjectCard />
                        </Box>
                        <ProjectDetail />
                    </Box>
                </Stack>
            </ScrollPages>
        </ProjectProvider>
    )
}