import Link from 'next/link'

import utilStyles from '../styles/utils.module.scss'

const Skills = () => {
    return (
        <section className={utilStyles.section}>
          <h1 className={utilStyles.sectionTitle}>Skills and qualifications</h1>
          <div>
            <p>フロントエンド</p>
          </div>
          <Link href={'/'}>More⇨</Link>
        </section>
    )
}

export default Skills;