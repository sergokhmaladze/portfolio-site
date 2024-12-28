'use client';
import styles from './styles.module.css';
import Link from "next/link";
import React, { useEffect, useRef } from "react";

interface BurgerMenuProps {
  isOpen: boolean;
  closeMenu: () => void;
  toggleMenu: () => void;
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ isOpen, closeMenu, toggleMenu })  => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeMenu]);

  
  return (
    <div ref={menuRef} className={styles.menu__item}>
     <div onClick={toggleMenu}>
        {isOpen ? (
            <span className={styles.close__button}>✖</span>
        ) : (
            <span className={styles.open__button}>☰</span>
        )}
      </div>
      <ul className={`${styles.menu__overlay} ${!isOpen ? styles.open : ""}`}>
        <li><Link href="/" onClick={closeMenu} className={styles.navbar__item}>Home</Link></li>
        <li><Link href="/about" onClick={closeMenu} className={styles.navbar__item}>About</Link></li>
        <li><Link href="/contact" onClick={closeMenu} className={styles.navbar__item}>Contact</Link></li>
      </ul>
    </div>

  );
};

export default BurgerMenu;