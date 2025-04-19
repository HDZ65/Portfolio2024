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
        fontFamily: "'SF Pro Display', 'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif",
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 600,
        h1: {
            fontSize: '2.5rem', // 40px
            fontWeight: 500,
            lineHeight: 1.1,
            letterSpacing: '-0.025em',
            marginBottom: 0,
            '@media (min-width: 850px)': {
                fontSize: '3rem', // 48px
                letterSpacing: '-0.03em',
            },
        },
        h2: {
            fontSize: '2rem', // 32px
            fontWeight: 500,
            lineHeight: 1.2,
            letterSpacing: '-0.02em',
            marginBottom: 0,
            '@media (min-width: 850px)': {
                fontSize: '2.25rem', // 36px
            },
        },
        h3: {
            fontSize: '1.75rem', // 28px
            fontWeight: 500,
            lineHeight: 1.2,
            letterSpacing: '-0.015em',
            color: '#B88746',
            marginBottom: 0,
            '@media (min-width: 850px)': {
                fontSize: '2rem', // 32px
            },
        },
        h4: {
            fontSize: '1.5rem', // 24px
            fontWeight: 500,
            lineHeight: 1.3,
            letterSpacing: '-0.01em',
            marginBottom: 0,
        },
        h5: {
            fontSize: '1.25rem', // 20px
            fontWeight: 500,
            lineHeight: 1.3,
            letterSpacing: '-0.01em',
            marginBottom: 0,
            '@media (min-width: 850px)': {
                fontSize: '1.5rem', // 24px
            },
        },
        body1: {
            fontSize: '1.125rem', // 18px
            fontWeight: 400,
            lineHeight: 1.5,
            letterSpacing: '-0.01em',
            marginBottom: 0,
            '@media (min-width: 850px)': {
                fontSize: '1.25rem', // 20px
            },
        },
        body2: {
            fontSize: '1rem', // 16px
            fontWeight: 400,
            lineHeight: 1.5,
            letterSpacing: '0',
            marginBottom: 0,
            '@media (min-width: 850px)': {
                fontSize: '1.125rem', // 18px
            },
        },
    },
    shape: {
        borderRadius: 30,

    },
    components: {
        MuiTypography: {
            styleOverrides: {
                root: {
                    marginBottom: 0,
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
                    mainChannel: "#2C2C2C", // noir
                },
                secondary: {
                    main: "#86868b", // bleu clair
                },
                background: {
                    default: "#FFF", // blanc
                    paper: "#f7f7f7f7", // gris foncé
                },
                text: {
                    primary: "#2C2C2C", // noir
                    secondary: "#9b9ba1", // noir bleuté
                },
                common: {
                    onBackgroundChannel: "#2C2C2C", // blanc
                },
            },
        },
    },
});

export default theme;