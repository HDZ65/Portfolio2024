import { Box, Link, Stack, Typography } from "@mui/material";
import Competences from "./Competences";
import Objectifs from "./Objectifs";
import Qui from "./Qui";
import Picture from "./Picture";
import { BentoGrid } from "@/app/components/ui/Bento-grid";


export default function Bento() {
    return (
        <Stack sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.6rem',
            justifyContent: 'center',
            component: 'section',
            width: '100%',
        }}>
            <BentoGrid className=" md:auto-rows-[20rem]">

                <Qui className="col-span-6" />
                <Picture className="col-span-2" />
                <Competences className="col-span-4" />
                <Objectifs className="col-span-4" />
            </BentoGrid>
        </Stack>
    )
}