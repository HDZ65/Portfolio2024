"use client";

import { BorderAll, Padding } from "@mui/icons-material";
import {  PaletteColor, PaletteColorOptions } from "@mui/material";
import { lightBlue } from "@mui/material/colors";
import { Roboto } from "next/font/google";
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

// Configuration de la police Roboto
const roboto = Roboto({
    subsets: ["latin"],
    weight: ["300", "400", "500", "700"],
    display: "swap",
});

// Extension du thème MUI
const theme = extendTheme({
    typography: {
        fontFamily: roboto.style.fontFamily,
    },
    shape: {
        borderRadius: 30,

    },
    components: {
        MuiTypography: {
            styleOverrides: {
                root: {
                    fontWeight: 300,
                    fontSize: 16,
                    lineHeight: 1.5,
                    letterSpacing: 0.5, 
                    marginBottom: "0",

                },
                h1: {
                    fontSize: 36,

                    lineHeight: 1.1,
                    letterSpacing: 0.5, // Adapté pour une taille de police de 36px
                    marginBottom: "0",
                    "@media (min-width: 850px)": {
                        fontSize: 42,
                        fontWeight: 300,
                    },
                },
                h2: {
                    fontSize: 28,
                    fontWeight: 300,
                    lineHeight: 1.3,
                    letterSpacing: 0.4, // Adapté pour une taille de police de 28px
                    marginBottom: "0",
                    "@media (min-width: 850px)": {
                        fontSize: 32,
                    },

                },
                h3: {
                    fontSize: 18,
                    fontWeight: 400,
                    lineHeight: 1.4,
                    letterSpacing: 0.3, // Adapté pour une taille de police de 18px
                    marginBottom: "0",
                },
                h4: {
                    fontSize: 18,
                    lineHeight: 1.35,
                    letterSpacing: 0.4, // Espacement légèrement augmenté pour une meilleure lisibilité des sous-titres
                    marginBottom: "0",
                },
                h5: {
                    fontSize: 24,
                    lineHeight: 1.35,
                    letterSpacing: 0.4, // Adapté pour une taille de police de 24px
                    marginBottom: "0",
                },
                body1: {
                    fontSize: 18,
                    lineHeight: 1.5,
                    letterSpacing: 0.5,
                    marginBottom: "0",
                },
                body2: {
                    fontSize: 16,
                    lineHeight: 1.5,
                    letterSpacing: 0.5,
                    marginBottom: "0",
                },
            },
        },
        
        MuiStack: {
            styleOverrides: {
                root: {
                    maxWidth: "1450px",
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
        MuiButton: {
            styleOverrides: {
                root: {

                    whiteSpace: "nowrap",
                    width: "100%",
                    textTransform: 'none',
                    fontWeight: 300,
                    fontSize: 16,
                    boxShadow: "none",
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
        MuiSpeedDialAction: {
            styleOverrides: {
                fab: {
                    backgroundColor: "transparent",
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
                    main: lightBlue[700], // bleu
                    mainChannel: "225 225 225", // blanc
                },
                secondary: {
                    main: "#EDF9FF", // bleu clair
                },
                background: {
                    default: "#060808", // noir
                    paper: "#060808", // gris foncé
                },
                text: {
                    primary: "#f1f1f1", // blanc
                    secondary: "#f1f1f1", // noir bleuté
                },
                common: {
                    onBackgroundChannel: "225 225 225", // blanc
                },
            },
        },
    },
});

export default theme;