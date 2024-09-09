import ScrollPages from "@/app/components/ui/ScrollPages";
import Header from "@/app/components/Header/Header";
import { Stack } from "@mui/material";
import Contact from "./components/Contact";

export default function page() {
  return (
    <ScrollPages>
      <Header />
      <Stack component={'main'} paddingBottom={{ xs: '90px', md: '0' }} >
        <Contact />
      </Stack>
    </ScrollPages>
  )
}