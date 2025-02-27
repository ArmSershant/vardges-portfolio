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
