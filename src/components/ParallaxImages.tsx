import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function ParallaxImages() {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start end", "end start"],
  });
  const sm = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const md = useTransform(scrollYProgress, [0, 1], [0, -250]);
  const lg = useTransform(scrollYProgress, [0, 1], [0, -250]);

  const images = [
    { src: "/images/dog.jpg", parallax: sm },
    { src: "/images/cat.jpg", parallax: md },
    { src: "/images/mountains.jpg", parallax: lg },
  ];

  return (
    <section className="parallax-images" ref={element}>
      <h1>Parallax images</h1>
      <div className="parallax-images-container">
        {images.map((image) => {
          return (
            <motion.img
              style={{ y: image.parallax }}
              className="parallax-image"
              src={image.src}
              alt=""
            />
          );
        })}
      </div>
    </section>
  );
}
