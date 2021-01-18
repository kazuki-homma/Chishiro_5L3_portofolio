import styles from './layout.module.scss'

const Header = () => {
    return (
      <>
      <header className={styles.header}>
       <div className={styles.headerElement}>ABOUT</div>
       <div className={styles.headerElement}>BLOG</div>
       <div className={styles.headerElement}>CONTACT</div>
       <div className={styles.headerElement}>WORKS</div>
      </header>
      </>
    )
}

export default Header;

