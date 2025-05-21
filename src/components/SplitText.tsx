import { motion, MotionValue, useScroll, useTransform } from "motion/react";

import { useRef } from "react";
import { text } from "../text";

export default function SplitText() {
  const words = text.split(" ");

  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.25"],
  });

  return (
    <section className="split-text-section">
      <h1 className="title">Text split</h1>
      <div className="split-text-container">
        <motion.p className="split-text" ref={element}>
          {words.map((word, index) => {
            const start = index / words.length;
            const end = start + 1 / words.length;
            return (
              <Word
                word={word}
                key={index}
                range={[start, end]}
                progress={scrollYProgress}
              />
            );
          })}
        </motion.p>
      </div>
    </section>
  );
}

function Word({
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
    <span className="split-word">
      <span className="shadow">{word}</span>
      <motion.span style={{ opacity }}>{word}</motion.span>
    </span>
  );
}
