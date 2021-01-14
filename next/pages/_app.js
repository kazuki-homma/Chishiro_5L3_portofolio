import React, { useState, useEffect } from 'react';
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
          <CssBaseline />
          {isLoading
            ? <Loading />
            : <Component {...pageProps} />
          }
        </MaterialUIThemeProvider>
    );
}