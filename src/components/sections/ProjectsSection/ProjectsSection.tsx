import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { project1, project2, project3 } from "../../../utils/projects";
import { springTransition } from "../../../utils/transitions";
import { sectionProps } from "../../../utils/types/types";
import ProjectBox from "../../molecules/ProjectBox/ProjectBox";
import styles from "./projectsSection.module.scss";

const ProjectsSection = (props: sectionProps) => {
  return (
    <motion.div
      transition={springTransition}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      id={props.id}
      className={styles.projects}
    >
      <div className={styles.projects_wrapper}>
        <div className={styles.projects_wrapper_info}>
          <motion.div
            transition={springTransition}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={styles.projects_wrapper_info_title}
          >
            <p>PROJECTS</p>
          </motion.div>
          <div className={styles.projects_wrapper_info_providing}>
            <p>
              <Typewriter
                words={["MY RECENT PROJECTS", "MY RECENT PROJECTS"]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={2500}
              />
            </p>
          </div>
        </div>
        <motion.div
          transition={springTransition}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={styles.projects_wrapper_projectBoxes}
        >
          <ProjectBox {...project1} />
          <ProjectBox {...project2} />
          <ProjectBox {...project3} />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectsSection;
