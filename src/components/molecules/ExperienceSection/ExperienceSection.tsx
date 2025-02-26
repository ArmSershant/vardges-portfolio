import { sectionProps } from "../../../utils/types/types";
import styles from "./experienceSection.module.scss";

const ExperienceSection = (props: sectionProps) => {
  return (
    <div id={props.id} className={styles.experience}>
      <div></div>
    </div>
  );
};

export default ExperienceSection;
