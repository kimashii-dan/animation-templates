import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const images = [
  "/images/dog.jpg",
  "/images/cat.jpg",
  "/images/coffee.jpg",
  "/images/mountains.jpg",
  "/images/converse.jpg",
];

export default function Carousel() {
  const element = useRef(null);

  const { scrollYProgress } = useScroll({
    target: element,
  });

  const imgWidth = 500;
  const imgHeight = 300;
  const gap = 25;
  const padding = 50;
  const containerWidth = window.innerWidth;

  const totalContentWidth =
    images.length * imgWidth + (images.length - 1) * gap + padding * 2;
  const maxTranslateX = totalContentWidth - containerWidth;

  const percent = (maxTranslateX / totalContentWidth) * 100;

  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${percent}%`]);

  return (
    <div className="carousel-container" ref={element}>
      <h1 className="title">Horizontal scroll</h1>
      <div className="carousel">
        <motion.div
          className="images"
          style={{
            x,
            gap: `${gap}px`,
            padding: `0 ${padding}px`,
          }}
        >
          {images.map((image, index) => {
            return (
              <div className="image-item" key={index}>
                <img
                  src={image}
                  alt=""
                  style={{ width: `${imgWidth}px`, height: `${imgHeight}px` }}
                />
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
