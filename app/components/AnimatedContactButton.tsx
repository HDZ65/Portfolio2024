'use client'

// Composant de bouton de contact animé
import React, { useState, useEffect } from 'react';
import { Button, Typography, useMediaQuery, useTheme } from '@mui/material';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface AnimatedContactButtonProps {
  href: string;
  inverted?: boolean;
  expandedWidth?: string;
  label?: string;
  title?: string;
  fullWidth?: boolean;
}

const AnimatedContactButton: React.FC<AnimatedContactButtonProps> = ({
  href,
  inverted = true,
  expandedWidth = '173px',
  label = 'Me Contacter',
  title = 'Me contacter pour discuter de vos projets',
  fullWidth = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (isMobile) {
      setIsHovered(true);
    }
  }, [isMobile]);

  const buttonStyle = {
    minWidth: fullWidth ? '100%' : '48px',
    width: fullWidth ? '100%' : (isHovered ? '160px' : '48px'),
    height: '48px',
    borderRadius: '24px',
    padding: '0 12px',
    transition: 'all 0.5s cubic-bezier(0.0, 0.0, 0.2, 1)',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: fullWidth ? 'center' : 'flex-start',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: 'background.paper',
    color: 'primary.main',
    border: '1px solid',
    borderColor: 'primary.main',
    boxShadow: isHovered ? '0 0 15px rgba(176, 141, 87, 0.15)' : 'none',
    '&:hover': {
      backgroundColor: 'background.paper',
      color: 'primary.main',
      boxShadow: '0 0 15px rgba(176, 141, 87, 0.15)',
    },
  };

  return (
    <Button
      variant="outlined"
      href={href}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      sx={buttonStyle}
      aria-label={isHovered ? "Contact" : "Me contacter"}
      title="Me contacter"
      fullWidth={fullWidth}
    >
      <EmailRoundedIcon sx={{ flexShrink: 0 }} />
      <Typography
        sx={{
          opacity: fullWidth || isHovered ? 1 : 0,
          maxWidth: fullWidth || isHovered ? 'none' : '0',
          transition: 'all 0.5s cubic-bezier(0.0, 0.0, 0.2, 1)',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
        }}
      >
        {label}
      </Typography>
    </Button>
  );
};

export default AnimatedContactButton;