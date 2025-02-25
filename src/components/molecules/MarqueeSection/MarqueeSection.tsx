import { sectionProps } from "../../../utils/types/types";
import style from "./marqueeSection.module.scss";
const MarqueeSection = (props: sectionProps) => {
  return (
    <div id={props.id} className={style.marquee}>
      MarqueeSection
    </div>
  );
};

export default MarqueeSection;
