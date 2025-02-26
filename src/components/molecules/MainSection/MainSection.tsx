import { Typewriter } from "react-simple-typewriter";
import { scrolling } from "../../../utils/functions/scrolling";
import { sectionProps } from "../../../utils/types/types";
import Button from "../../atoms/Button/Button";
import Icon from "../../atoms/Icon/Icon";
import styles from "./mainSection.module.scss";

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
                words={["I'm a Developer", "I'm a Designer"]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </p>
          </div>
          <div className={styles.main_wrapper_info_saying}>
            <p>
              <Typewriter
                words={[
                  "Clean code always looks like it was written by someone who cares.",
                  "Clean code always looks like it was written by someone who cares.",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000}
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
          <img src="src/assets/images/vardges.png" alt="vardges" />
        </div>
      </div>
    </div>
  );
};

export default MainSection;
