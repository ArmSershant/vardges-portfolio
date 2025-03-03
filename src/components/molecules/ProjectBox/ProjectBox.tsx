import { ProjectBoxProps } from "../../../utils/types/types";
import Button from "../../atoms/Button/Button";
import styles from "./projectBox.module.scss";

const ProjectBox = ({ onOpenModal, ...project }: ProjectBoxProps) => {
  return (
    <>
      <div className={styles.projectBox}>
        <img src={project.photoURL} alt={project.title} onClick={onOpenModal} />
        <div className={styles.projectBox_infoWrapper}>
          <div className={styles.projectBox_infoWrapper_info}>
            <p className={styles.projectBox_infoWrapper_info_title}>
              {project.title}
            </p>
            <p className={styles.projectBox_infoWrapper_info_type}>
              {project.type}
            </p>
          </div>
          <Button arrow myClick={onOpenModal} />
        </div>
      </div>
    </>
  );
};

export default ProjectBox;
