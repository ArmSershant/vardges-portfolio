import Marquee from "react-fast-marquee";
import { sectionProps } from "../../../utils/types/types";
import styles from "./marqueeSection.module.scss";
const MarqueeSection = (props: sectionProps) => {
  return (
    <div id={props.id} className={styles.marquee}>
      <Marquee>
        <div className={styles.marquee_wrapper}>
          <img src="src/assets/icons/stack/html.svg" alt="html" />
          <img src="src/assets/icons/stack/css.svg" alt="css" />
          <img src="src/assets/icons/stack/js.svg" alt="js" />
          <img src="src/assets/icons/stack/typescript.svg" alt="typescript" />
          <img src="src/assets/icons/stack/react.svg" alt="reactjs" />
          <img src="src/assets/icons/stack/angularjs.svg" alt="angularjs" />
          <img src="src/assets/icons/stack/svelte.svg" alt="sveltejs" />
          <img src="src/assets/icons/stack/nodejs.svg" alt="nodejs" />
          <img src="src/assets/icons/stack/express-js.svg" alt="expressjs" />
          <img src="src/assets/icons/stack/nestjs.svg" alt="nestjs" />
          <img src="src/assets/icons/stack/firebase.svg" alt="firebase" />
          <img src="src/assets/icons/stack/mysql.svg" alt="mysql" />
          <img src="src/assets/icons/stack/sql-server.svg" alt="sql-server" />
          <img src="src/assets/icons/stack/mongodb.svg" alt="mongodb" />
          <img src="src/assets/icons/stack/azure.svg" alt="azure" />
          <img src="src/assets/icons/stack/bootstrap.svg" alt="bootstrap" />
          <img src="src/assets/icons/stack/tailwindcss.svg" alt="tailwindcss" />
          {/* SASS */}
          <img src="src/assets/icons/stack/figma.svg" alt="figma" />
          <img src="src/assets/icons/stack/adobe-illustrator.svg" alt="adobe-illustrator" />
          <img src="src/assets/icons/stack/git.svg" alt="git" />
          <img src="src/assets/icons/stack/postman-api.svg" alt="postman-api" />
          <img src="src/assets/icons/stack/webpack.svg" alt="webpack" />
        </div>
      </Marquee>
    </div>
  );
};

export default MarqueeSection;
