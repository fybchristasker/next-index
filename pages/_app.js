import React from 'react'
import { StyledEngineProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider } from '@emotion/react'
import { ThemeProvider } from 'next-themes'
import { ContextProvider } from '@/utils/store'
import Head from '@/components/Header'
import '@/styles/global.css'
import createEmotionCache from '@/utils/createEmotionCache'

const clientSideEmotionCache = createEmotionCache()

const MyApp = ({ Component, emotionCache = clientSideEmotionCache, pageProps }) => {
  return (
    <StyledEngineProvider injectFirst>
      <CacheProvider value={emotionCache}>
        <Head component={Component} />
        <ContextProvider>
          <ThemeProvider attribute="class" defaultTheme="system">
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </ContextProvider>
      </CacheProvider>
    </StyledEngineProvider>
  )
}

export default MyApp
