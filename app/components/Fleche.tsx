'use client'

import React, { useEffect, useState } from 'react';
import { Box, IconButton } from '@mui/material';
import { styled, keyframes } from '@mui/system';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { HideImage } from '@mui/icons-material';

const fadeInOut = keyframes`
  0%, 100% { opacity: 0.3; }
  33% { opacity: 1; }
  66% { opacity: 0.5; }
`;

const ArrowContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%', // Utilise toute la hauteur du bouton
  width: '100%', // Utilise toute la largeur du bouton
});

interface StyledArrowProps {
  delay: string;
}

const StyledArrow = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'delay',
})<StyledArrowProps>(({ delay }) => ({
  color: 'var(--mui-palette-primary-main)',
  fontSize: '1.5rem',
  animation: `${fadeInOut} 3s infinite`,
  animationDelay: delay,
  lineHeight: 0.7, // Réduit davantage l'espace vertical entre les icônes
  marginTop: '-12px', // Augmente le chevauchement des icônes
}));

const ScrollDownButton: React.FC = () => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [sections, setSections] = useState<HTMLElement[]>([]);
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const allSections = Array.from(document.querySelectorAll('section'));
    setSections(allSections);

    const checkScrollPosition = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const bodyHeight = document.body.offsetHeight;
      setIsAtBottom(scrollPosition >= bodyHeight - 50);
    };

    window.addEventListener('scroll', checkScrollPosition);
    return () => window.removeEventListener('scroll', checkScrollPosition);
  }, []);

  const handleClick = () => {
    if (isAtBottom) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setCurrentSectionIndex(0);
    } else if (currentSectionIndex < sections.length - 1) {
      const nextSection = sections[currentSectionIndex + 1];
      nextSection.scrollIntoView({ behavior: 'smooth' });
      setCurrentSectionIndex(currentSectionIndex + 1);
    }
  };

  // Composant de flèche adaptatif
  const ArrowIcon = isAtBottom ? KeyboardArrowUpIcon : KeyboardArrowDownIcon;

  return (
    <IconButton
      onClick={handleClick}
      aria-label={isAtBottom ? "Retourner en haut" : "Défiler vers le bas"}
      sx={{
        visibility: { xs: 'hidden', md: 'visible' },
        position: 'fixed',
        bottom: 40,
        right: 72,
        height: 60,
        width: 60,
        padding: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center', // Centre le contenu du bouton
      }}
    >
      <ArrowContainer>
        {[0, 1, 2].map((index) => (
          <StyledArrow key={index} delay={`${index * 0.2}s`}>
            <ArrowIcon sx={{ fontSize: '1.6rem' }} />
          </StyledArrow>
        ))}
      </ArrowContainer>
    </IconButton>
  );
};

export default ScrollDownButton;