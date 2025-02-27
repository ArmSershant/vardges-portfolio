import { Typewriter } from "react-simple-typewriter";
import { sectionProps } from "../../../../utils/types/types";
import styles from "./experienceSection.module.scss";

const ExperienceSection = (props: sectionProps) => {
  return (
    <div id={props.id} className={styles.experience}>
      <div className={styles.experience_wrapper}>
        <div className={styles.experience_wrapper_info}>
          <div className={styles.experience_wrapper_info_title}>
            <p>Services</p>
          </div>
          <div className={styles.experience_wrapper_info_providing}>
            <p>
              <Typewriter
                words={["MY WORK EXPERIENCE", "MY WORK EXPERIENCE"]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={2500}
              />
            </p>
          </div>
        </div>
        <div className={styles.experience_wrapper_experienceBoxes}>

        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
