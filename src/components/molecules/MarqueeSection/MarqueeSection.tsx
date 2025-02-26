import Marquee from "react-fast-marquee";
import { sectionProps } from "../../../utils/types/types";
import styles from "./marqueeSection.module.scss";
const MarqueeSection = (props: sectionProps) => {
  return (
    <div id={props.id} className={styles.marquee}>
      <Marquee>
        <div className={styles.marquee_wrapper}>
          <img src="src/assets/icons/stack/html.svg" alt="" />
          <img src="src/assets/icons/stack/css.svg" alt="" />
          <img src="src/assets/icons/stack/js.svg" alt="" />
          <img src="src/assets/icons/stack/react.svg" alt="" />
          <img src="src/assets/icons/stack/angularjs.svg" alt="" />
          <img src="src/assets/icons/stack/nodejs.svg" alt="" />
          <img src="src/assets/icons/stack/nestjs.svg" alt="" />
          <img src="src/assets/icons/stack/firebase.svg" alt="" />
          <img src="src/assets/icons/stack/azure.svg" alt="" />
          <img src="src/assets/icons/stack/bootstrap.svg" alt="" />
          <img src="src/assets/icons/stack/tailwindcss.svg" alt="" />
          <img src="src/assets/icons/stack/git.svg" alt="" />
          <img src="src/assets/icons/stack/figma.svg" alt="" />
          <img src="src/assets/icons/stack/adobe-illustrator.svg" alt="" />
        </div>
      </Marquee>
    </div>
  );
};

export default MarqueeSection;
