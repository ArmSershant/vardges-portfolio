import { Typewriter } from "react-simple-typewriter";
import { sectionProps } from "../../../utils/types/types";
import styles from "./projectsSection.module.scss";
const ProjectsSection = (props: sectionProps) => {
  return (
    <div id={props.id} className={styles.projects}>
      <div className={styles.projects_wrapper}>
        <div className={styles.projects_wrapper_info}>
          <div className={styles.projects_wrapper_info_title}>
            <p>PROJECTS</p>
          </div>
          <div className={styles.projects_wrapper_info_providing}>
            <p>
              <Typewriter
                words={["MY RECENT PROJECTS", "MY RECENT PROJECTS"]}
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
        <div className={styles.projects_wrapper_projectBoxes}></div>
      </div>
    </div>
  );
};

export default ProjectsSection;
