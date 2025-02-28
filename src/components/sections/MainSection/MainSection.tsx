import { Typewriter } from "react-simple-typewriter";
import { scrolling } from "../../../utils/functions/scrolling";
import { sectionProps } from "../../../utils/types/types";
import Button from "../../atoms/Button/Button";
import Icon from "../../molecules/Icon/Icon";
import styles from "./mainSection.module.scss";
import vardges from "../../../assets/images/vardges.png";

const MainSection = (props: sectionProps) => {
  return (
    <div id={props.id} className={styles.main}>
      <div className={styles.main_wrapper}>
        <div className={styles.main_wrapper_info}>
          <div className={styles.main_wrapper_info_name}>
            <p>Vardges Movsesyan</p>
          </div>
          <div className={styles.main_wrapper_info_profession}>
            <p>Hey! I'm Vardges</p>
            <p>
              <Typewriter
                words={["I'm a Developer", "I'm a Developer"]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={2500}
              />
            </p>
          </div>
          <div className={styles.main_wrapper_info_saying}>
            <p>
              <Typewriter
                words={[
                  "Clean code always looks like it was written by someone who cares.",
                ]}
                typeSpeed={50}
              />
            </p>
          </div>
          <div className={styles.main_wrapper_info_contacts}>
            <a
              className={styles.main_wrapper_info_contacts_contactLink}
              onClick={(e) => scrolling(e, "contact")}
            >
              <Button arrow={true}>GET IN TOUCH</Button>
            </a>
            <div>
              <Icon fb />
              <Icon gh />
              <Icon ln />
            </div>
          </div>
        </div>
        <div className={styles.main_wrapper_image}>
          <img src={vardges} alt="vardges" />
        </div>
      </div>
    </div>
  );
};

export default MainSection;
