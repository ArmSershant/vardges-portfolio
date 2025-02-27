import { Typewriter } from "react-simple-typewriter";
import { scrolling } from "../../../../utils/functions/scrolling";
import { sectionProps } from "../../../../utils/types/types";
import Button from "../../../atoms/Button/Button";
import CircleEffect from "../../CircleEffect/CircleEffect";
import styles from "./aboutMeSection.module.scss";

const AboutMeSection = (props: sectionProps) => {
  return (
    <div id={props.id} className={styles.aboutMe}>
      <div className={styles.aboutMe_wrapper}>
        <CircleEffect top={"5%"} left={"90%"} />
        <CircleEffect top={"75%"} right={"90%"} scale={"2"} rotateDirection="left" />
        <div className={styles.aboutMe_wrapper_image}>
          <div className={styles.aboutMe_wrapper_image_wrapper}>
            <img src="src/assets/images/hacker.png" alt="hacker" />
          </div>
        </div>
        <div className={styles.aboutMe_wrapper_info}>
          <div className={styles.aboutMe_wrapper_info_title}>
            <p>ABOUT ME</p>
          </div>
          <div className={styles.aboutMe_wrapper_info_available}>
            <p>I AM AVAILABLE FOR </p>
            <p>
              <Typewriter
                words={["FULL STACK PROJECTS", "FULL STACK PROJECTS"]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={2500}
              />
            </p>
          </div>
          <div className={styles.aboutMe_wrapper_info_saying}>
            <p>
              <Typewriter
                words={[
                  "Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning.",
                ]}
                typeSpeed={50}
              />
            </p>
          </div>
          <div className={styles.aboutMe_wrapper_info_reviews}>
            <div className={styles.aboutMe_wrapper_info_reviews_reviewBox}>
              <p
                className={styles.aboutMe_wrapper_info_reviews_reviewBox_number}
              >
                50+
              </p>
              <p className={styles.aboutMe_wrapper_info_reviews_reviewBox_text}>
                people reviews
              </p>
            </div>
            <div className={styles.aboutMe_wrapper_info_reviews_reviewBox}>
              <p
                className={styles.aboutMe_wrapper_info_reviews_reviewBox_number}
              >
                5+
              </p>
              <p className={styles.aboutMe_wrapper_info_reviews_reviewBox_text}>
                years experience
              </p>
            </div>
            <div className={styles.aboutMe_wrapper_info_reviews_reviewBox}>
              <p
                className={styles.aboutMe_wrapper_info_reviews_reviewBox_number}
              >
                10+
              </p>
              <p className={styles.aboutMe_wrapper_info_reviews_reviewBox_text}>
                awward winning
              </p>
            </div>
          </div>
          <div className={styles.aboutMe_wrapper_info_getInTouch}>
            <a
              className={styles.aboutMe_wrapper_info_getInTouch_contactLink}
              onClick={(e) => scrolling(e, "contact")}
            >
              <Button arrow={true}>GET IN TOUCH</Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeSection;
