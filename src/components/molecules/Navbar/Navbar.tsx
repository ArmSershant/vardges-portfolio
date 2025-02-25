import { useEffect, useState } from "react";
import Button from "../../atoms/Button/Button";
import style from "./navbar.module.scss";

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
    <div className={`${style.navbar} ${scrolled ? style.scrolled : ""}`}>
      <div className={style.navbar_wrapper}>
        <div className={style.navbar_wrapper_logo}>
          <img
            src="/logo.png"
            alt="vardges-logo"
          />
      {/* <div style={{ width: '20px', height: '20px', backgroundColor: 'black' }}></div> */}
          ardges
        </div>
        <div className={style.navbar_wrapper_links}>
          <a href="#home">Home</a>
          <a href="#about">About Me</a>
          <a href="#projects">Projects</a>
          <a href="#services">Services</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
        <a className={style.navbar_wrapper_contactLink} href="#contact">
          <Button>Let's Talk</Button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
