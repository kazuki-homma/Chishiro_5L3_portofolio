import { useState } from 'react';

import '../styles/global.scss'
import Loading from './Loading';

export default function App({ Component, pageProps }) {
    const [isLoading, nowLoading] = useState(true);

    setTimeout(() => nowLoading(false), 5800);
    return (
        <>
          {isLoading
            ? <Loading />
            : <Component {...pageProps} />
          }
        </>
    );
}