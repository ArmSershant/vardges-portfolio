import { useEffect, useState } from "react";
import { scrolling } from "../../../utils/functions/scrolling";
import Button from "../../atoms/Button/Button";
import styles from "./navbar.module.scss";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent, section: string) => {
    setActiveLink(section);
    scrolling(e, section);
  };

  return (
    <div className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.navbar_wrapper}>
        <div className={styles.navbar_wrapper_logo}>
          <img src="/logo.png" alt="vardges-logo" />
          ardges
        </div>
        <div className={styles.navbar_wrapper_links}>
          {[
            "home",
            "about",
            "projects",
            "services",
            "experience",
            "contact",
          ].map((section) => (
            <a
              key={section}
              onClick={(e) => handleClick(e, section)}
              className={
                activeLink === section
                  ? styles.active_underline
                  : styles.inactive_underline
              }
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>
        <a
          className={styles.navbar_wrapper_contactLink}
          onClick={(e) => handleClick(e, "contact")}
        >
          <Button>Let's Talk</Button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
