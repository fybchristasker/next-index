import * as React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider } from '@emotion/react'
import Head from '@/components/Header'
import { lightTheme } from '@/utils/theme'
import createEmotionCache from '@/utils/createEmotionCache'
import '@/styles/global.css'

const clientSideEmotionCache = createEmotionCache()

const MyApp = ({ Component, emotionCache = clientSideEmotionCache, pageProps }) => {
  return (
    <CacheProvider value={emotionCache}>
      <Head component={Component} />
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  )
}

export default MyApp
