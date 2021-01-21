import styles from './layout.module.scss'
import utilStyles from '../styles/utils.module.scss'

const BackDesign = () => {
    return(
        <>
          <div className={styles.logo}>
            <h1 className={styles.logoTitle}>Chishiro_5L3</h1>
          </div>
            <div className={styles.centerBall}>
            <video
                id="background-video"
                loop
                autoPlay
                muted
                className={styles.video}
            >
                <source src={'/fnj3w-aimn2.mp4'} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            </div>
            <div className={styles.centerInBall}>
            </div>
            <section className={styles.topDesign}>
                <h1 className={styles.concertTop}>Chishiro_5L3</h1>
                <div className={styles.news}>
                    <p>News: Portofolioサイトを作成しました</p>
                    <p>今後はブログやQiitaなどにも力を入れていく予定です。</p>
                </div>
            </section>
        </>
    )
}

export default BackDesign;