import { useEffect, useState } from 'react';
import { Transition } from 'react-transition-group';
import loadingStyle from '../styles/loading.module.scss'

const duration = 2000;

const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
}

const transitionStyles = {
    entering: { opacity: 1 },
    entered:  { opacity: 0 },
    exiting:  { opacity: 1 },
    exited:  { opacity: 1 },
};

const Loading = () => {
    const [inProp, setInProp] = useState(false);
    setTimeout(() => setInProp(true),2000);

    return(
            <Transition in={inProp} timeout={duration}>
                {state => (
                <div style={{
                    ...defaultStyle,
                    ...transitionStyles[state]
                }}>
                    <div className={loadingStyle.body}>
                      <div className={loadingStyle.svg}>
                        <img src="/portofolio.svg" alt="PORTOFOLIO" className="portofolio_loading_svg" />
                        <div>
                          Chishiro_5L3
                        </div>
                      </div>
                    </div>
                </div>
                )}
            </Transition>
    )
}

export default Loading;