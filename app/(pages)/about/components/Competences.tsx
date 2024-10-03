import JavaScriptIcon from "@/app/components/ui/icons/JavaScriptIcon";
import MongoDBIcon from "@/app/components/ui/icons/MongoDBIcon";
import NextIcon from "@/app/components/ui/icons/NextIcon";
import ReactIcon from "@/app/components/ui/icons/ReactIcon";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import PhpIcon from "@/app/components/ui/icons/PhpIcon";
// Définition du type pour les compétences
type Skill = {
    icon: React.ComponentType<{ className: string }>;
    name: string;
    url: string;
};

// Liste des compétences avec leurs URLs
const skills: Skill[] = [
    { icon: PhpIcon, name: "Php", url: "https://www.php.net/" },
    { icon: JavaScriptIcon, name: "JavaScript", url: "https://developer.mozilla.org/fr/docs/Web/JavaScript" },
    { icon: ReactIcon, name: "React", url: "https://reactjs.org/" },
    { icon: NextIcon, name: "Next.js", url: "https://nextjs.org/" },
    { icon: MongoDBIcon, name: "MongoDB", url: "https://www.mongodb.com/" },
];

export default function Competences({ className }: { className: string }) {
    return (
        <Box
            className={className}

            sx={{
                backgroundColor: "var(--mui-palette-background-paper)",
                transition: 'all 1s ease',
                ":hover": {
                    boxShadow: `0 0px 15px 0 var(--mui-palette-primary-main)`,
                },
            }}
            borderRadius="12px"
            padding={{ xs: "1.6rem", md: "2rem" }}
            display="flex"
            flexDirection="column"
            alignItems="start"
            justifyContent="start"
            gap={{ xs: "1.6rem", md: "2rem" }}
        >
            <Box display="flex" flexDirection="column" gap={{ xs: "0.6rem", md: "1.5rem" }}>
                <Typography variant="h2" component="h2">
                    🛠️ Mes compétences
                </Typography>
                <Box display="flex" gap={{ xs: "0.6rem", md: "1.5rem" }}>
                    {skills.map((skill, index) => (
                        <Link
                            key={index}
                            href={skill.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Voir le site officiel de ${skill.name}`}
                        >
                            <Box
                                sx={{
                                    ":hover": {
                                        boxShadow: `0 0px 15px 0 var(--mui-palette-primary-main)`,
                                    },
                                }}
                                className="h-10 w-10 rounded-full flex items-center justify-center bg-white shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]"
                            >
                                <skill.icon className="w-6 h-6" />
                            </Box>
                        </Link>
                    ))}
                </Box>
            </Box>
            <Typography>
                J'ai travaillé sur plusieurs projets avec des technologies telles que <strong>React</strong>, <strong>Next.js</strong>, <strong>Tailwind CSS</strong>, <strong>Node.js</strong>, <strong>Express</strong>, <strong>MongoDB</strong>. J'ai aussi un projet en cours avec <strong>Symfony</strong> pour approfondir mes connaissances de ce framework.
            </Typography>
        </Box>
    )
}