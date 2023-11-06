import SectionTitle from "@/components/shared/sectionTitle/SectionTitle";
import styles from "./AboutPage.module.css";
import AboutTradeVenture from "@/components/about/AboutTradeVenture";
import OurMission from "@/components/about/ourMission/ourMission";
import WhyChoose from "@/components/about/WhyChoose/WhyChoose";

const AboutPage = () => {
  return (
    <div className={styles.aboutPage}>
      <SectionTitle title={"About Trade Ventures"} />
      <AboutTradeVenture />
      <OurMission />

      <WhyChoose />
    </div>
  );
};

export default AboutPage;
