import { Box, Link, Typography, List, ListItem, ListItemText, Chip } from "@mui/material";
import { IconArrowRight, IconBrandGithub } from "@tabler/icons-react";
import { Project } from "../../data/projets";

export default function Details({ project }: { project: Project }) {
    return (
        <Box
            display={{ xs: 'flex' }}
            justifyContent={'start'}
            alignItems={'start'}
            flexDirection={'column'}
            gap={6}
            padding={{ xs: 2, md: 6 }}
        >
            <Box display={'flex'} flexDirection={'column'} gap={3} >
                <Box display={'flex'} flexDirection={'column'} alignItems={'center'} gap={3}>
                    <Box width="100%" display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'} gap={6} sx={{ borderBottom: '1px solid', borderColor: 'text.secondary', paddingBottom: '1rem' }}>
                        <Link sx={{ fontWeight: 'bold', textDecoration: 'none', '&:hover': { textDecoration: 'underline', color: 'primary.main' } }} display={'flex'} flexDirection={'row'} alignItems={'center'} gap={1} href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`Visiter le site du projet ${project.title}`}>
                            {project.title}
                            <Typography>voir le projet</Typography>
                        </Link>
                        <Link sx={{ marginRight: '1rem', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 1,  textDecoration: 'none', '&:hover': { textDecoration: 'underline', color: 'primary.main' } }} href={project.github} target="_blank" rel="noopener noreferrer">
                            GitHub
                            <IconBrandGithub size={24} />
                        </Link>
                    </Box>
                    <Box display={'flex'} flexDirection={'row'} flexWrap={'wrap'} gap={3}>
                        {project.techno.map((tech, index) => (
                            <Chip sx={{  outlineColor: 'primary.main' }} variant="outlined" key={index} label={tech.name} />
                        ))}
                    </Box>
                </Box>

                <Box display={'flex'} flexDirection={'column'} gap={1}>
                    <Typography variant='body1' >
                        {project.description}
                    </Typography>

                </Box>

            </Box>
            <Box display={'flex'} flexDirection={'column'} gap={6}  >
                <Box  display={'flex'} flexDirection={'column'} gap={3} >
                    <Typography sx={{ }} variant='h3' >
                        Fonctionnalités :
                    </Typography>
                    <List>
                        {project.fonctionnalite.map((feature, index) => (
                            <ListItem key={index}>
                                <ListItemText
                                    primary={feature.name}
                                    secondary={feature.description}
                                    primaryTypographyProps={{  marginBottom: '0.2rem' }}
                                    secondaryTypographyProps={{ color: 'text.secondary',  }}
                                />
                            </ListItem>
                        ))}
                    </List>
                </Box>
                {project.prochainesEtapes && (
                    <Box  display={'flex'} flexDirection={'column'} gap={3} marginBottom="60px" >
                        <Typography sx={{  }} variant='h3' >
                            Prochaines étapes :
                        </Typography>
                        <List >
                            {project.prochainesEtapes.map((step, index) => (
                                <ListItem key={index}>
                                    <ListItemText
                                        primary={step.name}
                                        secondary={step.description}
                                        primaryTypographyProps={{  marginBottom: '0.2rem' }}
                                        secondaryTypographyProps={{  color: 'text.secondary',  }}
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