import facebook from "../../../assets/icons/social/facebook.svg";
import fiverr from "../../../assets/icons/social/fiverr.svg";
import github from "../../../assets/icons/social/github.svg";
import linkedin from "../../../assets/icons/social/linkedin.svg";
import live from "../../../assets/icons/social/live.png";
import resume from "../../../assets/icons/cv.png";
import styles from "./icon.module.scss";

const Icon = ({
  fb,
  gh,
  ln,
  fv,
  lv,
  cv,
  link,
}: {
  fb?: boolean;
  gh?: boolean;
  ln?: boolean;
  fv?: boolean;
  lv?: boolean;
  cv?: boolean;
  link?: string;
}) => {
  return (
    <div className={styles.icon}>
      {fb && (
        <a
          target="_blank"
          href={link ? link : "https://www.facebook.com/ArmSershant"}
        >
          <img src={facebook} alt="fb-icon" />
        </a>
      )}
      {gh && (
        <a
          target="_blank"
          href={link ? link : "https://github.com/ArmSershant"}
        >
          <img src={github} alt="gh-icon" />
        </a>
      )}
      {ln && (
        <a
          target="_blank"
          href={link ? link : "https://www.linkedin.com/in/vardges-movsesyan/"}
        >
          <img src={linkedin} alt="ln-icon" />
        </a>
      )}
      {fv && (
        <a
          target="_blank"
          href={link ? link : "https://www.fiverr.com/s/lj0gd0y"}
        >
          <img src={fiverr} alt="fv-icon" />
        </a>
      )}
      {lv && (
        <a target="_blank" href={link}>
          <img src={live} alt="lv-icon" />
        </a>
      )}
      {cv && (
        <a target="_blank" href={link} download>
          <img src={resume} alt="cv-icon" />
        </a>
      )}
    </div>
  );
};

export default Icon;
