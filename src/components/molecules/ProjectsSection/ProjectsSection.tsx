import { sectionProps } from "../../../utils/types/types";
import styles from "./projectsSection.module.scss";
const ProjectsSection = (props: sectionProps) => {
  return (
    <div id={props.id} className={styles.projects}>
      <div></div>
    </div>
  );
};

export default ProjectsSection;
