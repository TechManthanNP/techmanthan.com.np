"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // burger & close icons
import "../styles/components/_navbar.scss";

const navLinks = [
  { label: "AI Products", href: "/products" },
  { label: "Solutions", href: "/solutions" },
  { label: "About Us", href: "/about" },
  { label: "Careers", href: "/careers" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`navbar ${scrolled ? "scrolled" : ""}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Link href="/" className="navbar__logo">
        <img
          src="/images/logo.png"
          alt="TechManthan Logo"
          className="techManthan"
        />
      </Link>

      {/* Desktop Nav */}
      <ul className="navbar__links">
        {navLinks.map(({ label, href }) => {
          // const isActive = pathname === href;
          // const isActive = pathname.replace(/\/$/, "") === href;
          const isActive = pathname.startsWith(href);
          return (
            <li
              key={href}
              className={`navbar__item ${isActive ? "active" : ""}`}
            >
              <Link href={href}>{label}</Link>
            </li>
          );
        })}
        <li className="navbar__item navbar__contact">
          <Link href="/contact">Contact Us</Link>
        </li>
      </ul>

      {/* Burger icon */}
      <div className="navbar__burger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
      </div>

      {/* Mobile Drawer */}
      <motion.div
        className={`navbar__drawer ${menuOpen ? "open" : ""}`}
        initial={{ x: "100%" }}
        animate={{ x: menuOpen ? "0%" : "100%" }}
        transition={{ duration: 0.3 }}
      >
        <ul>
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <Link href={href} onClick={() => setMenuOpen(false)}>
                {label}
              </Link>
            </li>
          ))}
          <li className="navbar__contact">
            <Link href="/contact" onClick={() => setMenuOpen(false)}>
              Contact Us
            </Link>
          </li>
        </ul>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
