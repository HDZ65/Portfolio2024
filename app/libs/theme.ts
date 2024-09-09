"use client";

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

// Ajoutez cette déclaration de module en haut du fichier
declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        'data-large-text': true;
        'data-high-contrast': true;
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
        h1: {
            fontSize: 36,
            fontWeight: 300,
            lineHeight: 1.1,
            letterSpacing: '-0.005em',
            marginBottom: "0",
            "@media (min-width: 850px)": {
                fontSize: 42,
                lineHeight: 1.07143, // 45/42
            },
        },
        h2: {
            fontSize: 28,
            fontWeight: 300,
            lineHeight: 1.3,
            letterSpacing: '0.0029em',
            marginBottom: "0",
            "@media (min-width: 850px)": {
                fontSize: 32,
                lineHeight: 1.21875, // 39/32
            },
        },
        h3: {
            fontSize: 20,
            fontWeight: 500,
            lineHeight: 1.25, // 30/24
            letterSpacing: '0.03em',
            marginBottom: "0",
        },
        h4: {
            fontSize: 20,
            fontWeight: 300,
            lineHeight: 1.35,
            letterSpacing: '0.03em',
            marginBottom: "0",
        },
        h5: {
            fontSize: 18,
            fontWeight: 400,
            lineHeight: 1.38889, // 25/18
            letterSpacing: '0.001em',
            marginBottom: "0",
        },
        body1: {
            fontSize: 18,
            fontWeight: 400,
            lineHeight: 1.5, // 27/18
            letterSpacing: 0.8,
            marginBottom: "0",
        },
        body2: {
            fontSize: 16,
            fontWeight: 400,
            lineHeight: 1.5, // 24/16
            letterSpacing: 0.5,
            marginBottom: "0",
        },
        button: {
            fontSize: 16,
            fontWeight: 500,
            lineHeight: 1.375, // 22/16
            textTransform: 'none',
        },
        caption: {
            fontSize: 13,
            fontWeight: 400,
            lineHeight: 1.38462, // 18/13
            letterSpacing: '0.002em',
        },
        overline: {
            fontSize: 11,
            fontWeight: 500,
            lineHeight: 1.36364, // 15/11
            letterSpacing: '0.006em',
            textTransform: 'uppercase',
        },
    },
    shape: {
        borderRadius: 30,

    },
    components: {
        MuiTypography: {
            styleOverrides: {
                root: {
                    marginBottom: "0",
                },
            },
            variants: [
                {
                    props: { variant: 'data-large-text' },
                    style: {
                        fontSize: '20px',
                        lineHeight: 1.6,
                        '&.MuiTypography-body2': {
                            fontSize: '18px',
                        },
                    },
                },
                {
                    props: { variant: 'data-high-contrast' },
                    style: {
                        color: '#000000',
                        '@media (prefers-color-scheme: dark)': {
                            color: '#FFFFFF',
                        },
                    },
                },
            ],
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
                    fontWeight: 500,
                    fontSize: 16,
                    letterSpacing: 0.4,
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
                    color: "var(--mui-palette-text-primary)",
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
                    paddingLeft: "1rem",
                    paddingRight: "1rem",
                    paddingTop: "0",
                    paddingBottom: "0",
                },
            },
        },

    },
    colorSchemes: {
        light: {
            palette: {
                primary: {
                    main: lightBlue[700], // bleu
                    mainChannel: "245 245 247", // blanc
                },
                secondary: {
                    main: "#9B9BA1", // bleu clair
                },
                background: {
                    default: "#060808", // noir
                    paper: "#060808", // gris foncé
                },
                text: {
                    primary: "#f5f5f7", // blanc
                    secondary: "#9B9BA1", 
                },
                common: {
                    onBackgroundChannel: "#f5f5f7", // blanc
                },
                contrastThreshold: 4.5, // Augmente le seuil de contraste
            },
        },
    },
});

export default theme;