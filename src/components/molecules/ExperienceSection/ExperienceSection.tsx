import { sectionProps } from "../../../utils/types/types";
import style from "./experienceSection.module.scss";

const ExperienceSection = (props: sectionProps) => {
  return (
    <div id={props.id} className={style.experience}>
      ExperienceSection
    </div>
  );
};

export default ExperienceSection;
