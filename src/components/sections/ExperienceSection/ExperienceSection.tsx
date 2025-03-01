import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { springTransition } from "../../../utils/transitions";
import { sectionProps } from "../../../utils/types/types";
import ExperienceBox from "../../molecules/ExperienceBox/ExperienceBox";
import styles from "./experienceSection.module.scss";

const ExperienceSection = (props: sectionProps) => {
  return (
    <div id={props.id} className={styles.experience}>
      <div className={styles.experience_wrapper}>
        <div className={styles.experience_wrapper_info}>
          <motion.div
            transition={springTransition}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={styles.experience_wrapper_info_title}
          >
            <p>Experience</p>
          </motion.div>
          <div className={styles.experience_wrapper_info_providing}>
            <p>
              <Typewriter
                words={["MY WORK EXPERIENCE", "MY WORK EXPERIENCE"]}
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
          className={styles.experience_wrapper_experienceBoxes}
        >
          <ExperienceBox
            position="Svelte Developer"
            location="Remote"
            duration="May 2022 - Jul 2022"
            type="Full Time"
            title="Langoid"
            description="Langoid was created by a group of language lovers who are always experimenting with different ways to learn languages. They have tried and tested various language learning apps and tools and have combined their knowledge to create a platform that is designed for real language learners. From this experience we realized that even though there are so many tools available out there, we still encountered many obstacles."
            jobUrl="https://langoid.com"
          />
          <ExperienceBox
            position="Web/Game Developer"
            location="Onsite"
            duration="Jun 2023 - Nov 2024"
            type="Full Time"
            title="Prof It"
            description="PROFit D.C. is a company of experienced and qualified professionals who have interest in high-caliber web development. We work on a wide range of technologies ranging from open source to proprietary and custom built solutions, to deliver full spectrum of modern services to our customers globally. Our team of professionals is trying to be highly flexible in the competitive market."
            jobUrl="http://www.profitdeco.com/"
          />
          <ExperienceBox
            position="Full-Stack Developer"
            location="Remote"
            duration="Sep 2024 - Present"
            type="Contract"
            title="Upwork"
            description="Upwork is a global freelancing platform that connects businesses with independent professionals and agencies. It provides a wide range of job opportunities in fields like software development, design, writing, marketing, and more. As a Full-Stack Developer on Upwork, I collaborate with clients on various projects, delivering high-quality solutions tailored to their needs. This role allows me to work with diverse technologies, solve unique challenges, and build strong professional relationships across industries."
            jobUrl="https://upwork.com"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ExperienceSection;
