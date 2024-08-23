import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { CssBaseline, Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material";
import theme from './theme';



export default function ThemeProvider( {children}: {children: React.ReactNode} ) {
  return (
    <AppRouterCacheProvider>
        <CssVarsProvider theme={theme}>
            <CssBaseline />
            {children}
        </CssVarsProvider>
    </AppRouterCacheProvider>
  )
}