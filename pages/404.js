import Link from 'next/link'
import styles from '../styles/Error.module.css'

export default function FourOhFour() {
  return <div className={styles.main}>
    <div>

      <h1>404 - 页面不存在 Page Not Found</h1>
      <Link href="/">
        <a>
          返回首页 Go back home
        </a>
      </Link>
    </div>
  </div>
}