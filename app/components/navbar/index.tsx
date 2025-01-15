'use client';
import React from "react";
import styles from './styles.module.css';
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import BurgerMenu from "../burgerMenu";

function NavBar(): React.JSX.Element{
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };
  
  return(
    <header className={styles.container}>
      <div className={styles.container__menu}>
        <Link href="/">
          <Image 
            className={styles.container__logo}
            src="/me.jpg"
            alt="My logo" 
            width={40}      
            height={40}
          />
        </Link>
        <p className={styles.container__name} >Sergo Kmaladze</p>
      </div>

      <BurgerMenu isOpen={isMenuOpen} closeMenu={closeMenu} toggleMenu={toggleMenu} />
    </header>
  )
}

export default NavBar;