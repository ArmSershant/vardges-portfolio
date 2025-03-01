import Marquee from "react-fast-marquee";
import icons from "../../../utils/icons";
import { sectionProps } from "../../../utils/types/types";
import styles from "./marqueeSection.module.scss";
import { motion } from "framer-motion";
import { springTransition } from "../../../utils/transitions";

const MarqueeSection = (props: sectionProps) => {
  return (
    <motion.div
      transition={{ ...springTransition, delay: 0.1 }}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      id={props.id}
      className={styles.marquee}
    >
      <Marquee>
        <div className={styles.marquee_wrapper}>
          {icons.map((icon, index) => (
            <img key={index} src={icon} alt={icon} />
          ))}
        </div>
      </Marquee>
    </motion.div>
  );
};

export default MarqueeSection;
