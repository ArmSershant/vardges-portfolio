import { motion } from "framer-motion";
import hacker from "../../../assets/images/hacker2.png";
import { springTransition } from "../../../utils/transitions";
import { sectionProps } from "../../../utils/types/types";
import Icon from "../../molecules/Icon/Icon";
import styles from "./contactSection.module.scss";

const ContactSection = (props: sectionProps) => {
  return (
    <motion.div
      transition={springTransition}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      id={props.id}
      className={styles.contact}
    >
      <div className={styles.contact_wrapper}>
        <motion.div
          transition={springTransition}
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className={styles.contact_wrapper_image}
        >
          <div className={styles.contact_wrapper_image_wrapper}>
            <img src={hacker} alt="hacker" />
          </div>
        </motion.div>
        <motion.div
          transition={springTransition}
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className={styles.contact_wrapper_info}
        >
          <div className={styles.contact_wrapper_info_text}>
            <p className={styles.contact_wrapper_info_text_title}>
              Let's discuss your project
            </p>
            <p className={styles.contact_wrapper_info_text_description}>
              Always available for freelancing if the right project comes along,
              Feel free to contact me.
            </p>
          </div>
          <div className={styles.contact_wrapper_info_contact}>
            <div className={styles.contact_wrapper_info_contact_email}>
              <p>Email</p>
              <a href="Mailto:vardges.movsesyan6@gmail.com">
                vardges.movsesyan6@gmail.com
              </a>
            </div>
            <div className={styles.contact_wrapper_info_contact_number}>
              <p>Number</p>
              <a href="Tel:+37496804036">+374 96 80 40 36</a>
            </div>
            <div className={styles.contact_wrapper_info_contact_links}>
              <Icon fb />
              <Icon gh />
              <Icon ln />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactSection;
