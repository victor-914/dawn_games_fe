'use client'
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], display: 'swap' })
const theme = createTheme({
  palette: { mode: 'dark' },
  typography: { fontFamily: inter.style.fontFamily },
  components: {
    MuiButton: { styleOverrides: { root: { textTransform: 'none' } } }
  }
})

export default function ThemeRegistry({ children }) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  )
}