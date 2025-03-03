export type sectionProps = {
  id: string;
};

export type CircleEffectProps = {
  top?: string | number;
  left?: string | number;
  right?: string | number;
  bottom?: string | number;
  scale?: string | number;
  rotateDirection?: "right" | "left";
};

export type ServiceBoxProps = {
  image?: string;
  icon?: string;
  title?: string;
  description?: string;
};

export type ExperienceBoxProps = {
  position?: string;
  location?: "Remote" | "Onsite" | "Hybrid";
  duration?: string;
  type?: "Full Time" | "Part Time" | "Internship" | "Contract";
  title?: string;
  description?: string;
  jobUrl?: string;
};

export type Project = {
  title?: string;
  description?: string;
  photoURL?: string;
  videoURL?: string;
  type?: string;
  stack?: string;
  liveURL?: string;
  fiverr?: string;
  github?: string;
};

export interface ProjectBoxProps extends Project {
  onOpenModal: () => void;
}

export interface ModalProps {
  project: Project;
  onClose: () => void;
}

export type BurgerMenuProps = {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleClick: (e: React.MouseEvent, section: string) => void;
  activeLink: string;
};
