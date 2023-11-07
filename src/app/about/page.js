import SectionTitle from "@/components/shared/sectionTitle/SectionTitle";
import styles from "./AboutPage.module.css";
import AboutTradeVenture from "@/components/about/AboutTradeVenture";
import OurMission from "@/components/about/ourMission/ourMission";
import WhyChoose from "@/components/about/WhyChoose/WhyChoose";
import JoinForFutureTeam from "@/components/about/JoinForFutureTeam/JoinForFutureTeam";
import TradeVentureTagLine from "@/components/about/TradeventureTagLine/TradeVentureTagLine";

const AboutPage = () => {
  return (
    <div className={styles.aboutPage}>
      <SectionTitle title={"About Trade Ventures"} />
      <AboutTradeVenture />
      <OurMission />

      <WhyChoose />
      <JoinForFutureTeam />
      <TradeVentureTagLine />
    </div>
  );
};

export default AboutPage;
