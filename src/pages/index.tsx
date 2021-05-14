import React from 'react';
import NavShip from '../components/NavShip';
import styles from './home.module.scss';

export default function Home() {
  return (
   <>
    <NavShip />
    
    <h1 className={styles.title}>USS DISCOVERY</h1>

    <p className={styles.subtitle}>
    "This ship bears the name Discovery. Never has that been more fitting,<br />
     or more prescient. She has carried us into the future,<br /> 
     and it will be our privilege to make that future bright. Let us begin. Together."<br />
      – Captain Saru, 3189 ("People of Earth")
    </p>
   </>
  )
}
