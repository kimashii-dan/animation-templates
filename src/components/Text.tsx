import { motion, useScroll } from "motion/react";

import { useRef } from "react";
import Word from "./Word";
import { text } from "../text";

export default function Text() {
  const words = text.split(" ");

  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.25"],
  });

  return (
    <section>
      <div className="container">
        <motion.p className="text" ref={element}>
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
