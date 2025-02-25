import style from "./button.module.scss";

const Button = ({ children }: { children: string }) => {
  return <div className={style.button}>{children}</div>;
};

export default Button;
