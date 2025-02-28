import { CircleEffectProps } from "../../../utils/types/types";
import styles from "./circleEffect.module.scss";
import circle from "../../../assets/effects/circle.svg"

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
      <img src={circle} alt="circle effect" />
    </div>
  );
};

export default CircleEffect;
