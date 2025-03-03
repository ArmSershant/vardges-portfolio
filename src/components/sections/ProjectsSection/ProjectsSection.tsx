import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { useState } from "react";
// @ts-expect-error swiper
import "swiper/css";
// @ts-expect-error swiper
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { springTransition } from "../../../utils/transitions";
import { Project, sectionProps } from "../../../utils/types/types";
import Modal from "../../atoms/Modal/Modal";
import ProjectBox from "../../molecules/ProjectBox/ProjectBox";
import { projects } from "./../../../utils/projects";
import styles from "./projectsSection.module.scss";

const ProjectsSection = (props: sectionProps) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
  };
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
        <div className={styles.projects_wrapper_projectBoxes}>
          <Swiper
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            autoplay
            rewind={true}
            navigation={true}
            modules={[Autoplay, Pagination]}
            className={styles.projects_wrapper_projectBoxes_wrapper}
          >
            {projects.map((project, index) => {
              return (
                <SwiperSlide
                  key={index}
                  className={styles.projects_wrapper_projectBoxes_wrapper_slide}
                >
                  <ProjectBox
                    {...project}
                    onOpenModal={() => handleOpenModal(project)}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
          {selectedProject && (
            <Modal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsSection;
