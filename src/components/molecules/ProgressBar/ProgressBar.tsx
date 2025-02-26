import { useScroll, motion, useSpring } from "framer-motion";
import styles from "./progressBar.module.scss";

const ProgressBar: React.FunctionComponent = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return <motion.div className={styles.progress} style={{ scaleX }} />;
};

export default ProgressBar;
