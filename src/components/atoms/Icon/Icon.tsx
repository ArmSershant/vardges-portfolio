import styles from "./icon.module.scss";
const Icon = ({ fb, gh, ln }: { fb?: boolean; gh?: boolean; ln?: boolean }) => {
  return (
    <div className={styles.icon}>
      {fb && (
        <a
          className={styles.icon_facebook}
          target="_blank"
          href="https://www.facebook.com/ArmSershant"
        >
          <img src="src/assets/icons/social/facebook.svg" alt="fb-icon" />
        </a>
      )}
      {gh && (
        <a
          className={styles.icon_github}
          target="_blank"
          href="https://github.com/ArmSershant"
        >
          <img src="src/assets/icons/social/github.svg" alt="gh-icon" />
        </a>
      )}
      {ln && (
        <a
          className={styles.icon_linkedin}
          target="_blank"
          href="https://www.linkedin.com/in/vardges-movsesyan/"
        >
          <img src="src/assets/icons/social/linkedin.svg" alt="ln-icon" />
        </a>
      )}
    </div>
  );
};

export default Icon;
