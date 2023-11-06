import styles from "./About.module.css";
import about1 from "../../assets/about/about-1.png";
import about2 from "../../assets/about/about-2.png";
import Image from "next/image";

const AboutTradeVenture = () => {
  return (
    <div className={styles.aboutTradeVenture}>
      <div className="container">
        <div className={styles.aboutTradeVentureWrapper}>
          <div className={styles.aboutTradeVentureImage}>
            <Image src={about1} alt="About image" width={692} height={711} />
          </div>
          <div className={styles.aboutTradeVentureContent}>
            <div className={styles.aboutTradeVentureContentImage}>
              <Image
                src={about2}
                alt=""
                width={488}
                height={345}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>

            <div className={styles.aboutTradeVentureText}>
              <p>
                At Trade Ventures, we are more than just a company we are your
                trusted partner in navigating the intricate world of global
                trade and commerce. Our journey began with a vision to
                revolutionize the way businesses connect, grow, and prosper in
                an increasingly interconnected world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTradeVenture;
