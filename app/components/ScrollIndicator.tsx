'use client'

import { motion } from 'framer-motion';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Box } from '@mui/material';

const ScrollIndicator = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        bottom: '30px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 10,
        cursor: 'pointer',
        padding: '8px',
        borderRadius: '50%',
        transition: 'background-color 0.2s ease-in-out',
        '&:hover': {
            backgroundColor: 'rgba(var(--mui-palette-action-hoverChannel) / 0.08)',
        },
      }}
      onClick={() => window.scrollTo({ top: window.innerHeight * 0.8, behavior: 'smooth' })}
      aria-label="Faire défiler vers le bas"
      title="Faire défiler vers le bas"
    >
      <motion.div
        animate={{
          y: [-2, 2, -2],
          opacity: [0.7, 1, 0.7]
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'easeInOut'
        }}
      >
        <KeyboardArrowDownIcon
          sx={{
            fontSize: '2.5rem',
            color: 'primary.main',
            display: 'block'
          }}
        />
      </motion.div>
    </Box>
  );
};

export default ScrollIndicator; 