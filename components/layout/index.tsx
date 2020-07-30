import styles from './layout.module.css'
import { LayoutInterface } from '../../interfaces/layout-interface'
import NavLink from '../nav-link'



export default function Layout({ children }: LayoutInterface) {
  return (
    <div>
      <div className={styles.navbar}>
            <NavLink href='/' className={styles.navLink} text={'home'}/>
            <NavLink href="/cars-list" className={styles.navLink} text={'cars'}/>
      </div>
      <main>{children}</main>
      </div>
  )
}
