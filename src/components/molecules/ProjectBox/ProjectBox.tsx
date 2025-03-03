import { motion } from "framer-motion";
import { springTransition } from "../../../utils/transitions";
import { ProjectBoxProps } from "../../../utils/types/types";
import Button from "../../atoms/Button/Button";
import styles from "./projectBox.module.scss";

const ProjectBox = ({ onOpenModal, ...project }: ProjectBoxProps) => {
  return (
    <motion.div
      transition={springTransition}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={styles.projectBox}
    >
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
    </motion.div>
  );
};

export default ProjectBox;
