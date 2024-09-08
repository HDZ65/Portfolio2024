import ScrollPages from "@/app/components/ui/ScrollPages";
import Header from "@/app/components/Header/Header";
import {  Stack } from "@mui/material";
import Contact from "./components/Contact";

export default function page() {
  return (
    <ScrollPages>
      <Header />
      <Stack component={'main'} className="h-[calc(100dvh - 113.48px)]">
        <Stack width="100dvw"  height="calc(100dvh - 176.99px)" component="section" display="flex" flexDirection={{ xs: 'column' }} alignItems={{ xs: 'start', sm: 'center' }} justifyContent="space-between">
          <Contact />
        </Stack>
      </Stack>
    </ScrollPages>
  )
}