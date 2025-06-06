import { useEffect, useState } from "react";
import burgerButton from "../../../assets/icons/burger.svg";
import { scrolling, scrollToTop } from "../../../utils/functions/scrolling";
import Button from "../../atoms/Button/Button";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import styles from "./navbar.module.scss";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent, section: string) => {
    e?.preventDefault();
    setActiveLink(section);
    scrolling(e, section);
    setMenuOpen(false);
  };

  return (
    <div className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.navbar_wrapper}>
        <div
          onClick={() => scrollToTop()}
          className={styles.navbar_wrapper_logo}
        >
          <img src="/logo.png" alt="vardges-logo" />
          ardges
        </div>

        {/* Desktop Navigation */}
        <div className={styles.navbar_wrapper_navigation}>
          <div className={styles.navbar_wrapper_navigation_links}>
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
            className={styles.navbar_wrapper_navigation_contactLink}
            onClick={(e) => handleClick(e, "contact")}
          >
            <Button>Let's Talk</Button>
          </a>
        </div>

        {/* Open Menu Button */}
        <div className={styles.navbar_wrapper_open}>
          <img
            width={"25px"}
            src={burgerButton}
            alt="burger icon"
            onClick={(e) => {
              e.stopPropagation();
              setMenuOpen(true);
            }}
          />
        </div>

        <BurgerMenu
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          handleClick={handleClick}
          activeLink={activeLink}
        />
      </div>
    </div>
  );
};

export default Navbar;
