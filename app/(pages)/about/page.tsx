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
            <Stack component={'main'} height="calc(100dvh - 113.48px)">

                <Stack width="100dvw" height="calc(100dvh - 176.99px)" component="section" display="flex" flexDirection={{ xs: 'column' }} alignItems={{ xs: 'start', sm: 'center' }} justifyContent="space-between">
                    <Bento />
                </Stack>
            </Stack>
        </ScrollPages>
    )
}