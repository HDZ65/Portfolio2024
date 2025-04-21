'use client'

import { useMediaQuery } from '@mui/material';
import MesCompetences from './mes-competences';
import { MesCompetencesMobile } from './mes-competences-mobile';

export function MesCompetencesWrapper() {
    const isMobile = useMediaQuery('(max-width: 768px)');

    return isMobile ? <MesCompetencesMobile /> : <MesCompetences />;
} 