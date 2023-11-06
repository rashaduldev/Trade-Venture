import SectionTitle from "@/components/shared/sectionTitle/SectionTitle";
import styles from "./AboutPage.module.css";
import AboutTradeVenture from "@/components/about/AboutTradeVenture";
import OurMission from "@/components/about/ourMission/ourMission";

const AboutPage = () => {
  return (
    <div className={styles.aboutPage}>
      <SectionTitle title={"About Trade Ventures"} />
      <AboutTradeVenture />
      <OurMission />
    </div>
  );
};

export default AboutPage;
