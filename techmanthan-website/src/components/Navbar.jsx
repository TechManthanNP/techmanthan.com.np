"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import "../styles/components/_navbar.scss";

const navLinks = [
  { label: "About Us", href: "/about" },
  { label: "Service", href: "/service" },
  { label: "Products", href: "/products" },
  { label: "Careers", href: "/careers" },
  { label: "ARC", href: "/arc" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(null);

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
        <img src="/images/logo.png" alt="TechManthan Logo" />
      </Link>

      <ul className="navbar__links">
        {navLinks.map(({ label, href }) => {
          const isActive = pathname === href;
          return (
            <li
              key={href}
              className={`navbar__item ${isActive ? "active" : ""} ${
                hovered === href ? "hovered" : ""
              }`}
              onMouseEnter={() => setHovered(href)}
              onMouseLeave={() => setHovered(null)}
            >
              <Link href={href}>{label}</Link>
              {(isActive || hovered === href) && <span className="dot"></span>}
            </li>
          );
        })}
        <li
          className={`navbar__item navbar__contact ${
            scrolled ? "scrolled" : ""
          }`}
        >
          <Link href="/contact">Contact Us</Link>
        </li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;
