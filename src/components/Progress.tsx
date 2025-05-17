import { useScroll, motion } from "motion/react";

export default function Progress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="progress-bar"
      style={{
        scaleX: scrollYProgress,
      }}
    />
  );
}
