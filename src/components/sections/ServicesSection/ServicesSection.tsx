import { Typewriter } from "react-simple-typewriter";
import { serviceIcons, serviceImages } from "../../../utils/images";
import { sectionProps } from "../../../utils/types/types";
import ServiceBox from "../../molecules/ServiceBox/ServiceBox";
import styles from "./servicesSection.module.scss";

const ServicesSection = (props: sectionProps) => {
  return (
    <div id={props.id} className={styles.services}>
      <div className={styles.services_wrapper}>
        <div className={styles.services_wrapper_info}>
          <div className={styles.services_wrapper_info_title}>
            <p>Services</p>
          </div>
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
        <div className={styles.services_wrapper_serviceBoxes}>
          <ServiceBox
            icon={serviceIcons.icon1}
            image={serviceImages.service1}
            title="Web Design"
            description="Creating modern, user-friendly, and responsive designs."
          />
          <ServiceBox
            icon={serviceIcons.icon2}
            image={serviceImages.service2}
            title="Web Development"
            description="Building fast, scalable, and feature-rich websites."
          />
          <ServiceBox
            icon={serviceIcons.icon3}
            image={serviceImages.service3}
            title="SEO Marketing"
            description="Boosting search rankings and website performance."
          />
          <ServiceBox
            icon={serviceIcons.icon4}
            image={serviceImages.service4}
            title="Graphic Design"
            description="Designing logos, banners, and branding visuals."
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
