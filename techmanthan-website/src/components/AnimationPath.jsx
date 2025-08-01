'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useAnimationFrame } from 'framer-motion';

export default function AnimatedPath({
  path = "M 0 200 C 200 0, 600 200, 800 100",
  stroke = "rgba(255,255,255,0.2)",
  strokeWidth = 1,
  circleColor = "white",
  circleRadius = 4,
  drawDuration = 3,
  travelDuration = 10,
  delay = 0,
}) {
  const pathRef = useRef(null);
  const [pathLength, setPathLength] = useState(0);
  const [circlePos, setCirclePos] = useState({ x: 0, y: 0 });
  const [progress, setProgress] = useState(1); // start at end of path

  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }
  }, []);

  useAnimationFrame((_, delta) => {
    setProgress((prev) => (prev - delta / (travelDuration * 1000) + 1) % 1);
  });

  useEffect(() => {
    if (!pathRef.current || pathLength === 0) return;
    const lengthAtProgress = pathLength * (1 - progress); // reversed so circle starts at right
    const point = pathRef.current.getPointAtLength(lengthAtProgress);
    setCirclePos({ x: point.x, y: point.y });
  }, [progress, pathLength]);

  return (
    <motion.svg
      viewBox="0 0 800 200"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      style={{ width: "100%", height: "200px", overflow: "visible" }}
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 1, ease: "easeOut" }}
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
        transition={{ delay, duration: drawDuration, ease: "easeInOut" }}
      />

      <motion.circle
        r={circleRadius}
        fill={circleColor}
        style={{
          filter: "blur(1px)",
          translateX: circlePos.x,
          translateY: circlePos.y,
        }}
      />
    </motion.svg>
  );
}
