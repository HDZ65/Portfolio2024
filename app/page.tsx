import { Stack } from "@mui/material";
import Hero from "./components/Hero";
import React from 'react';
import ScrollPages from "./components/ui/ScrollPages";
import Header from "./components/Header/Header";
export default function Home() {
  return (
    <ScrollPages>
      <Header />
      <Stack component={'main'} className="h-[calc(100dvh - 113.48px)]">
        <Stack
          width="100dvw"
          height="calc(100dvh - 176.99px)"
          component="section"
          display="flex"
          flexDirection={{ xs: 'column' }}
          alignItems={{ xs: 'start', sm: 'center' }}
          justifyContent="space-between">
          <Hero />
        </Stack>
      </Stack>
    </ScrollPages>
  );
}
