 

export interface Skill {
    name: string;
    description: string;
}

export const skills: Skill[] = [
    {
        name: "React",
        description: "Bibliothèque JavaScript pour créer des interfaces utilisateur interactives",
    },
    {
        name: "TypeScript",
        description: "Superset typé de JavaScript pour un développement plus sûr",
    },
    {
        name: "Node.js",
        description: "Environnement d'exécution JavaScript côté serveur",
    },
    {
        name: "MongoDB",
        description: "Base de données NoSQL orientée documents",
    },
    {
        name: "Express",
        description: "Framework web pour Node.js",
    },
    {
        name: "Next.js",
        description: "Framework React pour le rendu côté serveur",
    }
]; 