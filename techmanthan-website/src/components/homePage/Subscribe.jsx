"use client";

import "../../styles/components/homePage/_subscribe.scss";

export default function Subscribe() {
  return (
    <section className="subscribe-section">
      <h2>Subscribe to Our Newsletter</h2>
      <p>Stay a Step Ahead</p>
      <form className="subscribe-form">
        <input type="email" placeholder="Your Email Address" required />
        <button type="submit">Subscribe</button>
      </form>
    </section>
  );
}
