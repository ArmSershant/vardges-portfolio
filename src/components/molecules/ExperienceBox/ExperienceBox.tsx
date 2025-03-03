import { motion } from "framer-motion";
import { springTransition } from "../../../utils/transitions";
import { ExperienceBoxProps } from "../../../utils/types/types";
import styles from "./experienceBox.module.scss";

const ExperienceBox = ({
  position,
  location,
  duration,
  type,
  title,
  description,
  jobUrl,
}: ExperienceBoxProps) => {
  return (
    <motion.div
      transition={springTransition}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={styles.experienceBox}
    >
      <div className={styles.experienceBox_wrapper}>
        <div className={styles.experienceBox_wrapper_job}>
          <p className={styles.experienceBox_wrapper_job_position}>
            {position}
          </p>
          <div>
            <p className={styles.experienceBox_wrapper_job_location}>
              {location}
            </p>
            <p className={styles.experienceBox_wrapper_job_duration}>
              {duration}
            </p>
          </div>
          <p className={styles.experienceBox_wrapper_job_type}>{type}</p>
        </div>
        <div className={styles.experienceBox_wrapper_about}>
          <a
            target="_blank"
            href={jobUrl}
            className={styles.experienceBox_wrapper_about_title}
          >
            {title}
          </a>
          <p className={styles.experienceBox_wrapper_about_description}>
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceBox;
