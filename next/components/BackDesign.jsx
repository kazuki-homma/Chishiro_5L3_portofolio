import utilStyles from '../styles/utils.module.scss'

const BackDesign = (props) => {
    return(
        <>
            <div className={props.centerBall}>
            <video
                id="background-video"
                loop
                autoPlay
                muted
                style={{
                    position: "absolute",
                    width: "750px",
                    height: "auto",
                    left: "-160px",
                    top: 0,
                }}
            >
                <source src={'/fnj3w-aimn2.mp4'} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            </div>
            <div className={props.centerInBall}>
            </div>
            <section className={props.topDesign}>
                <h1 className={props.concertTop}>Chishiro_5L3</h1>
                <div className={props.firstOutBall}></div>
                <div className={props.secondOutBall}></div>
                <div className={props.thirdOutBall}></div>
                <div className={props.news}>
                    <p>News: Portofolioサイトを作成しました</p>
                    <p>今後はブログやQiitaなどにも力を入れていく予定です。</p>
                </div>
            </section>
        </>
    )
}

export default BackDesign;