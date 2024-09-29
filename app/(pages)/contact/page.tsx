import ScrollPages from "@/app/components/ui/ScrollPages";
import Header from "@/app/components/Header/Header";
import { Stack } from "@mui/material";
import Contact from "./components/Contact";

export default function page() {
  return (
    <ScrollPages>
      <Header />
      <Stack component={'main'}  paddingY={{xs:'1.5rem', md:'2.5rem'}}  height={{ md:'calc(100dvh - 112px)'}} >
        <Contact />
      </Stack>
    </ScrollPages>
  )
}