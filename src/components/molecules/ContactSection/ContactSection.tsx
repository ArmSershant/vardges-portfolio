import { sectionProps } from "../../../utils/types/types";
import styles from "./contactSection.module.scss";

const ContactSection = (props: sectionProps) => {
  return (
    <div id={props.id} className={styles.contact}>
      <div></div>
    </div>
  );
};

export default ContactSection;
