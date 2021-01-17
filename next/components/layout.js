import Head from 'next/head'
import Link from 'next/link'
import { createStyles, makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";

import styles from './layout.module.scss'
import utilStyles from '../styles/utils.module.scss'
import Header from './Header';
import Footer from './Footer';
import SnsButtons from './SnsButtons';

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
      <Header 
        header={styles.header}
        headerElement={styles.headerElement}
      />
      <main>{children}</main>
      <SnsButtons 
        snsButtons={styles.snsButtons}
        snsToolBar={styles.snsToolBar}
        snsMark={styles.snsMark}
      />
      {!home && (
        <div>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
      <Footer />
    </div>
  )
}