import AboutMeSection from "../../components/molecules/AboutMeSection/AboutMeSection";
import ContactSection from "../../components/molecules/ContactSection/ContactSection";
import ExperienceSection from "../../components/molecules/ExperienceSection/ExperienceSection";
import Footer from "../../components/molecules/Footer/Footer";
import MainSection from "../../components/molecules/MainSection/MainSection";
import MarqueSection from "../../components/molecules/MarqueeSection/MarqueeSection";
import Navbar from "../../components/molecules/Navbar/Navbar";
import ProjectsSection from "../../components/molecules/ProjectsSection/ProjectsSection";
import ServicesSection from "../../components/molecules/ServicesSection/ServicesSection";

const DefaultLayout = () => {
  return (
    <>
      <Navbar />
      {/* sections */}

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
