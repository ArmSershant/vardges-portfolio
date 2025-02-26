import styles from "./footer.module.scss";
const Footer = () => {
  return (
    <div className={styles.footer}>
      © {new Date().getFullYear()} copyright all rights reserved
    </div>
  );
};

export default Footer;
