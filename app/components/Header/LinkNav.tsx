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
import { motion } from 'framer-motion';
import Image from 'next/image';
import logo from './../../../public/logo.png';

const LinkNav: React.FC = () => {
    const theme = useTheme();
    const pathname = usePathname()?.slice(1) || '';

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

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: 0.3
                }}
                style={{ 
                    position: 'absolute',
                    left: '72px',
                    top: '0.2rem',
                    zIndex: 1001,
                    '@media (max-width: 900px)': {
                        left: '5px',
                        top: '0'
                    }
                }}
            >
                <Link href="/">
                    <Image 
                        className="w-14 h-14 md:w-14 md:h-14" 
                        src={logo} 
                        alt="logo" 
                        width={500} 
                        height={500}
                    />
                </Link>
            </motion.div>
            <Grid2 
                component={motion.div}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                size={8} 
                sx={{ display: { xs: "none", md: "flex" } }} 
                justifyContent={'center'} 
                alignItems={'center'} 
                gap={{ xs: 2, md: 4, lg: 8 }}
            >
                {content.map((item, index) => {
                    const isActive = pathname === item.href.slice(1);
                    const commonStyles = `
                        flex flex-row items-center gap-2 text-lg xl:px-6 px-4 max-lg:px-3 select-none
                        transition-all duration-500 ease-out 
                        rounded-[999px] border border-solid border-transparent
                        hover:border-[#9b9ba1] `;
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                ease: "easeOut",
                                delay: 0.3 + index * 0.1
                            }}
                        >
                            {isActive ? (
                                <Link
                                    href={item.href}
                                    className={`${commonStyles} text-[var(--mui-palette-text-secondary)] border-[#9b9ba1] `}
                                    aria-current="page"
                                >
                                    {item.label}
                                </Link>
                            ) : (
                                <Link
                                    href={item.href}
                                    className={`${commonStyles} text-secondary`}
                                >
                                    {item.label}
                                </Link>
                            )}
                        </motion.div>
                    );
                })}
            </Grid2>
        </>
    )
}

export default LinkNav;