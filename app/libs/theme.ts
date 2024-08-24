"use client";

import { experimental_extendTheme, PaletteColor, PaletteColorOptions } from "@mui/material";
import { lightBlue } from "@mui/material/colors";
import { Roboto } from "next/font/google";

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
const theme = experimental_extendTheme({
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
                    fontSize: 18,
                    lineHeight: 1.5,
                    letterSpacing: 0.3,
                },
                h1: {
                    fontSize: 36,
                    lineHeight: 1.1, 
                    letterSpacing: 0.3, 
                },
                h2: {
                    fontSize: 24,
                    fontWeight: 300,
                    lineHeight: 1.3, 
                    letterSpacing: 0.4, 
                },
                h3: {
                    fontSize: 18,
                    fontWeight: 400,
                    lineHeight: 1.4, 
                    letterSpacing: 0.3, 
                },
                h4: {
                    fontSize: 18,
                    lineHeight: 1.35, 
                    letterSpacing: 0.35, 
                },
            },
        },
        MuiStack: {
            styleOverrides: {
                root: {
                    padding: "1.6rem",
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
                    backgroundColor: "var(--mui-palette-background-paper)",
                    height: "2.5rem",
                    width: "2.5rem",
                    boxShadow: "none",
                    "&:hover": {
                        boxShadow: "none",
                        backgroundColor: "var(--mui-palette-background-paper)",
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
            },
        },
        MuiContainer: {
            styleOverrides: {
                root: {
                    padding: "1.6rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "3.2rem",
                    marginBottom: "5rem",
                    "@media (min-width: 600px)": {
                        paddingLeft: 0,
                        paddingRight: 0,
                    },
                    "@media (min-width: 1200px)": {
                        maxWidth: "1700px",
                    },
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
        MuiInputBase: {
            styleOverrides: {
                root: {
                    borderColor: "var(--mui-palette-text-primary)",
                    color: "var(--mui-palette-text-primary)",
                },
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: "var(--mui-palette-text-primary)",
                    borderColor: "var(--mui-palette-text-primary)",
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    borderColor: "var(--mui-palette-text-primary)",
                    color: "var(--mui-palette-text-primary)",
                },
            },
        },        
        
    },
    colorSchemes: {
        light: {
            palette: {
                primary: {
                    main: lightBlue[600], // bleu
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
                    primary: lightBlue[50], // blanc
                    secondary: lightBlue[50], // noir bleuté
                },
            },
        },
    },
});

export default theme;