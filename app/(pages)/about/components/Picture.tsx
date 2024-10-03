import { Box, Typography, Link } from "@mui/material";
import moi from './../../../../public/photoDeMoi.jpg';
import Image from "next/image";
export default function Picture({ className }: { className: string }) {
  return (
    <Box  
    className={className}

      borderRadius="12px" 
      display="flex" 
      flexDirection="column" 
      alignItems="center" 
      justifyContent="center" 
      overflow="hidden"
      sx={{
        backgroundColor: "var(--mui-palette-background-paper)",
        transition: 'all 1s ease',

        ":hover": {
            boxShadow: `0 0px 15px 0 var(--mui-palette-primary-main)`,

        },
      }}
    >
      <Image
        src={moi}
        alt="Picture"
        width={500}
        height={500}
        className="h-full w-full object-cover"
      />
    </Box>
  )
}