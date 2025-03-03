import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import arrowUp from "../../../assets/icons/up.svg";
import styles from "./scrollButton.module.scss";

const ScrollButton = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };
    window.addEventListener("scroll", updatePosition);
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {scrollPosition > 300 && (
        <motion.button
          className={styles.scroll}
          onClick={scrollToTop}
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { duration: 0.6 } }}
          exit={{ y: 100, opacity: 0, transition: { duration: 0.6 } }}
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 1 }}
        >
          <img
            className={styles.scroll_buttonImg}
            src={arrowUp}
            alt="arrow up"
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollButton;
