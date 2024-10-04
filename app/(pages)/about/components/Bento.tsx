import { Box, Link, Stack, Typography } from "@mui/material";
import Competences from "./Competences";
import Objectifs from "./Objectifs";
import Qui from "./Qui";
import Picture from "./Picture";
import { BentoGrid } from "@/app/components/ui/Bento-grid";


export default function Bento() {
    return (
            <BentoGrid>
                <Qui className="md:col-span-10" />
                {/* <Picture className="md:col-span-3" /> */}
                <Competences className="md:col-span-4" />
                <Objectifs className="md:col-span-6" />
            </BentoGrid>
    )
}