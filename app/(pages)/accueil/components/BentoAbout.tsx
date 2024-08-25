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
export function BentoAbout() {
  const features = [
    {
      title: "Mes Stack favoris",
      description:
        "je suis particulièrement intéressé par le développement front-end et le UI/UX design.",
      skeleton: <SkeletonTwo />,
      className: "lg:border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
    },
    {
      title: "Mon objectif",
      description:
        "Mon objectif est de rejoindre une équipe dynamique où je pourrai mettre en pratique mes connaissances et contribuer à la réalisation de projets ambitieux.",
      skeleton: <SkeletonThree />,
      className: "lg:border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
    },


  ];
  return (
    <Box component="section" display="flex" flexDirection="column" alignItems="start" justifyContent="center" gap="1.6rem" >
      <Box display="flex" flexDirection="column" alignItems="start" justifyContent="center" gap="1.6rem" >
        <Typography variant="h2">
          Qui suis-je ?
        </Typography>

        <Typography fontSize="16px">
          Alexandre Hernandez, 28 ans, Développeur web junior passionné par la création d&apos;expériences digitales immersives.
        </Typography>
      </Box>

      <div className="relative ">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6 xl:border rounded-[30px] border-white/50">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <Box component="div" sx={{ backgroundColor: '#001A28' }} className="w-full">
                {feature.skeleton}
              </Box>
            </FeatureCard>
          ))}
        </div>
      </div>
    </Box>
  );
}

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(` flex flex-col gap-4 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <Typography variant="h4" sx={{ fontSize: "20px" }}>
      {children}
    </Typography>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <Typography fontSize="16px"
    >
      {children}
    </Typography>
  );
};

export const SkeletonOne = () => {
  return (
    <div className="relative flex py-8 gap-10 h-full">
      <div className="w-full     mx-auto bg-white dark:bg-neutral-900 shadow-2xl group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-2  ">
          {/* TODO */}
          <Image
            src={moi}
            alt="header"
            width={800}
            height={800}
            className="h-full w-full aspect-square object-cover object-left-top rounded-sm"
          />
        </div>
      </div>

      <div className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-white dark:from-black via-white dark:via-black to-transparent w-full pointer-events-none" />
      <div className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-white dark:from-black via-transparent to-transparent w-full pointer-events-none" />
    </div>
  );
};

export const SkeletonThree = () => {
  return (
    <Box
      className="relative flex gap-10"
    >
      <div className="w-full  mx-auto bg-transparent dark:bg-transparent group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-2  relative">
          <Box
            className="h-full w-full aspect-square object-cover object-center rounded-sm "
          >
            <Typography variant="body1">
              Développeur web junior passionné par la création d&apos;expériences digitales immersives, je suis particulièrement intéressé par le développement front-end et le UI/UX design. Maîtrisant React, Next.js, JavaScript et Tailwind CSS, j&apos;ai mis à profit ces compétences pour concevoir et développer des sites web dynamiques tels que &quot;Élisabeth Coach holistique&quot; (Mon plus grand projet), &quot;Éminence&quot;, ainsi que ce portfolio.
            </Typography>

            <Typography variant="body1">
              Rigoureux et créatif, j&apos;ai développé de solides compétences que ce soit en maquetage sur figma ou en développement. Particulierement avec react, nextJS et mongoDB.
            </Typography>


            <Typography variant="body1">
              Mon objectif est de rejoindre une équipe dynamique où je pourrai mettre en pratique mes connaissances et contribuer à la réalisation de projets ambitieux.
            </Typography>
          </Box>
        </div>
      </div>
    </Box>
  );
};

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
    <div className="relative flex flex-col items-start p-8 gap-10 h-full overflow-hidden">
      {/* TODO */}
      <div className="flex flex-row -ml-14">
        {images.map((image, idx) => (
          <motion.div
            variants={imageVariants}
            key={"images-first" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-4 p-1 bg-white  flex-shrink-0 overflow-hidden"
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


      <div className="absolute left-0 z-[100] inset-y-0 w-20 bg-gradient-to-r from-white dark:from-black to-transparent  h-full pointer-events-none" />
      <div className="absolute right-0 z-[100] inset-y-0 w-20 bg-gradient-to-l from-white dark:from-black  to-transparent h-full pointer-events-none" />
    </div>
  );
};



