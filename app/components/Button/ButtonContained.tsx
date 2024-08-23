// Composant réutilisable de bouton MUI avec accessibilité

import React from 'react';
import Button from '@mui/material/Button';

// Fonction pour le composant de bouton
export default function ButtonContained({ onClick, label, icon }: { onClick: () => void, label: string, icon: React.ReactNode }) {
  return (
    <Button 
      variant="contained" 
      onClick={onClick} 
      aria-label={label} 
      aria-live="polite" 
      startIcon={icon}
    >
      {label}
    </Button>
  );
}