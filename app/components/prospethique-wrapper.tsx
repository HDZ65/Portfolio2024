'use client'

import { useMediaQuery } from '@mui/material';
import { Prospethique } from './prospethique';
import { ProspethiqueMobile } from './prospethique-mobile';

export function ProspethiqueWrapper() {
    const isMobile = useMediaQuery('(max-width: 768px)');

    return isMobile ? <ProspethiqueMobile /> : <Prospethique />;
} 