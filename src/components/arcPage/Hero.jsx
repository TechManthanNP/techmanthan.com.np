"use client";

import "../../styles/components/arcPage/_Hero.scss";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="hero-video"
        src="/videos/heroVideo.mp4"
        type="video/mp4"
      />

      <div className="hero-overlay">
        <div className="hero-content">
          {/* <div className="hero-left">
            <img src="/images/arcHero.png" alt="Hero" />
          </div> */}
          <div className="hero-right">
            <h1>TechManthan ARC Program</h1>
            <p>Driving innovation through technology and collaboration.</p>
            <button>Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
