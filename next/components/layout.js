import Head from 'next/head'
import styles from './layout.module.scss'
import utilStyles from '../styles/utils.module.scss'
import Link from 'next/link'
import { Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import { createStyles, makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import { faTwitter } from '@fortawesome/fontawesome-free';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconContext } from "react-icons";
import { FaTwitter, FaInstagram, FaFacebook} from 'react-icons/fa';

import HomeTop from '../pages/HomeTop';

const name = 'Chishiro_5L3'
export const siteTitle = 'Next.js Sample Website'


const useStyles = makeStyles((theme) =>
  createStyles({
    snsButtons: {
      width: '60px',
      height: '100%',
      position: 'fixed',
      top: '0',
      right: '40px'
    },
    snsToolBar: {
      padding: '0',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    },
    snsMark: {
      display: 'inline-block',
      fontSize: "20px",
      padding: "10px",
      margin: "0"
    }
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
      </header>
      <main>{children}</main>
      <div className={classes.snsButtons}>
        <Toolbar className={classes.snsToolBar}>
          <IconButton edge="start" className={classes.snsMark} color="inherit" aria-label="menu">
            <FaTwitter />
          </IconButton>
          <IconButton edge="start" className={classes.snsMark} color="inherit" aria-label="menu">
            <FaInstagram />
          </IconButton>
          <IconButton edge="start" className={classes.snsMark} color="inherit" aria-label="menu">
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
    </div>
  )
}