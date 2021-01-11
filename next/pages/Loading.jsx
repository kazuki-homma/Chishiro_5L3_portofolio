import { useEffect } from 'react';
import loadingStyle from '../styles/loading.module.scss'

const Loading = () => {

    useEffect(() => {
        const loading = document.querySelector("div")
        loading.animate({
            opacity: [0, 1]
        }, 1500)
    });

    return(
            <section className={loadingStyle.body}>
              <div className={loadingStyle.nowl}>Now Loading...</div>
            </section>
    )
}

export default Loading;