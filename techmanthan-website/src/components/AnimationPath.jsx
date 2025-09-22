'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useAnimationFrame } from 'framer-motion';

export default function AnimatedPath({
  path = "M 0 300 C 190 -50, 700 150, 800 0",
  stroke = "rgba(255, 251, 255, 0.3)",
  strokeWidth = 1,
  circleColor = "#f17006",
  circleRadius = 5,
  drawDuration = 0.3,
  travelDuration = 10,
  delay = 0,
  fadeDuration = 0.5,
  invisiblePause = 0.5,
}) {
  const pathRef = useRef(null);
  const [pathLength, setPathLength] = useState(0);

  const circlePosRef = useRef({ x: 0, y: 0 });
  const progressRef = useRef(0.5); // mutable, not causing re-render
  const [, forceRender] = useState(0); // small trick: force refresh occasionally

  // Initialize path length once
  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }
  }, []);

  // Animate progress with useAnimationFrame
  useAnimationFrame((_, delta) => {
    if (!pathRef.current || pathLength === 0) return;

    progressRef.current -= delta / (travelDuration * 1000);
    if (progressRef.current < 0) progressRef.current += 1;

    const lengthAtProgress = pathLength * (1 - progressRef.current);
    const point = pathRef.current.getPointAtLength(lengthAtProgress);
    circlePosRef.current = { x: point.x, y: point.y };

    // re-render just enough (say every 10 frames)
    forceRender(t => (t + 1) % 10);
  });

  // Calculate opacity
  const fadeFrac = fadeDuration / travelDuration;
  const pauseFrac = invisiblePause / travelDuration;

  const fadeOutStart = 1 - (fadeFrac + pauseFrac);
  const pauseStart = 1 - pauseFrac;
  const fadeInEnd = fadeFrac;

  let opacity = 1;
  const progress = progressRef.current;

  if (progress >= fadeOutStart && progress <= pauseStart) {
    opacity = (pauseStart - progress) / fadeFrac;
  } else if (progress > pauseStart || progress < fadeInEnd) {
    opacity = progress > pauseStart ? 0 : progress / fadeFrac;
  }

  opacity = Math.min(Math.max(opacity, 0), 1);

  return (
    <motion.svg
      viewBox="0 0 800 200"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      style={{ width: '100%', height: '200px', overflow: 'visible' }}
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 1, ease: 'easeOut' }}
    >
      <motion.path
        ref={pathRef}
        d={path}
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeDasharray={pathLength}
        strokeDashoffset={pathLength}
        animate={{ strokeDashoffset: 0 }}
        transition={{ delay, duration: drawDuration, ease: 'easeInOut' }}
      />
      <motion.circle
        r={circleRadius}
        fill={circleColor}
        style={{
          filter: 'blur(1px)',
          translateX: circlePosRef.current.x,
          translateY: circlePosRef.current.y,
          opacity,
        }}
      />
    </motion.svg>
  );
}
