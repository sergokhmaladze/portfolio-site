'use client';
import React from "react";
import styles from './styles.module.css';
import Link from "next/link";
import Image from "next/image";

function NavBar(): React.JSX.Element{
  return(
    <header className={styles.container}>
      <div className={styles.container__menu}>
        <Link href="/" className={styles.container__logo}>
          <Image 
            src="/me.jpg"
            alt="My logo" 
            width={40}      
            height={40}
          />
        </Link>
        <p className={styles.container__name}>Sergo Kmaladze</p>
      </div>
    </header>
  )
}

export default NavBar;