
import { Box, Typography } from "@mui/material";
import Link from "next/link";

import { useEffect, useRef, useState } from "react";

// Définition du type pour les compétences
type Skill = {
    icon: React.ComponentType<{ className: string }>;
    name: string;
    url: string;
};

 

export default function Competences({ className }: { className: string }) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            {
                threshold: 0.1,
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <Box
            ref={ref}
            className={className}
            sx={{
                backgroundColor: isVisible ? "black" : "var(--mui-palette-background-paper)",
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
                <Typography variant="h2" component="h2" sx={{ color: isVisible ? "white" : "inherit" }}>
                    🛠️ Mes compétences
                </Typography>
                <Box display="flex" gap={{ xs: "0.6rem", md: "1.5rem" }}>
 
                </Box>
            </Box>
            <Typography sx={{ color: isVisible ? "white" : "inherit" }}>
                J'ai travaillé sur plusieurs projets avec des technologies telles que <strong>React</strong>, <strong>Next.js</strong>, <strong>Tailwind CSS</strong>, <strong>Node.js</strong>, <strong>Express</strong>, <strong>MongoDB</strong>. J'ai aussi un projet en cours avec <strong>Symfony</strong> pour approfondir mes connaissances de ce framework.
            </Typography>
        </Box>
    )
}