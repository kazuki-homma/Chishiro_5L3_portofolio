import hometopStyle from '../styles/hometop.module.scss'

const HomeTop = () => {
    return (
        <div className={hometopStyle.container}>
          <video
            id="background-video"
            loop
            autoPlay
            muted
            style={{
                position: "relative",
                width: "100vw",
                height: "auto",
                left: 0,
                top: 0,
            }}
          >
            <source src={'/fnj3w-aimn2.mp4'} type="video/mp4" />
              Your browser does not support the video tag.
          </video>
          {/* <h1 className={hometopStyle.title}>Chishiro_5L3</h1> */}
        </div>
    );
}

export default HomeTop;