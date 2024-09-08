export interface Project {
    slug: string;
    title: string;
    description: string;
    image: string;
    link: string;
    techno: {
        name: string;
        description: string;
    }[];
    fonctionnalite: {
        name: string;
        description: string;
    }[];
    accessibilite?: {
        name: string;
        description: string;
    }[];
    prochainesEtapes?: {
        name: string;
        description: string;
    }[];
    github: string;
}

export const projects: Project[] = [
    // Élisabeth Coaching
    {
        slug: 'Elisabeth-Coaching',
        title: 'Élisabeth Coaching',
        description: 'Plateforme de réservation complète pour coaching holistique, développée lors d\'un stage. Ce projet démontre mes compétences full-stack, de la conception à la mise en production. L\'architecture moderne utilise Next.js 14 et MongoDB, offrant une expérience utilisateur fluide et une gestion efficace via une interface d\'administration complète.',
        image: '/imageProjets/elisabeth.png',
        link: 'https://coach-holistique--seven.vercel.app/',
        techno: [
            {
                name: 'Next.js 14',
                description: 'Utilisation du framework React avec App Router pour une application web performante et moderne.'
            },
            {
                name: 'TypeScript',
                description: 'Langage de programmation typé pour une meilleure maintenabilité et robustesse du code.'
            },
            {
                name: 'Tailwind CSS',
                description: 'Framework CSS utilisé pour un design responsive et une mise en page efficace.'
            },
            {
                name: 'Shadcn UI',
                description: 'Bibliothèque de composants React pour une interface utilisateur cohérente et esthétique.'
            },
            {
                name: 'MongoDB',
                description: 'Base de données NoSQL pour stocker et gérer les données de l\'application.'
            },
            {
                name: 'PayPal PRO',
                description: 'Intégration du système de paiement pour les réservations de coaching.'
            }
        ],
        fonctionnalite: [
            {
                name: 'Système de Réservation',
                description: 'Planification interactive permettant aux clients de réserver des séances de coaching.'
            },
            {
                name: 'Paiement en Ligne',
                description: 'Intégration de PayPal PRO pour un processus de paiement sécurisé lors de la réservation.'
            },
            {
                name: 'Blog',
                description: 'Section dédiée aux articles de blog, gérée dynamiquement depuis l\'interface d\'administration.'
            },
            {
                name: 'Newsletter',
                description: 'Système d\'inscription à la newsletter pour tenir les clients informés.'
            },
            {
                name: 'Interface d\'Administration',
                description: 'Panneau de contrôle pour gérer les rendez-vous, les utilisateurs, les articles et les prestations.'
            }
        ],
        accessibilite: [
            {
                name: 'Design Responsive',
                description: 'Interface adaptative pour une expérience utilisateur optimale sur tous les appareils.'
            },
            {
                name: 'Navigation Intuitive',
                description: 'Structure de site claire et logique pour une navigation facile.'
            }
        ],
        prochainesEtapes: [
            {
                name: 'Optimisation SEO',
                description: 'Amélioration du référencement pour augmenter la visibilité en ligne.'
            },
            {
                name: 'Intégration de Témoignages',
                description: 'Ajout d\'une section pour afficher les avis et retours des clients.'
            },
            {
                name: 'Système de Rappels',
                description: 'Mise en place de notifications automatiques pour les rendez-vous à venir.'
            }
        ],
        github: 'https://github.com/HDZ65/coachHolistique',
    },

    // Eminence
    {
        slug: 'eminence-bijoux-luxe',
        title: 'Éminence - Bijoux de Luxe',
        description: 'Site vitrine sophistiqué pour une marque fictive de bijoux de luxe. Ce projet met en valeur mes compétences en développement web moderne. L\'interface utilisateur offre des animations subtiles et sobre pour marquer l\'esthétique luxueuse des bijoux. L\'architecture évolutive permet d\'envisager de futures intégrations e-commerce que je prévois de réaliser dans un second temps.',
        image: '/imageProjets/eminence.png',
        link: 'https://eminence-virid.vercel.app/',
        techno: [
            {
                name: 'Next.js 14',
                description: 'Framework React pour le rendu côté serveur et la génération de sites statiques. Utilisé pour créer une expérience utilisateur fluide et performante.'
            },
            {
                name: 'TypeScript',
                description: 'Pour un typage statique et une meilleure maintenabilité du code, assurant une base solide pour le développement futur.'
            },
            {
                name: 'Tailwind CSS',
                description: 'Pour un stylage rapide et responsive, permettant de créer une interface utilisateur élégante et cohérente.'
            },
        ],
        fonctionnalite: [
            {
                name: 'Page d\'Accueil',
                description: 'Une introduction élégante avec une vidéo sur la section hero pour mettre en avant le luxe.'
            },
            {
                name: 'Collection Joaillerie',
                description: 'Présentation de la gamme de produits avec des images de haute qualité et des descriptions détaillées.'
            },
            {
                name: 'Pages Produits Dynamiques',
                description: 'Chaque bijou bénéficie d\'une page dédiée générée dynamiquement.'
            },

        ],

        accessibilite: [
            {
                name: 'Navigation au clavier',
                description: 'Optimisation de la navigation pour les utilisateurs qui n\'utilisent pas de souris.'
            },
            {
                name: 'Textes alternatifs',
                description: 'Ajout de descriptions détaillées pour toutes les images, améliorant l\'expérience des utilisateurs de lecteurs d\'écran.'
            },
            {
                name: 'Structure sémantique',
                description: 'Utilisation appropriée des balises HTML5 pour une meilleure compréhension de la structure du site par les technologies d\'assistance.'
            },
            {
                name: 'Contraste de couleurs',
                description: 'Choix de couleurs offrant un contraste suffisant pour une lisibilité optimale.'
            }
        ],
        prochainesEtapes: [
            {
                name: 'Intégration Backend',
                description: 'Développement d\'une API pour gérer dynamiquement les produits et les commandes.'
            },
            {
                name: 'Système de Panier',
                description: 'Implémentation d\'un panier d\'achat fonctionnel pour faciliter les transactions.'
            },
            {
                name: 'Page "La Maison Éminence"',
                description: 'Création d\'une section dédiée à l\'histoire et aux valeurs de la marque.'
            },
            {
                name: 'Moteur de Recherche',
                description: 'Ajout d\'une fonctionnalité de recherche avancée pour les produits.'
            },
            {
                name: 'Optimisation des Performances',
                description: 'Amélioration continue des temps de chargement et de l\'expérience utilisateur.'
            }
        ],
        github: 'https://github.com/HDZ65/Eminence',
    },

    // Chic&Trim
    {
        slug: 'chic-and-trim',
        title: 'Chic&Trim - Coiffure',
        description: 'Site vitrine dynamique et moderne pour un salon de coiffure fictif. Ce projet démontre ma maîtrise du développement front-end sans framework JavaScript. Il présente un design entièrement responsive, des animations personnalisées en JavaScript et GSAP, ainsi qu\'un carrousel d\'images fait sur mesure, le tout optimisé pour une navigation fluide sur tous les appareils.',
        image: '/imageProjets/chic&trim.png',
        link: 'https://chic-and-trim.vercel.app/',
        techno: [
            {
                name: 'HTML5',
                description: 'Utilisation des dernières fonctionnalités HTML5 pour une structure sémantique et accessible.'
            },
            {
                name: 'Tailwind CSS',
                description: 'Framework CSS utilisé pour un design responsive et une mise en page efficace.'
            },
            {
                name: 'JavaScript',
                description: 'Programmation côté client pour des interactions dynamiques et des animations personnalisées.'
            },
            {
                name: 'GSAP (GreenSock Animation Platform)',
                description: 'Bibliothèque d\'animation JavaScript pour des effets visuels fluides et impressionnants.'
            }
        ],
        fonctionnalite: [
            {
                name: 'Page d\'Accueil',
                description: 'Présentation attrayante de l\'entreprise avec des sections animées.'
            },
            {
                name: 'Page Équipe',
                description: 'La page est une mise en avant des coiffeurs du salon.'
            },
            {
                name: 'Page Galerie',
                description: 'Galerie d\'images des réalisations et des styles de coiffure proposés.'
            },
            {
                name: 'Carrousel Personnalisé',
                description: 'Implémentation d\'un carrousel d\'images sans librairie externe, en JavaScript.'
            },
            {
                name: 'Menu Burger Responsive',
                description: 'Navigation adaptative avec un menu burger pour les appareils mobiles.'
            }
        ],
        accessibilite: [
            {
                name: 'Structure Sémantique',
                description: 'Utilisation appropriée des balises HTML5 pour une meilleure compréhension par les technologies d\'assistance.'
            },
            {
                name: 'Navigation Clavier',
                description: 'Possibilité de naviguer dans le site en utilisant uniquement le clavier.'
            },
            {
                name: 'Contraste et Lisibilité',
                description: 'Choix de couleurs et de polices assurant une bonne lisibilité et un contraste adéquat.'
            }
        ],
        prochainesEtapes: [
            {
                name: 'Système de Réservation',
                description: 'Ajout d\'une fonctionnalité permettant aux clients de prendre rendez-vous en ligne.'
            },
            {
                name: 'Backend',
                description: 'Développement d\'un backend pour gérer les rendez-vous et les informations des clients.'
            },
            {
                name: 'Blog',
                description: 'Création d\'une section blog pour partager des conseils de coiffure et des nouvelles du salon.'
            },
            {
                name: 'Optimisation des Performances',
                description: 'Amélioration continue des temps de chargement et de l\'expérience utilisateur.'
            }
        ],
        github: 'https://github.com/HDZ65/chic-and-trim',
    },
];