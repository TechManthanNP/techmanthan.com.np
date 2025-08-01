// 'use client';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import { useState, useEffect } from 'react';
// import styles from '../styles/components/_navbar.module.scss';
// import { motion } from 'framer-motion';

// const navLinks = [
//   { label: 'About Us', href: '/about' },
//   { label: 'Service', href: '/service' },
//   { label: 'Careers', href: '/careers' },
//   { label: 'ARC', href: '/arc' },
//   { label: 'Contact Us', href: '/contact' },
// ];

// export default function Navbar() {
//   const pathname = usePathname();
//   const [scrolled, setScrolled] = useState(false);
//   const [hoveredLink, setHoveredLink] = useState(null);
//   const [hoveringLinks, setHoveringLinks] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener('scroll', onScroll);
//     return () => window.removeEventListener('scroll', onScroll);
//   }, []);

//   const whiteBg = scrolled || hoveringLinks;

//   return (
//     <motion.nav
//       className={`${styles.navbar} ${whiteBg ? styles.scrolled : ''}`}
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.3 }}
//       onMouseLeave={() => {
//         setHoveredLink(null);
//         setHoveringLinks(false);
//       }}
//     >
//       <Link href="/" className={styles.logo}>
//         TechManthan
//       </Link>

//       <ul className={styles.links}>
//         {navLinks.map(({ label, href }) => {
//           const isActive = pathname === href;

//           return (
//             <li
//               key={href}
//               onMouseEnter={() => {
//                 setHoveredLink(href);
//                 setHoveringLinks(true);
//               }}
//               onMouseLeave={() => {
//                 setHoveredLink(null);
//                 setHoveringLinks(false);
//               }}
//               className={`
//                 ${isActive ? styles.active : ''}
//                 ${hoveredLink === href ? styles.hovered : ''}
//               `}
//             >
//               <Link href={href}>{label}</Link>
//               {(isActive || hoveredLink === href) && (
//                 <span className={styles.dot}></span>
//               )}
//             </li>
//           );
//         })}
//       </ul>
//     </motion.nav>
//   );
// }
import Navbar from '../components/Navbar';  // or '@/components/Navbar'
import Hero from '../components/Hero';      // or '@/components/Hero'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <h1>ddfkgjslkgjsdjg</h1>
      {/* You can add more homepage sections here */}
    </>
  );
}
