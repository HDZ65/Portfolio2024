'use client'
// Titre principal : Page d'accueil du portfolio

import { useEffect } from 'react'
import { Stack } from "@mui/material"
import Lenis from 'lenis'
import Header from "./components/Header/Header"
import { ProspethiqueWrapper } from './components/prospethique-wrapper'
import { PortfolioPresentation } from './components/PortfolioPresentation'
import { MesCompetencesWrapper } from './(pages)/about/components/mes-competences-wrapper'
import { AProposWrapper } from './(pages)/about/components/a-propos-wrapper'
import Footer from './components/Footer'
import { DraggableImages } from './components/draggable-images'

const images = [
  {
    id: '1',
    src: '/imageProjets/chic&trim.png',
    alt: 'Chic & Trim - Site vitrine pour salon de coiffure',
    name: 'Chic & Trim - Site Vitrine Coiffeur',
    description: "Conception et développement d\'un site vitrine moderne pour un salon de coiffure, réalisé en HTML, CSS, et JavaScript. Met en avant les services, l\'équipe et les tendances via une galerie. L\'accent a été mis sur un design élégant, une navigation intuitive et une présentation claire des informations pour attirer et informer la clientèle.",
    projectUrl: 'https://chic-trim.vercel.app/index.html',
    githubUrl: 'https://github.com/HDZ65/Chic-Trim'
  },
  {
    id: '2',
    src: '/imageProjets/elisabeth.png',
    alt: 'Elisabeth - Site vitrine pour une coach de vie',
    name: 'Site Vitrine Elisabeth',
    description: "Développement d\'un site vitrine élégant et animé pour une coach. Mise en œuvre avec Next.js et TypeScript pour une expérience utilisateur dynamique et engageante. Intégration d\'un système de paiement sécurisé via PayPal. L\'accent a été mis sur une esthétique soignée et des transitions fluides pour refléter l\'univers de la cliente.",
    projectUrl: '#',
    githubUrl: 'https://github.com/HDZ65/coachHolistique'
  },
  {
    id: '3',
    src: '/imageProjets/eminence.png',
    alt: 'Eminence - Site vitrine de bijoux de luxe (Développement Frontend)',
    name: 'Eminence Joaillerie - Site Vitrine',
    description: "Développement frontend d\'un site vitrine pour une marque de bijoux de luxe. Mise en œuvre d\'une interface utilisateur élégante et responsive avec un focus sur l\'expérience utilisateur et la mise en valeur des produits. Utilisation de [Technologies Frontend Clés, ex: Next.js, TypeScript, animations GSAP/Framer Motion, etc.]. Optimisation des performances et de l\'accessibilité.",
    projectUrl: 'https://eminence-virid.vercel.app/',
    githubUrl: 'https://github.com/HDZ65/Eminence'
  },
  {
    id: '5',
    src: '/imageProjets/laravel-api.png',
    alt: 'Laravel API & Next.js Frontend',
    name: 'Starter Kit: Laravel API + Next.js',
    description: "Un starter kit complet avec une API Laravel et un frontend Next.js. Réalisé : Système d\'authentification complet, Vérification par email avec token sécurisé, Réinitialisation de mot de passe avec lien temporaire, Protection CSRF et validation des données, Sessions sécurisées avec Sanctum, Protection contre les attaques par force brute, Limitation de tentatives de connexion (Rate Limiting), Gestion des sessions avec régénération automatique, Validation robuste des données utilisateur, Intégration Front/Back avec Axios, Configuration Axios avec credentials et XSRF-Token, Headers personnalisés pour API JSON, Intercepteurs pour requêtes et réponses, Gestion des erreurs avec logging en développement, Types TypeScript pour la configuration API.",
    projectUrl: 'https://next15-starter-roan.vercel.app/',
    githubUrl: 'https://github.com/HDZ65/laravel-breeze-next15-typescript-starter'
  }
]

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis()
    
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    
    requestAnimationFrame(raf)
    
    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <>
      <Header />
      <Stack 
        display={{ xs: 'flex', md: 'block' }} 
        flexDirection="column" 
        sx={{ scrollBehavior: 'smooth' }} 
        component="main" 
        width="98%"
      >
        <HeroSection />
        <div className="w-full relative">
          <ProspethiqueWrapper />
          <DraggableImages images={images} />
          <MesCompetencesWrapper />
          <AProposWrapper />
        </div>
      </Stack>
      <Footer />
    </>
  )
}

function HeroSection() {
  return (
    <Stack
      component="section"
      sx={{
        width: '100%',
        height: { xs: 'calc(100vh - 57.59px)', md: 'calc(100vh - 62px)' },
        backgroundColor: "var(--mui-palette-background-paper)",
        borderRadius: '12px',
      }}
    >
      <PortfolioPresentation />
    </Stack>
  )
}

