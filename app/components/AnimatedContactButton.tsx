'use client'

import { Button, Typography, useMediaQuery, useTheme } from "@mui/material";
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from "next/link";

interface AnimatedContactButtonProps {
    href: string;
    fullWidth?: boolean;
}

export default function AnimatedContactButton({ href, fullWidth }: AnimatedContactButtonProps) {
    const [isHovered, setIsHovered] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    useEffect(() => {
        if (isMobile) {
            setIsHovered(true);
        }
    }, [isMobile]);

    return (
        <Link href={href} passHref>
            <Button
                component={motion.button}
                whileTap={{ scale: 0.95 }}
                variant="outlined"
                onMouseEnter={() => !isMobile && setIsHovered(true)}
                onMouseLeave={() => !isMobile && setIsHovered(false)}
                sx={{
                    minWidth: isMobile ? '100%' : '48px',
                    width: isMobile ? '100%' : (isHovered ? '173px' : '48px'),
                    height: '48px',
                    borderRadius: '24px',
                    padding: '0 12px',
                    transition: 'all 0.3s cubic-bezier(0.0, 0.0, 0.2, 1)',
                    overflow: 'hidden',
                    display: 'flex',
                    justifyContent: isMobile ? 'center' : 'flex-start',
                    alignItems: 'center',
                    gap: '8px',
                    backgroundColor: 'background.paper',
                    color: 'primary.main',
                    border: '1px solid',
                    borderColor: 'primary.main',
                    '&:hover': {
                        backgroundColor: 'background.paper',
                        color: 'primary.main',
                    },
                }}
                aria-label={isHovered ? "Me Contacter" : "Contact"}
                fullWidth={fullWidth}
            >
                <EmailRoundedIcon sx={{ flexShrink: 0 }} />
                <Typography
                    sx={{
                        opacity: isMobile || isHovered ? 1 : 0,
                        maxWidth: isMobile || isHovered ? 'none' : '0',
                        transition: 'all 0.3s cubic-bezier(0.0, 0.0, 0.2, 1)',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                    }}
                >
                    Me Contacter
                </Typography>
            </Button>
        </Link>
    );
} 