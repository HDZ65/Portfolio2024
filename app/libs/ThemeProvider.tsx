import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { CssBaseline, ThemeProvider} from "@mui/material";
import theme from './theme';
import { useMemo } from 'react';




export default function MuiThemeProvider( {children}: {children: React.ReactNode} ) {
  const memoizedTheme = useMemo(() => theme, []);
  return (
    <AppRouterCacheProvider >
        <ThemeProvider theme={memoizedTheme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    </AppRouterCacheProvider>
  )
}