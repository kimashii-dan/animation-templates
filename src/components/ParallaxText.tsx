import { motion, MotionValue, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { text } from "../text";

export default function ParallaxText() {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start end", "end start"],
  });

  let shift = -55;

  return (
    <section className="parallax-text-section">
      <h1 className="title">Parallax Text</h1>
      <div className="parallax-text-container" ref={element}>
        {Array.from({ length: 3 }).map((_, index) => {
          shift = shift + 12;
          return (
            <Slider
              phrase={text}
              left={shift}
              progress={scrollYProgress}
              direction={index % 2 === 0 ? 1 : -1}
            />
          );
        })}
      </div>
    </section>
  );
}

function Slider({
  phrase,
  left,
  progress,
  direction,
}: {
  phrase: string;
  left: number;
  progress: MotionValue<number>;
  direction: number;
}) {
  const x = useTransform(progress, [0, 1], [direction * -250, direction * 250]);

  return (
    <motion.div
      className="parallax-text-slider"
      style={{ left: `${left}%`, x }}
    >
      {Array(5)
        .fill(phrase)
        .map((sentence) => {
          return <p>{sentence}</p>;
        })}
    </motion.div>
  );
}
