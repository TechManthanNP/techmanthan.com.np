"use client";

import "../styles/components/aboutPage/_Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-column">
          <h4>Tech Manthan</h4>
          <p>
            Empowering Nepal’s tech ecosystem through innovation, education, and
            opportunity.
          </p>
        </div>

        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/careers">Careers</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Programs</h4>
          <ul>
            <li>
              <a href="/">Accelerate</a>
            </li>
            <li>
              <a href="/">Refine</a>
            </li>
            <li>
              <a href="/">Create</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Connect</h4>
          <ul>
            <li>
              <a href="mailto:info@techmanthan.com">info@techmanthan.com</a>
            </li>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Tech Manthan. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
