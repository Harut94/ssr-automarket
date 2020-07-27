import Head from 'next/head'
import styles from './layout.module.css'
import Link from 'next/link'
import { LayoutInterface } from 'interfaces/layout-interface'



export default function Layout({ children }: LayoutInterface) {
  return (
    <div>
      <div className={styles.navbar}>
            <Link href="/">
              <a>
                home
              </a>
            </Link>
              <Link href="/cars-list">
              <a>
                cars
              </a>
              </Link>
      </div>
      <main>{children}</main>
      </div>
  )
}
