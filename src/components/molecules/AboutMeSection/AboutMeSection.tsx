import { sectionProps } from "../../../utils/types/types";
import style from "./aboutMeSection.module.scss";

const AboutMeSection = (props: sectionProps) => {
  return (
    <div id={props.id} className={style.aboutMe}>
      AboutMeSection
    </div>
  );
};

export default AboutMeSection;
