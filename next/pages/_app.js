import { useState } from 'react';

import '../styles/global.css'
import Loading from './Loading';

export default function App({ Component, pageProps }) {
    const [isLoading, nowLoading] = useState(true);

    setTimeout(() => nowLoading(false), 4000);
    return (
        <>
          {isLoading
            ? <Loading />
            : <Component {...pageProps} />
          }
        </>
    );
}