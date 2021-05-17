import Link from 'next/link'
import styles from '../styles/NavShip.module.scss'

export default function NavShip() {
   return (
    <>
    <nav className={styles.nav}>
        <Link href="#">
        <a className={styles.title}>MAIN CHARACTERS</a>
        </Link>

        <Link href="#">
        <a className={styles.title}>THE SHIP</a>
        </Link>

        <Link href="#">
        <a className={styles.title}>RACES</a>
        </Link>
    </nav>
   </>
   )
}