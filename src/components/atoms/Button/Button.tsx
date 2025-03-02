import styles from "./button.module.scss";
import arrowUp from "../../../assets/icons/arrow-up.svg";

const Button = ({
  myClick,
  arrow,
  children,
}: {
  myClick?: (e?: any) => void;
  arrow?: boolean;
  children?: string;
}) => {
  return (
    <div className={styles.button} onClick={myClick}>
      {children} {arrow ? <img src={arrowUp} alt="arrow" /> : ""}
    </div>
  );
};

export default Button;
