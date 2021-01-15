import Head from 'next/head'
import Link from 'next/link'

import Date from '../components/date'
import Layout, { siteTitle } from '../components/layout'
import Works from '../components/Works'
import utilStyles from '../styles/utils.module.scss'
import { getSortedPostsData } from '../lib/posts'

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
          <h1 className={utilStyles.headingLg}>About me</h1>
          <div>
            <p>現在法政大学3年生のエンジニアです。趣味は映画鑑賞</p>
          </div>
          <Link href={'/'}>More⇨</Link>
        </section>
        <section className={utilStyles.headingMd}>
          <h1 className={utilStyles.headingLg}>Works</h1>
          <Works />
        </section>
        <section className={utilStyles.headingMd}>
          <h1 className={utilStyles.headingLg}>Skills and qualifications</h1>
          <div>
            <p>フロントエンド</p>
          </div>
          <Link href={'/'}>More⇨</Link>
        </section>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul>
      </section>
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

