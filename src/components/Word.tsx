import { motion, useTransform, type MotionValue } from "motion/react";

export default function Word({
  word,
  range,
  progress,
}: {
  word: string;
  range: number[];
  progress: MotionValue<number>;
}) {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className="word">
      <span className="shadow">{word}</span>
      <motion.span style={{ opacity }}>{word}</motion.span>
    </span>
  );
}
