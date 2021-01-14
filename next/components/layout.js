import Head from 'next/head'
import styles from './layout.module.scss'
import utilStyles from '../styles/utils.module.scss'
import Link from 'next/link'
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
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
    appbar: {
      flexGrow: 1,
      color: "#000",
      backgroundColor: "transparent",
      boxShadow: 'none',
      position: 'fixed'
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1,
      textAlign: "left"
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
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Chishiro_5L3
          </Typography>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <FaTwitter />
          </IconButton>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <FaInstagram />
          </IconButton>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <FaFacebook />
          </IconButton>
        </Toolbar>
      </AppBar>
        {home ? (
          <>
            <HomeTop />
          </>
        ) : (
          <>
            <div>Topページじゃなければこの文章が表示されています</div>
          </>
        )}
      </header>
      <main>{children}</main>
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