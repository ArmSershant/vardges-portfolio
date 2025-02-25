import { sectionProps } from "../../../utils/types/types";
import style from "./mainSection.module.scss";
const MainSection = (props: sectionProps) => {
  return (
    <div id={props.id} className={style.main}>
      MainSection
    </div>
  );
};

export default MainSection;
