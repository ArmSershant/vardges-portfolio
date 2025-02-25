import style from "./navbar.module.scss";

const Navbar = () => {
  return (
    <div className={style.navbar}>
      <div>logo</div>
      <div className={style.navbar_links}>
        <a href="#home">Home</a>
        <a href="#about">About Me</a>
        <a href="#projects">Projects</a>
        <a href="#services">Services</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </div>
      <div>
        <a href="#contact">Let's talk</a>
      </div>
    </div>
  );
};

export default Navbar;
