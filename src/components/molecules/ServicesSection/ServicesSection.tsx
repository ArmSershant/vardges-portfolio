import { sectionProps } from "../../../utils/types/types";
import style from "./ServicesSection.module.scss";

const ServicesSection = (props: sectionProps) => {
  return (
    <div id={props.id} className={style.services}>
      ServicesSection
    </div>
  );
};

export default ServicesSection;
