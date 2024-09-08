import { Box, Typography, Link } from "@mui/material";
import moi from './../../../../public/photoDeMoi.jpg';
import Image from "next/image";
export default function Picture({ className }: { className: string }) {
  return (
    <Box  
    className={className}

      borderRadius="30px" 
      display="flex" 
      flexDirection="column" 
      alignItems="center" 
      justifyContent="center" 
      overflow="hidden"
      sx={{
        backdropFilter: "blur(10px)", // Effet de flou
        boxShadow: "0 0px 10px 0 rgba(2, 136, 209, 0.37)", // Ombre légère
        border: "1px solid rgba(255, 255, 255, 0.18)", // Bordure subtile
        color: "#ffffff", // Assurez-vous que le texte est lisible sur le nouveau fond
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