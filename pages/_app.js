import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider } from '@emotion/react'
import { ContextProvider } from '@/utils/store'
import Head from '@/components/Header'
import { lightTheme } from '@/utils/theme'
import Layout from '@/components/Layout'
import createEmotionCache from '@/utils/createEmotionCache'
import '@/styles/global.css'

const clientSideEmotionCache = createEmotionCache()

const MyApp = ({ Component, emotionCache = clientSideEmotionCache, pageProps }) => {
  return (
    <ContextProvider>
      <CacheProvider value={emotionCache}>
        <Head component={Component} />
        <ThemeProvider theme={lightTheme}>
          <CssBaseline />
          <Layout />
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    </ContextProvider>
  )
}

export default MyApp
