'use client';
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from '../styles/components/_navbar.module.scss';
import { motion } from 'framer-motion';

const links = [
  { label: 'About Us', href: '/about' },
  { label: 'Service', href: '/service' },
  { label: 'Products', href: '/products' },
  { label: 'Careers', href: '/careers' },
  { label: 'ARC', href: '/arc' },
];

const contactLink = { label: 'Contact Us', href: '/contact' };

const Navbar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Link href="/" className={styles.logo}>
        TechManthan
      </Link>

      <ul className={styles.links}>
        {links.map(({ label, href }) => {
          const isActive = pathname === href;
          return (
            <li
              key={href}
              onMouseEnter={() => setHovered(href)}
              onMouseLeave={() => setHovered(null)}
              className={`${isActive ? styles.active : ''} ${hovered === href ? styles.hovered : ''}`}
            >
              <Link href={href}>{label}</Link>
              {(isActive || hovered === href) && <span className={styles.dot}></span>}
            </li>
          );
        })}
        <li className={styles.contactBtn}>
          <Link href={contactLink.href}>{contactLink.label}</Link>
        </li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;
