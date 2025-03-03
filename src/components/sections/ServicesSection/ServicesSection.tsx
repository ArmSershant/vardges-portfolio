import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { serviceIcons, serviceImages } from "../../../utils/images";
import { sectionProps } from "../../../utils/types/types";
import ServiceBox from "../../molecules/ServiceBox/ServiceBox";
import { springTransition } from "./../../../utils/transitions";
import styles from "./servicesSection.module.scss";

const ServicesSection = (props: sectionProps) => {
  return (
    <div id={props.id} className={styles.services}>
      <div className={styles.services_wrapper}>
        <div className={styles.services_wrapper_info}>
          <motion.div
            transition={springTransition}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={styles.services_wrapper_info_title}
          >
            <p>Services</p>
          </motion.div>
          <div className={styles.services_wrapper_info_providing}>
            <p>
              <Typewriter
                words={["Services I am providing", "Services I am providing"]}
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
          className={styles.services_wrapper_serviceBoxes}
        >
          <ServiceBox
            icon={serviceIcons.icon1}
            image={serviceImages.service1}
            title="Web Design"
            description="Creating modern, user-friendly & responsive designs."
          />
          <ServiceBox
            icon={serviceIcons.icon2}
            image={serviceImages.service2}
            title="Web Development"
            description="Building fast, scalable & feature-rich websites."
          />
          <ServiceBox
            icon={serviceIcons.icon3}
            image={serviceImages.service3}
            title="SEO Marketing"
            description="Boosting search rankings & website performance."
          />
          <ServiceBox
            icon={serviceIcons.icon4}
            image={serviceImages.service4}
            title="Graphic Design"
            description="Designing logos, banners & branding visuals."
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesSection;
