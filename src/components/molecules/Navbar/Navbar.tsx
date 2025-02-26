import { useEffect, useState } from "react";
import Button from "../../atoms/Button/Button";
import styles from "./navbar.module.scss";
import { scrolling } from "../../../utils/functions/scrolling";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.navbar_wrapper}>
        <div className={styles.navbar_wrapper_logo}>
          <img src="/logo.png" alt="vardges-logo" />
          ardges
        </div>
        <div className={styles.navbar_wrapper_links}>
          <a onClick={(e) => scrolling(e, "home")}>Home</a>
          <a onClick={(e) => scrolling(e, "about")}>About Me</a>
          <a onClick={(e) => scrolling(e, "projects")}>Projects</a>
          <a onClick={(e) => scrolling(e, "services")}>Services</a>
          <a onClick={(e) => scrolling(e, "experience")}>Experience</a>
          <a onClick={(e) => scrolling(e, "contact")}>Contact</a>
        </div>
        <a
          className={styles.navbar_wrapper_contactLink}
          onClick={(e) => scrolling(e, "contact")}
        >
          <Button>Let's Talk</Button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
