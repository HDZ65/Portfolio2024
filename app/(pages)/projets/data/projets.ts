export interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
  chips: string[];
}

export const projects: Project[] = [
  {
      slug: 'Élisabeth-Coaching',
      title: 'Élisabeth Coaching',
      description: 'Projet de stage de fin d\'année réalisé dans une entreprise, utilisant MongoDB, TailwindCSS et Next.js 14. J\'ai conçu le design, le frontend et le backend. Mon plus grand défi a été de créer un planning de réservation en temps réel avec des créneaux de 30 minutes. Le site comprend une interface administrateur pour gérer les réservations, les créneaux, la rédaction d\'articles de blog et la gestion des utilisateurs.',
      image: '/imageProjets/elisabeth.png',
      chips: ['Next.js', 'MongoDB', 'Typescript', 'Node.js', 'TailwindCSS'],
  },
  {
      slug: 'eminence',
      title: 'Éminence',
      description: 'Projet de site vitrine réalisé avec Next.js 14 et TailwindCSS. Ce projet a pour objectif de créer un site pour une entreprise de vente de bijoux de luxe, en mettant l\'accent sur un design élégant et raffiné. J\'ai opté pour des animations douces et un style minimaliste afin de mettre en valeur les bijoux. Le site comprend trois pages principales : la page d\'accueil, la page des produits et la page de présentation de l\'entreprise. Il s\'agit d\'un exemple de site vitrine sans backend.',
      image: '/imageProjets/eminence.png',
      chips: ['Next.js', 'TailwindCSS', 'Typescript'],
  },
  {
      slug: 'Chic&Trim',
      title: 'Chic&Trim',
      description: 'Site vitrine réalisé en HTML, TailwindCSS et JavaScript pour un salon de coiffure. Le site présente un style très affirmé et est orienté vers la jeune génération. J\'ai utilisé la librairie GSAP pour les animations, c\'était la première fois que j\'utilisais GSAP. Le site est responsive et fonctionne sur tous les appareils. Il n\'y a pas de backend.',
      image: '/imageProjets/chic&trim.png',
      chips: ['JavaScript', 'GSAP', 'HTML', 'TailwindCSS', 'CSS'],
  },
  {
      slug: 'Player-Audio',
      title: 'Player Audio',
      description: 'Projet de lecteur audio réalisé en HTML, CSS et JavaScript. Ce lecteur audio inclut des fonctionnalités de base telles que la lecture, la pause et le contrôle du volume. Le site est entièrement responsive et fonctionne sur tous les appareils, offrant une expérience utilisateur fluide. J\'ai utilisé TailwindCSS pour le style et GSAP pour les animations, ce qui rend l\'interface utilisateur attrayante et moderne. C\'était la première fois que j\'utilisais GSAP.',
      image: '/imageProjets/playeraudio.png',
      chips: ['JavaScript', 'GSAP', 'HTML', 'TailwindCSS', 'CSS'],
  },
  {
      slug: 'Todo-List',
      title: 'Todo List',
      description: 'Projet de todo list réalisé en HTML, CSS et JavaScript. Ce projet fait partie de mes premières expériences avec JavaScript et CSS. Il permet de créer, lire, mettre à jour et supprimer des tâches. Le site est responsive et fonctionne sur tous les appareils, offrant une interface utilisateur simple et intuitive.',
      image: '/imageProjets/todolist.png',
      chips: ['JavaScript', 'HTML', 'CSS'],
  },
];