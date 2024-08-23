'use client'

// SwipeDownloadButton.tsx
// Composant pour un bouton de téléchargement avec un swipe manuel

import React, { useState, useRef, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import DownloadIcon from '@mui/icons-material/Download';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CircularProgress from '@mui/material/CircularProgress';
import { CheckCircleOutline } from '@mui/icons-material';
import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';

// Styles pour le conteneur et le cercle
const SwipeContainer = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: '0.9rem',
    backgroundColor: 'var(--mui-palette-background-paper)',
    borderRadius: '50px',
    position: 'relative',
    cursor: 'pointer',
    userSelect: 'none', 
    boxShadow: "inset 0 0 20px 0 #b3e5fc",

});

const SwipeCircle = styled(Box)<{ isDragging: boolean }>(({ isDragging }) => ({
    width: '48px',
    height: '48px',
    backgroundColor: '#0288d1',
    borderRadius: '100%',
    position: 'absolute',
    left: 0,
    top: '50%',
    transform: 'translateY(-50%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    transition: isDragging ? 'none' : 'left 0.5s',
}));

const SwipeDownloadButton = () => {
    const [isDragging, setIsDragging] = useState(false);
    const [leftPosition, setLeftPosition] = useState(6);
    const [dragOffset, setDragOffset] = useState(0);
    const [isDownloading, setIsDownloading] = useState(false);
    const [isDownloaded, setIsDownloaded] = useState(false);
    const swipeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!isDragging) return;
            const containerWidth = swipeRef.current?.offsetWidth ?? 0;
            const newLeft = Math.min(Math.max(0, e.clientX - (swipeRef.current?.getBoundingClientRect().left ?? 0) - dragOffset), containerWidth - 54);
            setLeftPosition(newLeft);
        };

        const handleTouchMove = (e: TouchEvent) => {
            if (!isDragging) return;
            const containerWidth = swipeRef.current?.offsetWidth ?? 0;
            const touch = e.touches[0];
            const newLeft = Math.min(Math.max(0, touch.clientX - (swipeRef.current?.getBoundingClientRect().left ?? 0) - dragOffset), containerWidth - 54);
            setLeftPosition(newLeft);
        };

        const handleMouseUp = () => {
            if (!isDragging) return;
            const containerWidth = swipeRef.current?.offsetWidth ?? 0;
            if (leftPosition >= containerWidth - 80) { // Position où le cercle s'arrête pour télécharger
                setIsDownloading(true);
                setLeftPosition(containerWidth - 54); // Garder le cercle à droite pendant le téléchargement
                setIsDragging(false); // Relâcher le cercle dès que le téléchargement commence
                // Simuler le téléchargement du fichier
                setTimeout(() => {
                    setIsDownloading(false);
                    setIsDownloaded(true);
                    // Déclencher le téléchargement du fichier
                    const link = document.createElement('a');
                    link.href = '/CV public de ALEXANDRE HERNANDEZ.pdf';
                    link.download = 'CV public de ALEXANDRE HERNANDEZ.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);

                    // Réinitialiser l'état après 2 secondes avec une transition
                    setTimeout(() => {
                        setIsDownloaded(false);
                        setLeftPosition(6);
                    }, 1000);
                }, 1000); // Simuler un délai de téléchargement de 1 seconde
            } else {
                setIsDragging(false);
                setLeftPosition(6);
            }
        };

        const handleTouchEnd = () => {
            handleMouseUp();
        };

        if (isDragging) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
            window.addEventListener('touchmove', handleTouchMove);
            window.addEventListener('touchend', handleTouchEnd);
        } else {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', handleTouchEnd);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', handleTouchEnd);
        };
    }, [isDragging, dragOffset, leftPosition]);

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        const circleLeft = e.currentTarget.getBoundingClientRect().left;
        setDragOffset(e.clientX - circleLeft);
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        setIsDragging(true);
        const touch = e.touches[0];
        const circleLeft = e.currentTarget.getBoundingClientRect().left;
        setDragOffset(touch.clientX - circleLeft);
    };

    return (
        <SwipeContainer
            ref={swipeRef}
            aria-label="Télécharger mon CV"
            role="button"
            tabIndex={0}
        >
            <SwipeCircle
                onMouseDown={handleMouseDown}
                onTouchStart={handleTouchStart}
                isDragging={isDragging}
                style={{ left: `${leftPosition}px`, fontSize: '1.5rem', zIndex: 1000 }} 
            >
                {isDownloading ? (
                    <CircularProgress size={24} color="inherit" />
                ) : isDownloaded ? (
                    <CheckCircleOutline sx={{ fontSize: '2rem' }} />
                ) : (
                    <DescriptionRoundedIcon sx={{ fontSize: '2rem' }} />
                )}
            </SwipeCircle>
            <Typography
                color={isDownloaded ? 'success.main' : 'var(--mui-palette-text-secondary)'}
                variant="body1"
                component="span"
                sx={{ textAlign: 'center', userSelect: 'none', fontWeight: 'bold', width: '100%', paddingLeft: '2.5rem', whiteSpace: "nowrap" }}
            >
                {isDownloaded ? 'Téléchargé avec succès' : 'Télécharger mon CV'}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 'fit-content'}}>
            <ChevronRightRoundedIcon  sx={{ color: 'var(--mui-palette-primary-main)', userSelect: 'none', fontSize: '2rem', opacity: 0.5 }} />
            <ChevronRightRoundedIcon  sx={{ color: 'var(--mui-palette-primary-main)', userSelect: 'none', fontSize: '2rem', marginLeft: '-1rem', opacity: 0.75 }} />
            <ChevronRightRoundedIcon  sx={{ color: 'var(--mui-palette-primary-main)', userSelect: 'none', fontSize: '2rem', marginLeft: '-1rem', opacity: 1 }} />
            </Box>
        </SwipeContainer>
    );
};

export default SwipeDownloadButton;