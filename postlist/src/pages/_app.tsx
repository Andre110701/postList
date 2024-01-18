import { theme } from '../components/designSystem/theme'
import { _api } from '@iconify/react'
import fetch from 'cross-fetch'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import '../styles/app.css'
import GlobalStyles from '../styles/global'

function MyApp({ Component, pageProps }: AppProps) {
  _api.setFetch(fetch)

  return (
    <ThemeProvider theme={theme}>
            <Component {...pageProps} />
            <GlobalStyles />
    </ThemeProvider>
  )
}

export default MyApp
