import HorizontalScroll from "./HorizontalScroll";
import Steps from "./Steps";
import SplitText from "./SplitText";
import ParallaxText from "./ParallaxText";
import ParallaxImages from "./ParallaxImages";

export default function Content() {
  return (
    <main>
      <div className="window-gap" />
      <Steps />
      <div className="window-gap" />
      <SplitText />
      <div className="window-gap" />
      <HorizontalScroll />
      <div className="window-gap" />
      <ParallaxText />
      <div className="window-gap" />
      <ParallaxImages />
      <div className="window-gap" />
    </main>
  );
}
