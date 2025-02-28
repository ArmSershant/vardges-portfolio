import styles from "./button.module.scss";

const Button = ({
  myClick,
  arrow,
  children,
}: {
  myClick?: () => void;
  arrow?: boolean;
  children?: string;
}) => {
  return (
    <div className={styles.button} onClick={myClick}>
      {children}{" "}
      {arrow ? <img src="src/assets/icons/arrow-up.svg" alt="arrow" /> : ""}
    </div>
  );
};

export default Button;
