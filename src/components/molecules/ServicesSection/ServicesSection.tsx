import { sectionProps } from "../../../utils/types/types";
import styles from "./ServicesSection.module.scss";

const ServicesSection = (props: sectionProps) => {
  return (
    <div id={props.id} className={styles.services}>
      <div></div>
    </div>
  );
};

export default ServicesSection;
