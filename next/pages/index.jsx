import Head from 'next/head'
import Link from 'next/link'

import Date from '../components/date'
import Layout, { siteTitle } from '../components/layout'
import Works from '../components/Works'
import utilStyles from '../styles/utils.module.scss'
import { getSortedPostsData } from '../lib/posts'
import Blogs from '../components/Blogs'
import Skills from '../components/Skills'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {

  return (
    <Layout home>
    <div className="container">
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={utilStyles.mainContainer}>
        <section className={utilStyles.headingMd}>
          <div className={utilStyles.about}>
            <h1>About --</h1>
            <p>法政大学3年</p>
            <p>駆け出しエンジニア</p>
          </div>
        </section>
        <Works />
        <Skills />
        <Blogs 
          allPostsData={allPostsData}
        />
        <section className={utilStyles.headingMd}>
          <h1 className={utilStyles.headingLg}>Contact</h1>
          <div>
            <p>今はまだnothing</p>
          </div>
        </section>
      </main>
    </div>
    </Layout>
  )
}

