import { useEffect } from "react";
import Dot from "../../components/molecules/Dot/Dot";
import Footer from "../../components/molecules/Footer/Footer";
import Navbar from "../../components/molecules/Navbar/Navbar";
import ProgressBar from "../../components/molecules/ProgressBar/ProgressBar";
import AboutMeSection from "../../components/sections/AboutMeSection/AboutMeSection";
import ContactSection from "../../components/sections/ContactSection/ContactSection";
import ExperienceSection from "../../components/sections/ExperienceSection/ExperienceSection";
import MainSection from "../../components/sections/MainSection/MainSection";
import MarqueeSection from "../../components/sections/MarqueeSection/MarqueeSection";
import ProjectsSection from "../../components/sections/ProjectsSection/ProjectsSection";
import ServicesSection from "../../components/sections/ServicesSection/ServicesSection";
import ScrollButton from "../../components/atoms/ScrollButton/ScrollButton";

const DefaultLayout = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <ProgressBar />
      <Dot />
      <ScrollButton/>
      <Navbar />
      <MainSection id={"home"} />
      <MarqueeSection />
      <AboutMeSection id={"about"} />
      <ProjectsSection id={"projects"} />
      <ServicesSection id={"services"} />
      <ExperienceSection id={"experience"} />
      <ContactSection id={"contact"} />
      <Footer />
    </>
  );
};

export default DefaultLayout;
