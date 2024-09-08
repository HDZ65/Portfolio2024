'use client'

import { Box, Link, Typography, List, ListItem, ListItemText, Chip, IconButton, Button } from "@mui/material";
import { useProjectContext } from "@/app/(pages)/projets/context/useProjectContext";
import { IconArrowRight, IconBrandGithub } from "@tabler/icons-react";

export default function ProjectDetail() {
    const { openProject } = useProjectContext();

    if (!openProject) return null;

    return (
        <Box 
            width={'60%'} 
            minHeight={'100%'} 
            maxHeight={'100%'} 
            display={{xs: 'none', md: 'flex'}}
            justifyContent={'start'} 
            alignItems={'start'} 
            flexDirection={'column'} 
            gap={6}
        >
            <Box display={'flex'} flexDirection={'column'} gap={3 } width={'100%'}>
                <Box display={'flex'} flexDirection={'column'} alignItems={'cente'} gap={3 }>
                    <Box display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'} gap={6} sx={{borderBottom: '1px solid', borderColor: 'text.secondary', paddingBottom: '1rem'}}>
                        <Link sx={{ fontWeight: 'bold', fontSize: '24px', textDecoration: 'none', '&:hover': { textDecoration: 'underline', color: 'primary.main' } }} display={'flex'} flexDirection={'row'} alignItems={'center'} gap={1} href={openProject.link} target="_blank" rel="noopener noreferrer">
                            {openProject.title}
                            <IconArrowRight size={24} />
                        </Link>
                        <Link sx={{ marginRight: '1rem', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 1, fontWeight: 'bold', fontSize: '18px', textDecoration: 'none', '&:hover': { textDecoration: 'underline', color: 'primary.main' } }} href={openProject.github} target="_blank" rel="noopener noreferrer">
                            GitHub
                            <IconBrandGithub size={24} />
                        </Link>
                    </Box>
                    <Box display={'flex'} flexDirection={'row'} flexWrap={'wrap'} gap={3 }>
                        {openProject.techno.map((tech, index) => (
                            <Chip sx={{ fontSize: '14px', outlineColor: 'primary.main' }} variant="outlined" key={index} label={tech.name} />
                        ))}
                    </Box>
                </Box>

                <Box display={'flex'} flexDirection={'column'} gap={1}>
                    <Typography variant='body1' >
                        {openProject.description}
                    </Typography>

                </Box>

            </Box>
            <Box display={'flex'} flexDirection={'row'} gap={6} justifyContent={'space-between'} width={'100%'}>
                <Box className="border-l px-4" display={'flex'} flexDirection={'column'} gap={3 } width={'50%'}>
                    <Typography sx={{ fontWeight: 'bold', fontSize: '24px' }} variant='h3' >
                        Fonctionnalités :
                    </Typography>
                    <List>
                        {openProject.fonctionnalite.map((feature, index) => (
                            <ListItem key={index}>
                                <ListItemText
                                    primary={feature.name}
                                    secondary={feature.description}
                                    primaryTypographyProps={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '0.2rem' }}
                                    secondaryTypographyProps={{ fontWeight: 'light', color: 'text.secondary', fontSize: '14px' }}
                                />
                            </ListItem>
                        ))}
                    </List>
                </Box>
                {openProject.prochainesEtapes && (
                    <Box className="border-l px-4" display={'flex'} flexDirection={'column'} gap={3 } width={'50%'}>
                        <Typography sx={{ fontWeight: 'bold', fontSize: '24px' }} variant='h3' >
                            Prochaines étapes :
                        </Typography>
                        <List >
                            {openProject.prochainesEtapes.map((step, index) => (
                                <ListItem key={index}>
                                    <ListItemText
                                        primary={step.name}
                                        secondary={step.description}
                                        primaryTypographyProps={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '0.2rem' }}
                                        secondaryTypographyProps={{ fontWeight: 'light', color: 'text.secondary', fontSize: '14px' }}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                )}
            </Box>
        </Box>
    )
}