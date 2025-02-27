import { useEffect } from "react";
import Dot from "../../components/molecules/Dot/Dot";
import AboutMeSection from "../../components/molecules/sections/AboutMeSection/AboutMeSection";
import ContactSection from "../../components/molecules/sections/ContactSection/ContactSection";
import ExperienceSection from "../../components/molecules/sections/ExperienceSection/ExperienceSection";
import Footer from "../../components/molecules/Footer/Footer";
import MainSection from "../../components/molecules/sections/MainSection/MainSection";
import MarqueSection from "../../components/molecules/sections/MarqueeSection/MarqueeSection";
import Navbar from "../../components/molecules/Navbar/Navbar";
import ProgressBar from "../../components/molecules/ProgressBar/ProgressBar";
import ProjectsSection from "../../components/molecules/sections/ProjectsSection/ProjectsSection";
import ServicesSection from "../../components/molecules/sections/ServicesSection/ServicesSection";

const DefaultLayout = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <ProgressBar />
      <Dot />
      <Navbar />
      <MainSection id={"home"} />
      <MarqueSection id={"maruqee"} />
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
