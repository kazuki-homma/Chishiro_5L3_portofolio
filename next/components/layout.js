import Head from 'next/head'
import Link from 'next/link'
import { Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import { createStyles, makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import { faTwitter } from '@fortawesome/fontawesome-free';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconContext } from "react-icons";
import { FaTwitter, FaInstagram, FaFacebook} from 'react-icons/fa';

import styles from './layout.module.scss'
import utilStyles from '../styles/utils.module.scss'
import Footer from './Footer';

const name = 'Chishiro_5L3'
export const siteTitle = 'Next.js Sample Website'


const useStyles = makeStyles((theme) =>
  createStyles({
  })
);


export default function Layout({ children, home }) {
  const classes = useStyles();

  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Chishiro_5L3 Portofolio"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
       <div className={styles.headerElement}>ABOUT</div>
       <div className={styles.headerElement}>BLOG</div>
       <div className={styles.headerElement}>CONTACT</div>
       <div className={styles.headerElement}>WORKS</div>
      </header>
      <main>{children}</main>
      <div className={styles.snsButtons}>
        <Toolbar className={styles.snsToolBar}>
          <IconButton edge="start" className={styles.snsMark} color="inherit" aria-label="menu">
            <FaTwitter />
          </IconButton>
          <IconButton edge="start" className={styles.snsMark} color="inherit" aria-label="menu">
            <FaInstagram />
          </IconButton>
          <IconButton edge="start" className={styles.snsMark} color="inherit" aria-label="menu">
            <FaFacebook />
          </IconButton>
        </Toolbar>
      </div>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
      <Footer />
    </div>
  )
}