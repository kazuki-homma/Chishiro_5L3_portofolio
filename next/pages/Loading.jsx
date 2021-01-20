import { useState } from 'react';
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
                      <div className={loadingStyle.loadingTitle}>
                        <span className={loadingStyle.char}>C</span>
                        <span className={loadingStyle.char}>h</span>
                        <span className={loadingStyle.char}>i</span>
                        <span className={loadingStyle.char}>s</span>
                        <span className={loadingStyle.char}>h</span>
                        <span className={loadingStyle.char}>i</span>
                        <span className={loadingStyle.char}>r</span>
                        <span className={loadingStyle.char}>o</span>
                        <span className={loadingStyle.char}>_</span>
                        <span className={loadingStyle.char}>5</span>
                        <span className={loadingStyle.char}>L</span>
                        <span className={loadingStyle.char}>3</span>
                      </div>
                    </div>
                </div>
                )}
            </Transition>
    )
}

export default Loading;