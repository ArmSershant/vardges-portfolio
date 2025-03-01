import { FC } from "react";
import styles from "./modal.module.scss";
import { ModalProps } from "../../../utils/types/types";

const Modal: FC<ModalProps> = ({ project, onClose }) => {
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
              controls
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
            <h2 className={styles.modalOverlay_modal_projectDetails_title}>
              {project.title}
            </h2>
            <p className={styles.modalOverlay_modal_projectDetails_type}>
              Type: {project.type}
            </p>
            <p className={styles.modalOverlay_modal_projectDetails_description}>
              Description: {project.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
