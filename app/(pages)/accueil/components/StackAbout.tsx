"use client"

import React from "react";
import { cn } from "@/app/libs/utils";
import Image from "next/image";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { IconBrandYoutubeFilled } from "@tabler/icons-react";
import Link from "next/link";
import { Box, Stack, Typography } from "@mui/material";
import moi from './../../../../public/6.jpg';

// Composant principal StackAbout
export function StackAbout() {
  const features = [
    {
      title: "",
      description: "",
      skeleton: <SkeletonTwo />,
      className: "lg:border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
    },
  ];

  return (
    <Box width="100%" component="section" display="flex" flexDirection="column" alignItems="start" justifyContent="center" gap="1.6rem">
      <div className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6 xl:border rounded-[30px] border-white/50">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <Box component="div" className="w-full">
                {feature.skeleton}
              </Box>
            </FeatureCard>
          ))}
        </div>
      </div>
    </Box>
  );
}

// Composant pour la carte de fonctionnalité
const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return <div>{children}</div>;
};

// Composant pour le titre de la fonctionnalité
const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return <Typography variant="h5">{children}</Typography>;
};

// Composant pour la description de la fonctionnalité
const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return <Typography fontSize="16px">{children}</Typography>;
};

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
    whileHover: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
    whileTap: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
  };

  return (
    <div className="relative flex flex-col items-start  gap-10 h-full overflow-hidden">
      <div className="flex flex-row -ml-4">
        {images.map((image, idx) => (
          <motion.div
            variants={imageVariants}
            key={"images-first" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-4 p-1 bg-[--mui-palette-text-primary] flex-shrink-0 overflow-hidden"
          >
            <Image
              src={image}
              alt={image}
              width="500"
              height="500"
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 flex-shrink-0"
            />
          </motion.div>
        ))}
      </div>

      <div className="absolute left-0 z-[100] inset-y-0 w-10 bg-gradient-to-r from-[--mui-palette-background-paper] to-transparent h-full pointer-events-none" />
      <div className="absolute right-0 z-[100] inset-y-0 w-10 bg-gradient-to-l from-[--mui-palette-background-paper] to-transparent h-full pointer-events-none" />
    </div>
  );
};