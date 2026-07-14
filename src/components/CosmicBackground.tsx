import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";
import type { CSSProperties } from "react";

export function CosmicBackground() {
  const { scrollYProgress } = useScroll();
  const skyWarmth = useTransform(scrollYProgress, [0, 0.72, 1], [0.08, 0.2, 0.42]);
  const auroraShift = useTransform(scrollYProgress, [0, 1], ["-8%", "12%"]);
  const skyBackground = useMotionTemplate`radial-gradient(circle at 52% 95%, rgba(255, 216, 122, ${skyWarmth}) 0, transparent 46%), radial-gradient(circle at 78% 18%, rgba(255, 159, 214, 0.18) 0, transparent 28%), linear-gradient(180deg, #120A2A 0%, #24113D 56%, #5B2E91 145%)`;

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-midnight" aria-hidden="true">
      <motion.div
        className="absolute inset-0"
        style={{ background: skyBackground }}
      />
      <div className="star-field star-field-a" />
      <div className="star-field star-field-b" />
      <motion.div className="aurora aurora-one" style={{ x: auroraShift }} />
      <motion.div className="aurora aurora-two" style={{ x: auroraShift }} />
      <div className="shooting shooting-one" />
      <div className="shooting shooting-two" />
      <div className="moon-glow" />
      <div className="sakura-field">
        {Array.from({ length: 16 }, (_, index) => (
          <span
            key={index}
            style={
              {
                "--petal-left": `${(index * 6.5) % 100}%`,
                "--petal-duration": `${16 + index * 0.35}s`,
                "--petal-delay": `${index * -1.1}s`
              } as CSSProperties
            }
          />
        ))}
      </div>
      <div className="screen-firefly screen-firefly-one" />
      <div className="screen-firefly screen-firefly-two" />
      <div className="screen-firefly screen-firefly-three" />
      <div className="fixed-noise" />
    </div>
  );
}
