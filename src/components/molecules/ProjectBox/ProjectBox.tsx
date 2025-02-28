import { useState } from "react";
import { Project } from "../../../utils/types/types";
import Button from "../../atoms/Button/Button";
import Modal from "../../atoms/Modal/Modal";
import styles from "./projectBox.module.scss";

const ProjectBox = ({ ...project }: Project) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <div className={styles.projectBox}>
        <img src={project.photoURL} alt={project.title} />
        <div className={styles.projectBox_infoWrapper}>
          <div className={styles.projectBox_infoWrapper_info}>
            <p className={styles.projectBox_infoWrapper_info_title}>
              {project.title}
            </p>
            <p className={styles.projectBox_infoWrapper_info_type}>
              {project.type}
            </p>
          </div>
          <Button arrow myClick={handleOpenModal} />
        </div>
      </div>
      {isOpen && <Modal project={project} onClose={() => setIsOpen(false)} />}
    </>
  );
};

export default ProjectBox;
