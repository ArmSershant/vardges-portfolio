import styles from "./button.module.scss";

const Button = ({ arrow, children }: { arrow?: boolean; children: string }) => {
  return (
    <div className={styles.button}>
      {children}{" "}
      {arrow ? <img src="src/assets/icons/arrow-up.svg" alt="arrow" /> : ""}
    </div>
  );
};

export default Button;
