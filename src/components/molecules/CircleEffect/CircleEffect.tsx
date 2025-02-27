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
    <div
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
        } as never
      }
    >
      <img src="src/assets/effects/effect.svg" alt="circle effect" />
    </div>
  );
};

export default CircleEffect;
