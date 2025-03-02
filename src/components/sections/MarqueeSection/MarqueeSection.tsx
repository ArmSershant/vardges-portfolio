import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import icons from "../../../utils/icons";
import { springTransition } from "../../../utils/transitions";
import styles from "./marqueeSection.module.scss";

const MarqueeSection = () => {
  return (
    <motion.div
      transition={{ ...springTransition, delay: 0.1 }}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={styles.marquee}
    >
      <Marquee pauseOnHover={true}>
        <div className={styles.marquee_wrapper}>
          {icons.map((icon, index) => (
            <div key={index} className={styles.marquee_wrapper_content}>
              <a target="_blank" href={icon.url}>
                <img  src={icon.img} alt={icon.name} />
                <p>{icon.name}</p>
              </a>
            </div>
          ))}
        </div>
      </Marquee>
    </motion.div>
  );
};

export default MarqueeSection;
