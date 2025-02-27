import { ServiceBoxProps } from "../../../utils/types/types";
import styles from "./serviceBox.module.scss";

const ServiceBox = ({ icon, image, title, description }: ServiceBoxProps) => {
  return (
    <div className={styles.serviceBox}>
      <div
        className={styles.serviceBox_wrapper}
        style={{ backgroundImage: `url(${image})` }}
      >
        <img className={styles.serviceBox_wrapper_icon} src={icon} alt={icon} />
        <p className={styles.serviceBox_wrapper_title}>{title}</p>
        <p className={styles.serviceBox_wrapper_description}>{description}</p>
      </div>
    </div>
  );
};

export default ServiceBox;
