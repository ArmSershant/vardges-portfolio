import style from "./footer.module.scss";
const Footer = () => {
  return (
    <div className={style.footer}>
      © {new Date().getFullYear()} copyright all rights reserved
    </div>
  );
};

export default Footer;
