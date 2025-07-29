"use client";
import { motion, useAnimationFrame } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "../styles/components/_Hero.scss";
const sectionVariants = {
  initial: { backgroundColor: "#ffffff" },
  animate: { backgroundColor: "rgba(15, 23, 42, 1)" },
};
const fadeUpVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};
const Hero = () => {
  const [showGradient, setShowGradient] = useState(false);
  // For animating the path dash offset (line drawing)
  const pathRef = useRef(null);
  const [pathLength, setPathLength] = useState(0);
  // Circle position state
  const [circlePos, setCirclePos] = useState({ x: 0, y: 0 });
  // Circle animation progress (0 to 1, start at 1 to begin at end)
  const [progress, setProgress] = useState(1);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGradient(true);
    }, 2000); // match animation duration
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength();
      setPathLength(length);
    }
  }, []);
  // Animate circle progress along path every animation frame
  useAnimationFrame((t, delta) => {
    setProgress((prev) => (prev - delta / 10000 + 1) % 1);
  });
  // Update circle position when progress or pathLength changes
  useEffect(() => {
    if (!pathRef.current || pathLength === 0) return;
    const lengthAtProgress = pathLength * (1 - progress);
    const point = pathRef.current.getPointAtLength(lengthAtProgress);
    setCirclePos({ x: point.x, y: point.y });
  }, [progress, pathLength]);
  return (
    <motion.section
      className={`hero-section ${showGradient ? "gradient-visible" : ""}`}
      variants={sectionVariants}
      initial="initial"
      animate="animate"
      transition={{ duration: 2, ease: "easeInOut" }}
    >
      {/* Background Animation with Fade-in */}
      <motion.svg
        className="hero-path"
        viewBox="0 0 800 200"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
        style={{ overflow: "visible" }}
      >
        {/* Animated path with stroke-dashoffset for line-drawing */}
        <motion.path
          ref={pathRef}
          d="M 0 200 C 200 0, 600 200, 800 100"
          fill="none"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="1"
          strokeDasharray={pathLength}
          strokeDashoffset={pathLength}
          animate={{ strokeDashoffset: 0 }}
          transition={{ delay: 1.2, duration: 3, ease: "easeInOut" }}
        />
        {/* Circle moving along the path */}
        <motion.circle
          r="4"
          fill="white"
          style={{
            filter: "blur(1px)",
            translateX: circlePos.x,
            translateY: circlePos.y,
          }}
        />
      </motion.svg>
      <motion.div
        className="hero-content"
        variants={fadeUpVariants}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
      >
        <div className="text">
          <h1>Empowering the Future</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </motion.div>
      <motion.div
        className="hero-slider"
        variants={fadeUpVariants}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
      >
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          loop={true}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          speed={1500}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <img src="/slider1.jpg" alt="Slide 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/slider2.jpeg" alt="Slide 2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/slider3.jpeg" alt="Slide 3" />
          </SwiperSlide>
        </Swiper>
      </motion.div>
      {/* Animated Scroll Indicator */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0, y: 0 }}
        animate={{
          y: [0, 15, 0],
          rotateY: [0, 180, 360],
          opacity: [0.3, 1, 0.1],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
          delay: 1.5,
        }}
      >
        <a href="#about">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="white"
            viewBox="0 0 24 24"
          >
            <path d="M12 16.5l-8-8 1.41-1.42L12 13.67l6.59-6.59L20 8.5z" />
          </svg>
        </a>
      </motion.div>
    </motion.section>
  );
};
export default Hero;
