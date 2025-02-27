import Marquee from "react-fast-marquee";
import { sectionProps } from "../../../utils/types/types";
import styles from "./marqueeSection.module.scss";
import icons from "./../../../utils/icons";
const MarqueeSection = (props: sectionProps) => {
  return (
    <div id={props.id} className={styles.marquee}>
      <Marquee>
        <div className={styles.marquee_wrapper}>
          {icons.map((icon, index) => (
            <img key={index} src={icon} alt={icon} />
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default MarqueeSection;
