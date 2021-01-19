import Link from 'next/link'

import utilStyles from '../styles/utils.module.scss'

const Blogs = (props) => {
  return(
    <section className={utilStyles.section}>
      <h1 className={utilStyles.sectionTitle}>Blog</h1>
      <p>ブログを記載しています。テストテストブログを記載しています。テストテストブログを記載しています。テストテストブログを記載しています。テストテストブログを
      記載しています。テストテストブログを記載しています。テストテストブログを記載しています。テストテスト</p>
      <ul className={utilStyles.list}>
        {props.allPostsData.map(({ id, date, title }) => (
          <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>
              <a className={utilStyles.blogTitle}>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Blogs;