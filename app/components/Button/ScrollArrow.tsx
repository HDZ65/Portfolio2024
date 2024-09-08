// Titre : Composant ScrollArrow avec navigation bidirectionnelle, icônes outlined et délai utilisant Zustand
'use client'
import { useCallback, useEffect } from "react";
import { useRouter, usePathname } from 'next/navigation';
import { useNavigationStore } from '@/store/navigationStore';
import { Typography, Box } from "@mui/material";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

const pages = ['/', '/about', '/projets', '/contact'];
const SCROLL_DELAY = 1000; // Délai en millisecondes

// Fonction pour obtenir l'icône appropriée en fonction du nom de la page
const getPageIcon = (pageName: string) => {
  switch (pageName.toLowerCase()) {
    case 'accueil':
      return <HomeOutlinedIcon fontSize="small" />;
    case 'projets':
      return <WorkOutlineOutlinedIcon fontSize="small" />;
    case 'contact':
      return <ContactMailOutlinedIcon fontSize="small" />;
    case 'à propos':
      return <PersonOutlineOutlinedIcon fontSize="small" />;
    default:
      return null;
  }
};

export default function ScrollArrow({ pagesSuivante, pagesPrecedente }: { pagesSuivante: string; pagesPrecedente: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const { isNavigating, startNavigation, endNavigation } = useNavigationStore();

  /**
   * Navigue vers la page suivante ou précédente
   * @param direction - 1 pour la page suivante, -1 pour la page précédente
   */
  const navigatePage = useCallback((direction: 1 | -1) => {
    if (isNavigating) return;

    startNavigation();
    const currentIndex = pages.indexOf(pathname);
    const nextPageIndex = (currentIndex + direction + pages.length) % pages.length;
    
    router.push(pages[nextPageIndex]);

    setTimeout(endNavigation, SCROLL_DELAY);
  }, [pathname, router, isNavigating, startNavigation, endNavigation]);

  /**
   * Gère l'événement de défilement
   */
  const handleScroll = useCallback((event: WheelEvent) => {
    event.preventDefault();
    if (event.deltaY > 0) {
      navigatePage(1); // Défilement vers le bas
    } else if (event.deltaY < 0) {
      navigatePage(-1); // Défilement vers le haut
    }
  }, [navigatePage]);

  useEffect(() => {
    window.addEventListener('wheel', handleScroll, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [handleScroll]);

  return (
    <Box  sx={{ display: { xs: "none", md: "flex" }, paddingY: { xs: 0, md: 2  } }} justifyContent="space-between" width="100%" alignItems="center">
      <button
        onClick={() => navigatePage(-1)}
        className="focus:outline-none group transition-opacity duration-300 flex items-center justify-center"
        aria-label={`Naviguer vers la page précédente: ${pagesPrecedente}`}
        disabled={isNavigating}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-chevron-left group-hover:stroke-[var(--mui-palette-primary-main)] transition-opacity duration-300"
        >
          <path d="m15 18-6-6 6-6"/>
        </svg>
        <Box className="flex items-center group-hover:text-[var(--mui-palette-primary-main)] transition-opacity duration-300">
          <Typography className="group-hover:text-[var(--mui-palette-primary-main)]" variant="h6" color="text.secondary" sx={{ mr: 1 }}>
            {pagesPrecedente}
          </Typography>
          {getPageIcon(pagesPrecedente)}
        </Box>
      </button>

      {/* Bouton existant pour la page suivante */}
      <button
        onClick={() => navigatePage(1)}
        className="focus:outline-none group transition-opacity duration-300 flex items-center justify-center"
        aria-label={`Naviguer vers la page suivante: ${pagesSuivante}`}
        disabled={isNavigating}
      >
        <Box className="flex items-center group-hover:text-[var(--mui-palette-primary-main)] transition-opacity duration-300">
          {getPageIcon(pagesSuivante)}
          <Typography className="group-hover:text-[var(--mui-palette-primary-main)]" variant="h6" color="text.secondary" sx={{ ml: 1 }}>
            {pagesSuivante}
          </Typography>
        </Box>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-chevron-right group-hover:stroke-[var(--mui-palette-primary-main)] transition-opacity duration-300"
        >
          <path d="m9 18 6-6-6-6"/>
        </svg>
      </button>
    </Box>
  );
}