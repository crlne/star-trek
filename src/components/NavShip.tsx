import Link from 'next/link'
import styles from '../styles/NavShip.module.scss'

export default function NavShip() {
   return (
    <>
    <nav className={styles.nav}>
        <Link href="#">
        <a className={styles.title}>main characters</a>
        </Link>

        <Link href="#">
        <a className={styles.title}>the ship</a>
        </Link>

        <Link href="#">
        <a className={styles.title}>races</a>
        </Link>
    </nav>
   </>
   )
}