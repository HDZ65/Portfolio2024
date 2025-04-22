import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform, useSpring } from 'framer-motion';
import { Typography, Stack, IconButton } from '@mui/material';
import { ArrowUp } from 'lucide-react';
import Link from 'next/link';
 
// --- Types et Données --- 
interface TechInfo {
  name: string;
  url: string;
}

const techStack: TechInfo[] = [
  { name: 'Next.js', url: 'https://nextjs.org/' },
  { name: 'TypeScript', url: 'https://www.typescriptlang.org/' },
  { name: 'Framer Motion', url: 'https://www.framer.com/motion/' },
  { name: 'Material-UI', url: 'https://mui.com/' },
  { name: 'Tailwind CSS', url: 'https://tailwindcss.com/' }
];

// ------------------------

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);
  const currentYear = new Date().getFullYear();
  const yourName = "Alexandre Hernandez";
  const yourTagline = "Développeur Full Stack.";
  const yourEmail = "alexandre.hernandez@yahoo.com";
  const cvUrl = "https://cvdesignr.com/p/66fcfecd381b2";

  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 40
  });

  const opacity = useTransform(smoothProgress, [0, 1], [0.9, 1]);
  const y = useTransform(smoothProgress, [0, 1], [50, 0]);

  return (
    <motion.footer
      ref={footerRef}
      className="relative w-full pt-24 pb-12 px-8"
      style={{ opacity, y }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Effet de brillance */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.1] to-transparent pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Section Identité */}
          <div className="md:col-span-4 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Typography variant="h3" className="font-bold text-4xl bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent mb-6">
                {yourName}
              </Typography>
              <Typography variant="body1" className="text-white/90 text-lg">
                {yourTagline}
              </Typography>
            </motion.div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {/* Liens de Navigation */}
              <div className="space-y-4">
                <Typography variant="overline" className="text-white font-semibold tracking-wider">
                  Menu
                </Typography>
                <Stack spacing={2}>
                  {[
                    { label: 'Accueil', href: '/' },
                    { label: 'Projets', href: '/mes-projets' },
                    { label: 'Contact', href: '/contact' }
                  ].map((item) => (
                    <motion.div key={item.label}>
                      <Link
                        href={item.href}
                        className="text-lg text-white/60 hover:text-white transition-all duration-500 ease-out flex items-center gap-2 no-underline"
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </Stack>
              </div>

              {/* Contact */}
              <div className="space-y-4">
                <Typography variant="overline" className="text-white font-semibold tracking-wider">
                  Contact
                </Typography>
                <Stack spacing={2}>
                  <motion.div>
                    <a
                      href={`mailto:${yourEmail}`}
                      className="text-lg text-white/60 hover:text-white transition-all duration-500 ease-out flex items-center gap-2 no-underline"
                    >
                      Email
                    </a>
                  </motion.div>
                  <motion.div>
                    <a
                      href={cvUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg text-white/60 hover:text-white transition-all duration-500 ease-out flex items-center gap-2 no-underline"
                    >
                      CV en ligne
                    </a>
                  </motion.div>
                </Stack>
              </div>

              {/* Technologies */}
              <div className="space-y-4">
                <Typography variant="overline" className="text-white font-semibold tracking-wider">
                  Technologies utilisées
                </Typography>
                <div className="grid grid-cols-2 gap-2">
                  {techStack.map((tech) => (
                    <motion.div key={tech.name}>
                      <a
                        href={tech.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg text-white/60 hover:text-white transition-all duration-500 ease-out flex items-center gap-2 no-underline"
                      >
                        {tech.name}
                      </a>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ligne de séparation avec gradient */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8" />

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <Typography variant="caption" className="text-white/60">
            © {currentYear} {yourName}. Tous droits réservés.
          </Typography>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <IconButton
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-white/5 hover:bg-white/10 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-300"
              aria-label="Retour en haut"
            >
              <ArrowUp className="text-gray-400" />
            </IconButton>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
} 