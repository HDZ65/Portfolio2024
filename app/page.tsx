import { Stack } from "@mui/material";
import Hero from "./components/Hero";
import React from 'react';
import ScrollPages from "./components/ui/ScrollPages";
import Header from "./components/Header/Header";
export default function Home() {
  return (
    <ScrollPages>
      <Header />
      <Stack component={'main'}  height={{ md:'calc(100dvh - 112px)'}}>
          <Hero />
      </Stack>
    </ScrollPages>
  );
}
