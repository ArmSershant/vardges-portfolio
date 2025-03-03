import { ModalProps } from "../../../utils/types/types";
import Icon from "./../../molecules/Icon/Icon";
import styles from "./modal.module.scss";

const Modal = ({ project, onClose }: ModalProps) => {
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div
        className={styles.modalOverlay_modal}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className={styles.modalOverlay_modal_closeButton}
          onClick={onClose}
        >
          &times;
        </button>
        <div className={styles.modalOverlay_modal_content}>
          {project.videoURL ? (
            <video
              src={project.videoURL}
              autoPlay
              className={styles.modalOverlay_modal_content_projectVideo}
            />
          ) : (
            <img
              src={project.photoURL}
              alt={project.title}
              className={styles.modalOverlay_modal_content_projectImage}
            />
          )}
          <div className={styles.modalOverlay_modal_content_projectDetails}>
            <h2
              className={styles.modalOverlay_modal_content_projectDetails_title}
            >
              {project.title}
            </h2>
            <p
              className={
                styles.modalOverlay_modal_content_projectDetails_description
              }
            >
              {project.description}
            </p>
            <div
              className={
                styles.modalOverlay_modal_content_projectDetails_technologies
              }
            >
              <div
                className={
                  styles.modalOverlay_modal_content_projectDetails_technologies_type
                }
              >
                <p>Type:</p>
                <p>{project.type}</p>
              </div>
              <div
                className={
                  styles.modalOverlay_modal_content_projectDetails_technologies_stack
                }
              >
                <p>Stack:</p>
                <p>{project.stack}</p>
              </div>
            </div>
            <div
              className={styles.modalOverlay_modal_content_projectDetails_links}
            >
              <Icon lv link={project.liveURL} />
              <Icon gh link={project.github} />
              <Icon fv link={project.fiverr} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
