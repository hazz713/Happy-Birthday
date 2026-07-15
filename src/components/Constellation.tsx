import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const starPoints = [
  { x: 18, y: 46 },
  { x: 34, y: 22 },
  { x: 51, y: 38 },
  { x: 67, y: 18 },
  { x: 82, y: 45 },
  { x: 61, y: 67 },
  { x: 39, y: 72 }
];

export function Constellation() {
  const path = starPoints.map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`).join(" ");

  // Observe the wrapper div, not the SVG children —
  // Safari (iOS) doesn't support IntersectionObserver on SVG elements.
  const wrapRef = useRef<HTMLDivElement>(null);
  const inView = useInView(wrapRef, { once: false, amount: 0.4 });

  return (
    <div ref={wrapRef} className="constellation-wrap" aria-hidden="true">
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <motion.path
          d={path}
          fill="none"
          stroke="rgba(255, 159, 214, 0.72)"
          strokeWidth="0.34"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={inView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
          transition={{ duration: 2.7, ease: "easeInOut" }}
        />
        {starPoints.map((point, index) => (
          <motion.circle
            key={`${point.x}-${point.y}`}
            cx={point.x}
            cy={point.y}
            r={index === 3 ? 1.1 : 0.74}
            fill={index % 2 === 0 ? "#FF9FD6" : "#9C6ADE"}
            initial={{ scale: 0, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
            transition={{ delay: index * 0.17, duration: 0.8 }}
          />
        ))}
      </svg>
      <span className="meteor meteor-a" />
      <span className="meteor meteor-b" />
      <span className="firefly firefly-a" />
      <span className="firefly firefly-b" />
      <span className="firefly firefly-c" />
    </div>
  );
}
