import ScrollPages from "@/app/components/ui/ScrollPages";
import Header from "@/app/components/Header/Header";
import { Box, Container, Stack } from "@mui/material";
import { StackAbout } from "./components/StackAbout";
import ScrollArrow from "@/app/components/Button/ScrollArrow";
import Bento from "./components/Bento";

export default function page() {
    return (
        <ScrollPages>
            <Header />
            <Stack paddingBottom={{xs: '90px', md: '0px'}} component={'main'} >

                <Stack  paddingX={{ xs: "1rem", md: "1rem", lg: "1rem", xl: "0" }} width="100dvw"  component="section" display="flex" flexDirection={{ xs: 'column' }} alignItems={{ xs: 'start', sm: 'center' }} justifyContent="space-between" >
                    <Bento />
                </Stack>
            </Stack>
        </ScrollPages>
    )
}