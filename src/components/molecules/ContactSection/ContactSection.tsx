import { sectionProps } from "../../../utils/types/types";
import style from "./contactSection.module.scss";

const ContactSection = (props: sectionProps) => {
  return (
    <div id={props.id} className={style.contact}>
      ContactSection
    </div>
  );
};

export default ContactSection;
