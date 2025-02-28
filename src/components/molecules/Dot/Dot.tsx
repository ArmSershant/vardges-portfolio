import { useEffect, useRef } from "react";
import styles from "./dot.module.scss";

const Dot = () => {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const position = useRef({ x: 100, y: 300 });
  const target = useRef({ x: 100, y: 300 });
  const speed = 0.3;

  useEffect(() => {
    const moveDot = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };

    const animate = () => {
      position.current.x += (target.current.x - position.current.x) * speed;
      position.current.y += (target.current.y - position.current.y) * speed;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${position.current.x}px, ${position.current.y}px) translate(-50%, -50%)`;
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", moveDot);
    animate();

    return () => window.removeEventListener("mousemove", moveDot);
  }, []);

  return <div ref={dotRef} className={styles.dot}></div>;
};

export default Dot;
