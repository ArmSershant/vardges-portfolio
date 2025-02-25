import { sectionProps } from "../../../utils/types/types";
import style from "./projectsSection.module.scss";
const ProjectsSection = (props: sectionProps) => {
  return (
    <div id={props.id} className={style.projects}>
      ProjectsSection
    </div>
  );
};

export default ProjectsSection;
