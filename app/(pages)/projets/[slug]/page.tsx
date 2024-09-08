import ScrollPages from "@/app/components/ui/ScrollPages";
import Header from "@/app/components/Header/Header";
import { Box, Container, Stack, Typography } from "@mui/material";
import { projects } from "../data/projets";
import Details from "./Components/Details";
export default function Page( {params}: {params: {slug: string}} ) {
    const project = projects.find(project => project.slug === params.slug);
    if (!project) {
        return <div>Project not found</div>;
    }   

    return (
            <ScrollPages>
                <Header />
                <Stack
                    component={'main'}
                >
                    <Details project={project} />
                </Stack>
            </ScrollPages>
    )
}