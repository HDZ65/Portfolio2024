'use client'
// Fichier principal pour le composant Hero
import ButtonLink from "@/app/components/Button/ButtonLink";
import Picture from "@/app/components/Picture";
import { Box, Button, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import SwipeDownloadButton from "./SwipeDownloadButton";
import { FlipWords } from "./ui/flip-words";
import { useState, useEffect } from 'react';
import AnimatedContactButton from './AnimatedContactButton';
import { motion, useScroll, useTransform } from 'framer-motion';

const heroVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut'
    }
  }
}

// Fonction principale pour le composant Hero
export default function Hero() {
  // États et hooks
  const words = ["Bonjour", "Hello"];
  const [isHovered, setIsHovered] = useState(false);
  const [isProjectHovered, setIsProjectHovered] = useState(false);
  const [isContactHovered, setIsContactHovered] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  // Configuration du scroll
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  // Effet pour mobile
  useEffect(() => {
    if (isMobile) {
      setIsProjectHovered(true);
      setIsContactHovered(true);
    }
  }, [isMobile]);

  // Style des boutons
  const ButtonStyle = (isHovered: boolean, inverted: boolean, expandedWidth: string) => ({
    minWidth: isMobile ? '100%' : '48px',
    width: isMobile ? '100%' : (isHovered ? expandedWidth : '48px'),
    height: '48px',
    borderRadius: '24px',
    padding: '0 12px',
    transition: 'all 0.5s cubic-bezier(0.0, 0.0, 0.2, 1)',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: isMobile ? 'center' : 'flex-start',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: inverted ? 'background.paper' : 'primary.main',
    color: inverted ? 'primary.main' : 'background.paper',
    border: inverted ? '1px solid' : 'none',
    borderColor: 'primary.main',
    '&:hover': {
      backgroundColor: inverted ? 'background.paper' : 'primary.main',
      color: inverted ? 'primary.main' : 'background.paper',
    },
  });

  return (
    <Stack 
      component="main"
      spacing={0}
      sx={{
        width: '100%',
        position: 'relative'
      }}
    >
      <Stack
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        sx={{
          maxWidth: '1200px',
          width: { xs: '100%', md: '90%' },
          margin: '0 auto',
          minHeight: '100dvh',
          padding: { xxs: '0', xs: '0 1rem', md: '2.5rem' },
          justifyContent: 'center'
        }}
        flexDirection={{ xs: 'column' }}
        alignItems={{ xs: 'start', md: 'center' }}
        gap={{ xs: "2rem", xl: "2.5rem" }}
      >
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: 0.1
          }}
          display="flex"
          flexDirection="column"
          gap="1rem"
        >
          <Typography 
            color="primary.main" 
            width="100%" 
            textAlign={{ xs: 'start', md: 'center' }} 
            variant="h1"
          >
            <FlipWords words={words} />
          </Typography>
          <Typography 
            width="100%" 
            textAlign={{ xs: 'start', md: 'center' }} 
            variant="h1"
          >
            Je suis Alexandre Hernandez
          </Typography>
        </Box>

        <Box
          sx={{
            width: "180px",
            height: "1.5px",
            background: "linear-gradient(90deg, rgba(176, 141, 87, 0.1) 0%, rgba(176, 141, 87, 0.6) 50%, rgba(176, 141, 87, 0.1) 100%)",
            borderRadius: "1px",
          }}
        />

        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: 0.2
          }}
        >
          <Typography
            width="100%"
            textAlign={{ xs: 'start', md: 'center' }}
            variant="h5"
            component="div"
            sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: { xs: 'flex-start', md: 'center' } }}
          >
            Développeur web fullstack{' '}
            <Typography
              variant="h5"
              color="text.secondary"
              component="span"
              sx={{ ml: 1 }}
            >
              basé à Tarbes, France
            </Typography>
          </Typography>
          <Typography
            width="100%"
            textAlign={{ xs: 'start', md: 'center' }}
            variant="h5"
            component="div"
            sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: { xs: 'flex-start', md: 'center' } }}
          >
            Actuellement en recherche d'entreprise{' '}
            <Typography
              variant="h5"
              color="text.secondary"
              component="h5"
              sx={{ ml: 1 }}
            >
              pour une alternance Concepteur Développeur d'Applications.
            </Typography>
          </Typography>
        </Box>

        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            delay: 0.5
          }}
          display="flex"
          width="100%"
          justifyContent="center"
          alignItems="center"
          flexDirection={{ xs: 'column', md: 'row' }}
          gap={{ xs: "1.6rem", md: "2rem" }}
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              variant="contained"
              href="#mesProjets"
              onMouseEnter={() => !isMobile && setIsProjectHovered(true)}
              onMouseLeave={() => !isMobile && setIsProjectHovered(false)}
              sx={ButtonStyle(isProjectHovered, false, '160px')}
              aria-label={isProjectHovered ? "Mes Projets" : "Voir mes projets"}
              title="Voir mes projets de développement web"
              fullWidth={isMobile}
            >
              <WorkRoundedIcon sx={{ flexShrink: 0 }} />
              <Typography
                sx={{
                  opacity: isMobile || isProjectHovered ? 1 : 0,
                  maxWidth: isMobile || isProjectHovered ? 'none' : '0',
                  transition: 'all 0.5s cubic-bezier(0.0, 0.0, 0.2, 1)',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                }}
              >
                Mes Projets
              </Typography>
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <AnimatedContactButton href="#contact" fullWidth={isMobile} />
          </motion.div>
        </Box>
      </Stack>

      {/* Section noire plein écran */}
      <Stack
        sx={{
          width: '100vw',
          height: '100dvh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        {/* Effet de lumière dorée */}
        <motion.div
          style={{
            position: 'absolute',
            width: useTransform(scrollYProgress, [0, 1], ['120%', '80%']),
            height: useTransform(scrollYProgress, [0, 1], ['120%', '80%']),
            background: 'radial-gradient(circle at center, rgba(176, 141, 87, 0.1) 0%, rgba(176, 141, 87, 0) 80%)',
            filter: 'blur(40px)',
            zIndex: 0,
            margin: 'auto'
          }}
        />

        <div
          style={{
            width: '100vw',
            height: '100dvh',
            position: 'relative',
            zIndex: 1
          }}
        >
          <motion.div
            style={{
              width: useTransform(scrollYProgress, [0, 1], ['100%', '60%']),
              height: useTransform(scrollYProgress, [0, 1], ['100%', '60%']),
              borderRadius: '12px',
              padding: '0',
              margin: 'auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden'
            }}
          >
            <a 
              href="https://www.canva.com" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none'
              }}
            >
              <img 
                src="/imageProjets/image.png" 
                alt="Image" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '12px',
                  cursor: 'pointer'
                }}
              />
            </a>
          </motion.div>
        </div>
      </Stack>

      {/* Section des compétences avec animations au scroll */}
      <Stack
        sx={{
          width: '100vw',
          height: '100dvh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.1) 100%)'
        }}
      >
        <motion.div
          style={{
            width: '80%',
            height: '80%',
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem'
          }}
        >
          {/* Titre avec effet de fade et de translation */}
          <motion.div
            style={{
              opacity: useTransform(scrollYProgress, [0.2, 0.4], [0, 1]),
              y: useTransform(scrollYProgress, [0.2, 0.4], [100, 0])
            }}
          >
            <Typography variant="h2" textAlign="center" color="	#B08D57">
              Mes Compétences
            </Typography>
          </motion.div>

          {/* Grille de compétences avec effet de stagger */}
          <motion.div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '2rem',
              padding: '2rem'
            }}
          >
            {['React', 'TypeScript', 'Node.js', 'MongoDB', 'Express', 'Next.js'].map((skill, index) => (
              <motion.div
                key={skill}
                style={{
                  background: 'var(--mui-palette-background-paper)',
                  padding: '2rem',
                  borderRadius: '16px',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                  opacity: useTransform(scrollYProgress, [0.3 + index * 0.1, 0.5 + index * 0.1], [0, 1]),
                  scale: useTransform(scrollYProgress, [0.3 + index * 0.1, 0.5 + index * 0.1], [0.8, 1]),
                  rotate: useTransform(scrollYProgress, [0.3 + index * 0.1, 0.5 + index * 0.1], [-5, 0])
                }}
              >
                <Typography variant="h5" textAlign="center">
                  {skill}
                </Typography>
              </motion.div>
            ))}
          </motion.div>

          {/* Barre de progression avec effet de remplissage */}
          <motion.div
            style={{
              width: '100%',
              height: '4px',
              background: 'rgba(0,0,0,0.1)',
              borderRadius: '2px',
              overflow: 'hidden'
            }}
          >
            <motion.div
              style={{
                width: '100%',
                height: '100%',
                background: 'var(--mui-palette-primary-main)',
                x: useTransform(scrollYProgress, [0.6, 0.8], ['-100%', '0%'])
              }}
            />
          </motion.div>
        </motion.div>
      </Stack>
    </Stack>
  );
}
          