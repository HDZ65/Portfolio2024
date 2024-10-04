"use client";

import React, { useState, useEffect } from 'react';
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
    const [value, setValue] = useState('/');

    useEffect(() => {
        if (pathname === '/') setValue('/');
        else if (pathname.includes('#mesProjets')) setValue('#mesProjets');
        else if (pathname.includes('#aPropos')) setValue('#aPropos');
        else if (pathname.includes('#contact')) setValue('#contact');
    }, [pathname]);

    const handleNavigation = (newValue: string) => {
        setValue(newValue);
        router.push(newValue);
    };

    return (
        <BottomNavigation
            value={value}
            onChange={(_, newValue) => handleNavigation(newValue)}
            showLabels
            aria-label="Navigation principale"
            sx={{ 
                display: { xs: "flex", md: "none" },
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                '& .MuiBottomNavigationAction-root': {
                    color: 'text.secondary',
                },
                '& .Mui-selected': {
                    color: 'primary.main',
                },
            }}
        >
            <BottomNavigationAction 
                value="/"
                label="Accueil" 
                icon={<HomeRoundedIcon />} 
                aria-label="Aller à l'accueil"
            />
            <BottomNavigationAction 
                value="#mesProjets"
                label="Projets" 
                icon={<WorkRoundedIcon />} 
                aria-label="Voir mes projets"
            />
            <BottomNavigationAction 
                value="#aPropos"
                label="À propos" 
                icon={<PersonRoundedIcon />} 
                aria-label="En savoir plus sur moi"
            />
            <BottomNavigationAction 
                value="#contact"
                label="Contact" 
                icon={<EmailRoundedIcon />} 
                aria-label="Me contacter"
            />
        </BottomNavigation>
    );
};

export default BottumBar;