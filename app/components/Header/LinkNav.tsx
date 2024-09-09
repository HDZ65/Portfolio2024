'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import { Box } from '@mui/material';
import Grid2 from '@mui/material/Grid2';

const LinkNav: React.FC = () => {

    const content = [
        {
            href: '/',
            label: 'Accueil',
            icon: <HomeRoundedIcon />
        },
        {
            href: '/about',
            label: 'A propos',
            icon: <PersonRoundedIcon />
        },
        {
            href: '/projets',
            label: 'Mes projets',
            icon: <WorkRoundedIcon />
        },
        {
            href: '/contact',
            label: 'Contact',
            icon: <EmailRoundedIcon />
        }
    ]

    const pathname = usePathname()?.slice(1) || '';

  return (
    <Grid2 size={8} sx={{ display: { xs: "none", md: "flex" } }} justifyContent={'center'} alignItems={'center'} gap={{ xs: 2, md: 4, lg: 8 }}>
        {content.map((item, index) => {
            const isActive = pathname === item.href.slice(1);
            return isActive ? (
                <Box
                    key={index}
                    className={`flex flex-row items-center gap-2 text-lg xl:px-6 px-4 max-lg:px-3 text-[var(--mui-palette-primary-main)] underline`}
                    aria-current="page"
                >
                    {item.label}
                </Box>
            ) : (
                <Link
                    key={index}
                    href={item.href}
                    className={`flex flex-row items-center gap-2 text-lg xl:px-6 px-4 max-lg:px-3 hover:underline text-secondary`}
                >
                    {item.label}
                </Link>
            );
        })}
    </Grid2>
  )
}

export default LinkNav;