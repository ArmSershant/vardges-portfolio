import { useEffect } from "react";
import { slide as Menu } from "react-burger-menu";
import Button from "../../atoms/Button/Button";
import styles from "./burgerMenu.module.scss";
import { BurgerMenuProps } from "../../../utils/types/types";

const BurgerMenu = ({
  menuOpen,
  setMenuOpen,
  handleClick,
  activeLink,
}: BurgerMenuProps) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);
  return (
    <Menu
      noOverlay
      right
      isOpen={menuOpen}
      onStateChange={({ isOpen }) => setMenuOpen(isOpen)}
      className={styles.burger}
      customCrossIcon={false}
      customBurgerIcon={false}
      disableOverlayClick
      styles={{
        bmMenuWrap: {
          position: "fixed",
          width: "100vw",
          height: "100vh",
          zIndex: "9998",
          top: "0",
          left: "0",
        },
        bmMenu: {
          background: "linear-gradient(to right, #07233b, #040c16)",
          padding: "2.5rem 1.5rem",
          fontSize: "1.5em",
          display: "flex",
          justifyContent: "flexStart",
          alignItems: "center",
          position: "relative",
          zIndex: "9999",
        },
        bmItemList: {
          display: "flex",
          flexDirection: "column",
          justifyContent: "flexStart",
          alignItems: "center",
          gap: "1.5rem",
        },
        bmOverlay: {
          position: "relative",
          zIndex: "9997",
        },
      }}
    >
      <div className={styles.burger_navigation}>
        <span
          className={styles.burger_navigation_close}
          onClick={() => setMenuOpen(false)}
        >
          X
        </span>
        <div className={styles.burger_navigation_links}>
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
                activeLink === section ? styles.active : styles.inactive
              }
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>
        <div className={styles.burger_navigation_letsTalk}>
          <Button myClick={(e) => handleClick(e, "contact")}>Let's Talk</Button>
        </div>
      </div>
    </Menu>
  );
};

export default BurgerMenu;
