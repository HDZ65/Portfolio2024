// Fichier: MenuReseaux.tsx
"use client"

import * as React from 'react';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

// Définition des actions pour le menu des réseaux sociaux
const actions = [
  { icon: <LinkedInIcon />, name: 'Linkedin', link: 'https://www.linkedin.com/in/alexandre-hernandez-392603309/'  },
  { icon: <WhatsAppIcon />, name: 'WhatsApp', link: 'https://wa.me/33674406493' },
  { icon: <EmailRoundedIcon />, name: 'Email', link: 'mailto:alexandre.hernandez@yahoo.com' },
];

// Fonction principale du composant MenuReseaux
export default function MenuReseaux() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box position="absolute" top={6} right={16} aria-label="Menu des réseaux sociaux">
      <Backdrop open={open} />
      <SpeedDial
        ariaLabel="Menu des réseaux sociaux"
        icon={<ShareOutlinedIcon sx={{ color: "var(--mui-palette-text-secondary)" }} />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
        direction="left"
        id='menu-reseaux'
        transitionDuration={0}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => window.open(action.link, '_blank')}
            aria-label={action.name}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}