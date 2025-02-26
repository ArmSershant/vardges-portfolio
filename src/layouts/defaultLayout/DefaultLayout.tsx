import { useEffect } from "react";
import Dot from "../../components/atoms/Dot/Dot";
import AboutMeSection from "../../components/molecules/AboutMeSection/AboutMeSection";
import ContactSection from "../../components/molecules/ContactSection/ContactSection";
import ExperienceSection from "../../components/molecules/ExperienceSection/ExperienceSection";
import Footer from "../../components/molecules/Footer/Footer";
import MainSection from "../../components/molecules/MainSection/MainSection";
import MarqueSection from "../../components/molecules/MarqueeSection/MarqueeSection";
import Navbar from "../../components/molecules/Navbar/Navbar";
import ProgressBar from "../../components/molecules/ProgressBar/ProgressBar";
import ProjectsSection from "../../components/molecules/ProjectsSection/ProjectsSection";
import ServicesSection from "../../components/molecules/ServicesSection/ServicesSection";

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
