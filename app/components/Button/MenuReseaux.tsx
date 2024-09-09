// Fichier: MenuReseaux.tsx
"use client"

import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useState } from 'react';

// Définition des actions pour le menu des réseaux sociaux
const actions = [
    { icon: <LinkedInIcon />, name: 'Linkedin', link: 'https://www.linkedin.com/in/alexandre-hernandez-392603309/' },
    { icon: <WhatsAppIcon />, name: 'WhatsApp', link: 'https://wa.me/33674406493' },
    { icon: <EmailRoundedIcon />, name: 'Email', link: 'mailto:alexandre.hernandez@yahoo.com' },
];

// Fonction principale du composant MenuReseaux
export default function MenuReseaux() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        < >
            <Backdrop open={open} sx={{ zIndex: 1000 }} />
            <SpeedDial
                ariaLabel="Menu des réseaux sociaux"
                icon={<ShareOutlinedIcon sx={{ color: "var(--mui-palette-text-primary)"}} />}
                onClose={handleClose}
                onOpen={handleOpen}
                open={open}
                direction="down"
                id='menu-reseaux'
                sx={{  position: "absolute", top: "0", right: "0", width: "40px"  }}
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
        </>
    );
}