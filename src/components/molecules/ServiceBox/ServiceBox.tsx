import { motion } from "framer-motion";
import { springTransition } from "../../../utils/transitions";
import { ServiceBoxProps } from "../../../utils/types/types";
import styles from "./serviceBox.module.scss";

const ServiceBox = ({ icon, image, title, description }: ServiceBoxProps) => {
  return (
    <motion.div
      transition={springTransition}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={styles.serviceBox}
    >
      <div
        className={styles.serviceBox_wrapper}
        style={{ backgroundImage: `url(${image})` }}
      >
        <img className={styles.serviceBox_wrapper_icon} src={icon} alt={icon} />
        <p className={styles.serviceBox_wrapper_title}>{title}</p>
        <p className={styles.serviceBox_wrapper_description}>{description}</p>
      </div>
    </motion.div>
  );
};

export default ServiceBox;
