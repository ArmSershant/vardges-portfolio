import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import vardges from "../../../assets/images/vardges.png";
import { scrolling } from "../../../utils/functions/scrolling";
import { springTransition } from "../../../utils/transitions";
import { sectionProps } from "../../../utils/types/types";
import Button from "../../atoms/Button/Button";
import Icon from "../../molecules/Icon/Icon";
import styles from "./mainSection.module.scss";

const MainSection = (props: sectionProps) => {
  return (
    <div id={props.id} className={styles.main}>
      <div className={styles.main_wrapper}>
        <motion.div
          transition={springTransition}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className={styles.main_wrapper_info}
        >
          <motion.div
            transition={{ ...springTransition, delay: 0.2 }}
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            className={styles.main_wrapper_info_name}
          >
            <p>Vardges Movsesyan</p>
          </motion.div>
          <motion.div
            transition={{ ...springTransition, delay: 0.3 }}
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            className={styles.main_wrapper_info_profession}
          >
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
          </motion.div>
          <motion.div
            transition={{ ...springTransition, delay: 0.4 }}
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            className={styles.main_wrapper_info_saying}
          >
            <p>
              <Typewriter
                words={[
                  "Clean code always looks like it was written by someone who cares.",
                ]}
                typeSpeed={50}
              />
            </p>
          </motion.div>
          <motion.div
            transition={{ ...springTransition, delay: 0.5 }}
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            className={styles.main_wrapper_info_contacts}
          >
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
              <Icon fv />
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          transition={{ ...springTransition, delay: 0.8 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className={styles.main_wrapper_image}
        >
          <img src={vardges} alt="vardges" />
        </motion.div>
      </div>
    </div>
  );
};

export default MainSection;
