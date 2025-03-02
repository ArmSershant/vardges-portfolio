import { motion, MotionStyle } from "framer-motion";
import circle from "../../../assets/effects/circle.svg";
import { springTransition } from "../../../utils/transitions";
import { CircleEffectProps } from "../../../utils/types/types";
import styles from "./circleEffect.module.scss";

const CircleEffect = ({
  top,
  left,
  right,
  bottom,
  scale,
  rotateDirection = "right",
}: CircleEffectProps) => {
  return (
    <motion.div
      transition={springTransition}
      initial={{
        opacity: 0,
        x: rotateDirection === "right" ? 50 : -50,
      }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className={`${styles.effect} ${
        rotateDirection === "right" ? styles.rotateRight : styles.rotateLeft
      }`}
      style={
        {
          top: top,
          left: left,
          right: right,
          bottom: bottom,
          "--scale": scale,
        } as MotionStyle | undefined
      }
    >
      <img src={circle} alt="circle effect" />
    </motion.div>
  );
};

export default CircleEffect;
