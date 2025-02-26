import { sectionProps } from "../../../utils/types/types";
import styles from "./aboutMeSection.module.scss";

const AboutMeSection = (props: sectionProps) => {
  return (
    <div id={props.id} className={styles.aboutMe}>
      <div></div>
    </div>
  );
};

export default AboutMeSection;
