import React, { useState, useEffect } from 'react';
import Head from "next/head"
import {
  ThemeProvider as MaterialUIThemeProvider
} from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline';

import theme from '../styles/theme'
import '../styles/global.scss'
import Loading from './Loading';

export default function App({ Component, pageProps }) {
    const [isLoading, nowLoading] = useState(true);

    // Remove the server-side injected CSS.(https://material-ui.com/guides/server-rendering/)
    useEffect(() => {
      const jssStyles = document.querySelector('#jss-server-side')
      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles)
      }
    }, [])

    setTimeout(() => nowLoading(false), 5800);
    return (
        <MaterialUIThemeProvider theme={theme}>
          <Head>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Concert+One&display=swap" rel="stylesheet" />
          </Head>
          <CssBaseline />
          {isLoading
            ? <Loading />
            : <Component {...pageProps} />
          }
        </MaterialUIThemeProvider>
    );
}