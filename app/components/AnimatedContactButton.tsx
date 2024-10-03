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
    minWidth: fullWidth ? '100%' : (isMobile ? expandedWidth : '48px'),
    width: fullWidth ? '100%' : (isMobile || isHovered ? expandedWidth : '48px'),
    height: '48px',
    borderRadius: '24px',
    padding: '0 12px',
    transition: prefersReducedMotion ? 'none' : 'width 0.3s ease-in-out',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: fullWidth ? 'center' : 'flex-start',
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
  };

  return (
    <Button
      variant={inverted ? 'outlined' : 'contained'}
      href={href}
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
      sx={buttonStyle}
      aria-label={isHovered ? label : "Me contacter"}
      title={title}
      aria-expanded={isHovered || isMobile ? 'true' : 'false'}
    >
      <EmailRoundedIcon sx={{ flexShrink: 0 }} />
      <Typography
        sx={{
          opacity: isMobile || isHovered ? 1 : 0,
          maxWidth: fullWidth ? 'none' : (isMobile || isHovered ? '130px' : '0'),
          transition: prefersReducedMotion ? 'none' : 'opacity 0.3s ease-in-out, max-width 0.3s ease-in-out',
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