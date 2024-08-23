"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import ContactMailRoundedIcon from '@mui/icons-material/ContactMailRounded';
import { Stack } from '@mui/material';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
/**
 * Composant BottumBar
 * Barre de navigation en bas de page avec des icônes et des étiquettes
 */
const BottumBar: React.FC = () => {
    const [value, setValue] = useState(0);
    const router = useRouter();

    const handleNavigation = (newValue: number) => {
        setValue(newValue);
        switch (newValue) {
            case 0:
                router.push('/');
                break;
            case 1:
                router.push('/projets');
                break;
            case 2:
                router.push('/contact');
                break;
            default:
                break;
        }
    };

    return (
            <BottomNavigation
                value={value}
                onChange={(_, newValue) => {
                    handleNavigation(newValue);
                }}
                showLabels
                aria-label="Navigation principale"
            >
                <BottomNavigationAction sx={{ borderRadius: "30px 0 0 30px" }} label="Accueil" icon={<HomeRoundedIcon />} />
                <BottomNavigationAction  label="Projets" icon={<WorkRoundedIcon />} />
                <BottomNavigationAction sx={{ borderRadius: " 0 30px 30px 0 " }} label="Contact" icon={<EmailRoundedIcon />} />
            </BottomNavigation>
    );
};

export default BottumBar;