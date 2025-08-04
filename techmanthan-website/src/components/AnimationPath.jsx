
'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useAnimationFrame } from 'framer-motion';

export default function AnimatedPath({
  // path = "M 100 200 A 100 100 50 0 0 380 200", //globe
  // path="M 0 800 C 200 0, 100 500, 600 0",
  path = "M 0 300 C 190 -50, 700 150, 800 0",
  stroke = "rgba(255, 251, 255, 0.3)",
  strokeWidth = 1,
  circleColor = "#f17006",
  circleRadius = 5,
  drawDuration = 0.3,
  travelDuration = 10,       // total time for circle to go full path
  delay = 0,
  fadeDuration = 0.5,        // fade out and fade in duration in seconds
  invisiblePause = 0.5,      // how long circle stays invisible in seconds
}) {
  const pathRef = useRef(null);
  const [pathLength, setPathLength] = useState(0);
  const [circlePos, setCirclePos] = useState({ x: 0, y: 0 });
  const [progress, setProgress] = useState(0.5); // start halfway for visibility

  // Initialize path length once
  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }
  }, []);

  // Animate progress from 1 → 0 looping
  useAnimationFrame((_, delta) => {
    setProgress(prev => {
      let next = prev - delta / (travelDuration * 1000);
      if (next < 0) next += 1;
      return next;
    });
  });

  // Update circle position on path according to progress
  useEffect(() => {
    if (!pathRef.current || pathLength === 0) return;
    const lengthAtProgress = pathLength * (1 - progress);
    const point = pathRef.current.getPointAtLength(lengthAtProgress);
    setCirclePos({ x: point.x, y: point.y });
  }, [progress, pathLength]);

  // Calculate fractions of total travel time
  const fadeFrac = fadeDuration / travelDuration;
  const pauseFrac = invisiblePause / travelDuration;

  // Define boundaries on progress timeline (progress goes backward 1→0)
  const fadeOutStart = 1 - (fadeFrac + pauseFrac);
  const pauseStart = 1 - pauseFrac;
  const fadeInEnd = fadeFrac;

  let opacity = 1;

  if (progress >= fadeOutStart && progress <= pauseStart) {
    // Fade out: opacity from 1 → 0
    opacity = (pauseStart - progress) / fadeFrac;
  } else if (progress > pauseStart || progress < fadeInEnd) {
    if (progress > pauseStart) {
      // Invisible pause
      opacity = 0;
    } else {
      // Fade in: opacity from 0 → 1
      opacity = progress / fadeFrac;
    }
  } else {
    opacity = 1;
  }

  // Clamp opacity between 0 and 1
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
          translateX: circlePos.x,
          translateY: circlePos.y,
          opacity,
        }}
      />
    </motion.svg>
  );
}
