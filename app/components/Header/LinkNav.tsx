'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import { Box, useTheme } from '@mui/material';
import Grid2 from '@mui/material/Grid2';

const LinkNav: React.FC = () => {
    const theme = useTheme();

    const content = [
        {
            href: '/',
            label: 'Accueil',
            icon: <HomeRoundedIcon />
        },
        {
            href: '#aPropos',
            label: 'A propos',
            icon: <PersonRoundedIcon />
        },
        {
            href: '#mesProjets',
            label: 'Mes projets',
            icon: <WorkRoundedIcon />
        },
        {
            href: '#contact',
            label: 'Contact',
            icon: <EmailRoundedIcon />
        }
    ]

    const pathname = usePathname()?.slice(1) || '';

    return (
        <Grid2 size={8} sx={{ display: { xs: "none", md: "flex" } }} justifyContent={'center'} alignItems={'center'} gap={{ xs: 2, md: 4, lg: 8 }}>
            {content.map((item, index) => {
                const isActive = pathname === item.href.slice(1);
                const commonStyles = `
                    flex flex-row items-center gap-2 text-lg xl:px-6 px-4 max-lg:px-3 select-none
                    transition-all duration-500 ease-in-out 
                    rounded-[999px] border border-solid border-transparent
                    hover:border-[#9b9ba1] `;
                return isActive ? (
                    <Link
                        key={index}
                        href={item.href}
                        className={`${commonStyles} text-[var(--mui-palette-text-secondary)] border-[#9b9ba1] `}
                        aria-current="page"
                    >
                        {item.label}
                    </Link>
                ) : (
                    <Link
                        key={index}
                        href={item.href}
                        className={`${commonStyles} text-secondary`}
                    >
                        {item.label}
                    </Link>
                );
            })}
        </Grid2>
    )
}

export default LinkNav;