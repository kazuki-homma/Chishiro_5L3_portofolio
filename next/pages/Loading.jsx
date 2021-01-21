import { useState } from 'react';
import loadingStyle from '../styles/loading.module.scss'

const Loading = () => {
  return(
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
  )
}

export default Loading;