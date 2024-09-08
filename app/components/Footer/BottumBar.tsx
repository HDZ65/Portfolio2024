"use client";

import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';

/**
 * Composant BottumBar
 * Barre de navigation en bas de page avec des icônes et des étiquettes
 */
const BottumBar: React.FC = () => {
    const router = useRouter();
    const pathname = usePathname();

    const handleNavigation = (path: string) => {
        router.push(path);
    };

    return (
        <BottomNavigation
            value={pathname}
            onChange={(_, newValue) => {
                handleNavigation(newValue);
            }}
            showLabels
            aria-label="Navigation principale"
            sx={{ display: { xs: "flex", md: "none" } }}
        >
            <BottomNavigationAction 
                value="/"
                sx={{ borderRadius: "30px 0 0 0" }} 
                label="Accueil" 
                icon={<HomeRoundedIcon />} 
            />
            <BottomNavigationAction 
                value="/projets"
                label="Projets" 
                icon={<WorkRoundedIcon />} 
            />
            <BottomNavigationAction 
                value="/about"
                label="À propos" 
                icon={<PersonRoundedIcon />} 
            />
            <BottomNavigationAction 
                value="/contact"
                sx={{ borderRadius: "0 30px 0 0" }} 
                label="Contact" 
                icon={<EmailRoundedIcon />} 
            />
        </BottomNavigation>
    );
};

export default BottumBar;