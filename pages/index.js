import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>濮院古镇 P Y G Z 爱好者</title>
        <meta name="description" content="濮院古镇粉丝网" />
        <link rel="icon" href="/icon.svg" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <span className={styles.logo} >
            <img src="/icon.svg" alt="Logo" width={150} height={150} />
          </span>
          <span>
            P Y G Z 我爱濮院
          </span>
        </h1>

        <p className={styles.description}>
        </p>


        <div className={styles.grid}>
          <a
            className={styles.card}
          >
            <h2>联系我们&rarr;</h2>
            <p>
              315零277六8@QQ.COM
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footer_line}>
          🧱 本站通过next.js构建，运行于netlify。
        </div>
      </footer>
    </div>
  )
}
