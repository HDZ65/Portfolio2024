"use client";

import { BorderAll, Padding } from "@mui/icons-material";
import { PaletteColor, PaletteColorOptions } from "@mui/material";
import { lightBlue } from "@mui/material/colors";

import { extendTheme } from '@mui/material/styles';
// Déclarations de modules pour les types personnalisés
declare module '@mui/material/styles' {
    interface Palette {
        backgroundImage: PaletteColor;
    }
    interface PaletteOptions {
        backgroundImage?: PaletteColorOptions;
    }
}

declare module '@mui/material' {
    interface Color {
        backgroundImage: true;
    }
}

declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        backgroundImage: true;
    }
}



// Extension du thème MUI
const theme = extendTheme({
    typography: {
        fontFamily: "'Montserrat', 'Switzer', sans-serif",
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
        
    },
    shape: {
        borderRadius: 30,

    },
    components: {
        MuiTypography: {
            styleOverrides: {
                root: {
                    fontWeight: 400,
                    fontSize: 16,
                    lineHeight: 1.5,
                    letterSpacing: '-0.015em', // Ajustement général pour Montserrat
                    marginBottom: "0",

                },
                h1: {
                    fontSize: 36,

                    lineHeight: 1.1,
                    letterSpacing: '-0.025em', // Ajusté pour les grands titres
                    marginBottom: "0",
                    "@media (min-width: 850px)": {
                        fontSize: 38,
                        fontWeight: 400,
                        letterSpacing: '-0.03em', // Légèrement plus serré pour les grands écrans
                    },
                    "@media (min-width: 2000px)": {
                        fontSize: 40,
                        letterSpacing: '-0.032em', // Encore plus serré pour les très grands écrans
                    },
                },
                h2: {
                    fontSize: 28,
                    fontWeight: 300,
                    lineHeight: 1.3,
                    letterSpacing: '-0.02em', // Ajusté pour les sous-titres
                    marginBottom: "0",
                    "@media (min-width: 850px)": {
                        fontSize: 32,
                    },


                },
                h3: {
                    fontSize: 20,
                    fontWeight: 400,
                    lineHeight: 1.4,
                    letterSpacing: '-0.015em', // Légèrement moins serré que h2
                    marginBottom: "0",
                },
                h4: {
                    fontSize: 18,
                    lineHeight: 1.35,
                    letterSpacing: '-0.01em', // Espacement modéré pour h4
                    marginBottom: "0",
                },
                h5: {
                    fontSize: 24,
                    lineHeight: 1.35,
                    letterSpacing: '-0.01em', // Similaire à h4
                    marginBottom: "0",
                    "@media (max-width: 850px)": {
                        fontSize: 18,
                        letterSpacing: '-0.005em', // Légèrement plus ouvert pour les petits écrans
                    },
                },
                body1: {
                    fontSize: 19,
                    lineHeight: 1.5,
                    letterSpacing: '0em', // Espacement normal pour le texte principal
                    marginBottom: "0",
                    fontWeight: 400,
                },
                body2: {
                    fontSize: 17,
                    lineHeight: 1.5,
                    letterSpacing: '0.01em', // Légèrement plus ouvert pour le texte secondaire
                    marginBottom: "0",
                    fontWeight: 300,
                },
            },
        },

        MuiStack: {
            styleOverrides: {
                root: {
                    margin: "0 auto",

                },
            },
        },
        MuiButtonBase: {
            styleOverrides: {
                root: {
                    backgroundColor: "transparent",
                    boxShadow: "none",
                },
            },
        },
        MuiFab: {
            styleOverrides: {
                root: {
                    backgroundColor: "transparent",
                    height: "2.5rem",
                    width: "2.5rem",
                    boxShadow: "none",
                    "&:hover": {
                        boxShadow: "none",
                    },
                },
            },
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    backgroundColor: "transparent",
                    "&:hover": {
                        backgroundColor: "transparent",
                    },
                },

            },
        },
        MuiButton: {
            styleOverrides: {
                root: {

                    whiteSpace: "nowrap",
                    width: "100%",
                    textTransform: 'none',
                    fontWeight: 300,
                    fontSize: 18,
                    boxShadow: "none",
                    color: "white",
                    "&:hover": {
                        boxShadow: "none",
                    },
                },
                outlined: {
                    color: "var(--mui-palette-text-primary)",
                    backgroundColor: "transparent",
                },
                contained: {
                    // Styles pour les boutons contenus
                },
                text: {
                    width: "fit-content",
                    padding: "0.2rem 1rem",
                    "&:hover": {
                        backgroundColor: "var(--mui-palette-primary-main)",
                    },
                },
            },
        },
        MuiContainer: {
            styleOverrides: {
                root: {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "2rem 0",
                },
            },
        },
        MuiCircularProgress: {
            styleOverrides: {
                root: {
                    color: "var(--mui-palette-text-primary)",
                    "--CircularProgress-size": "58px",
                    "--CircularProgress-trackThickness": "3px",
                    "--CircularProgress-progressThickness": "1px"
                },
            }
        },
        MuiBottomNavigation: {
            styleOverrides: {
                root: {
                    position: "fixed",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    zIndex: 500,
                    backgroundColor: "var(--mui-palette-background-paper)",
                },
            },
        },

        MuiCard: {
            styleOverrides: {
                root: {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "0px",
                    gap: "1.5rem",
                    width: "100%",
                    backgroundColor: "transparent",

                },
            },
        },
        MuiCardMedia: {
            styleOverrides: {
                root: {
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "12px",
                },
            },
        },
        MuiCardContent: {
            styleOverrides: {
                root: {
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    height: "100%",
                    width: "100%",
                    gap: "1.5rem",

                    padding: "0",
                    paddingBottom: "0px",
                    "&:last-child": {
                        paddingBottom: "0",
                    },
                },
            },
        },
        MuiSpeedDialIcon: {
            styleOverrides: {
                root: {
                    color: "white",
                },
            },
        },
        MuiSpeedDial: {
            styleOverrides: {
                root: {
                    color: "white",
                },
            },
        },
        MuiSpeedDialAction: {
            styleOverrides: {
                fab: {
                    backgroundColor: "transparent",
                    color: "white",
                    "&:hover": {
                        backgroundColor: "var(--mui-palette-primary-main)",
                    },
                },
            },
        },
        MuiList: {
            styleOverrides: {
                root: {
                    padding: "0",
                    paddingTop: "0",
                    paddingBottom: "0",
                    marginTop: "0",
                    marginBottom: "0",
                },
            },
        },
        MuiListItem: {
            styleOverrides: {
                root: {
                    padding: "0",
                },
            },
        },
        MuiChip: {
            styleOverrides: {
                root: {
                },
                label: {
                    paddingLeft: "1.5rem",
                    paddingRight: "1.5rem",
                    paddingTop: "2rem",
                    paddingBottom: "2rem",
                },
            },
        },

    },
    colorSchemes: {
        light: {
            palette: {
                primary: {
                    main: lightBlue[600], // bleu
                    mainChannel: "#1D1D1F", // blanc
                },
                secondary: {
                    main: "#86868b", // bleu clair
                },
                background: {
                    default: "#FFF", // noir
                    paper: "#f7f7f7f7", // gris foncé
                },
                text: {
                    primary: "#1D1D1F", // blanc
                    secondary: "#9b9ba1", // noir bleuté
                },
                common: {
                    onBackgroundChannel: "#1D1D1F", // blanc
                },
            },
        },
    },
});

export default theme;