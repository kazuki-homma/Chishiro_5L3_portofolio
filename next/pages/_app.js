import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import {
  ThemeProvider as MaterialUIThemeProvider
} from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline';

import theme from '../styles/theme'
import '../styles/global.scss'
import Loading from './Loading';

export default function App({ Component, pageProps }) {

    // Remove the server-side injected CSS.(https://material-ui.com/guides/server-rendering/)
    useEffect(() => {
      const jssStyles = document.querySelector('#jss-server-side')
      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles)
      }
    }, [])

    return (
        <MaterialUIThemeProvider theme={theme}>
          <Head>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Concert+One&display=swap" rel="stylesheet" />
            <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no" />
          </Head>
          <CssBaseline />
          <Loading />
          <Component {...pageProps} />
        </MaterialUIThemeProvider>
    );
}