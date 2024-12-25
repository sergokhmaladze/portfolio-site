'use client';
import React from "react";
import styles from './styles.module.css';
import Link from "next/link";

interface BurgerMenuProps {
  isOpen: boolean;
  closeMenu: () => void;
  toggleMenu: () => void;
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ isOpen, closeMenu, toggleMenu })  => {
  return (
    <div className={styles.menu__item} onClick={toggleMenu}>
        {isOpen ? (
            <span className={styles.close__button}>✖</span>
        ) : (
            <span className={styles.open__button}>☰</span>
        )}

      <ul className={`${styles.menu__overlay} ${!isOpen ? styles.open : ""}`}>
        <li><Link href="/" onClick={closeMenu} className={styles.navbar__item}>Home</Link></li>
        <li><Link href="/about" onClick={closeMenu} className={styles.navbar__item}>About</Link></li>
        <li><Link href="/contact" onClick={closeMenu} className={styles.navbar__item}>Contact</Link></li>
      </ul>
    </div>
  );
};

export default BurgerMenu;