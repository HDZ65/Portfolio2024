"use client"

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Box } from "@mui/material";

// Composant principal StackAbout
export function StackAbout() {
  return (
    <Box 
      width="100%" 
      component="section" 
      display="flex" 
      flexDirection="column" 
      alignItems="start" 
      justifyContent="center" 
      gap="1.6rem"
    >
      <SkeletonTwo />
    </Box>
  );
}

// Composant SkeletonTwo
export const SkeletonTwo = () => {
  const images = [
    "/javascript.svg",
    "/nextjs.svg",
    "/mongodb.svg",
    "/react.svg",
    "/tailwind.svg",
  ];

  const imageVariants = {
    whileHover: { scale: 1.1, rotate: 0, zIndex: 100 },
    whileTap: { scale: 1.1, rotate: 0, zIndex: 100 },
  };

  return (
    <div className="relative flex flex-col items-center w-full gap-10 h-full overflow-hidden">
      <div className="flex flex-row justify-center items-center w-full h-full">
        {images.map((image, idx) => (
          <motion.div
            key={idx}
            variants={imageVariants}
            style={{ rotate: Math.random() * 20 - 10 }}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl my-2 p-1 bg-[--mui-palette-text-primary] flex-shrink-0 overflow-hidden"
          >
            <Image
              src={image}
              alt={`Logo de ${image.split('/')[1].split('.')[0]}`}
              width="500"
              height="500"
              className="rounded-lg  h-14 w-14 sm:h-16 sm:w-16 md:h-24 md:w-24 lg:h-32 lg:w-32 flex-shrink-0"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};