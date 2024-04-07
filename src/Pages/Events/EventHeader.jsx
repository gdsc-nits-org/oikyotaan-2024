import Lottie from "lottie-react";
import styles from "./EventHeader.module.scss";

import Dhol from "../../assets/AnimationData/drum_right.json";
import underline from "../../../public/artist_assets/test_underline.svg";
import flutel from "../../../public/artist_assets/flute_left.svg";
import fluter from "../../../public/artist_assets/flute_right.svg";

const EventHeader = () => {
  return (
    <div className={styles.superParent}>
      <div className={styles.top_banner}>
        <img className={styles.flut} alt="tmg" src={flutel} />
        <div className={styles.music1}>
          <img
            className={styles.musical}
            alt="tmg"
            src="https://res.cloudinary.com/dagggqd6g/image/upload/f_auto,q_auto/lvw9ahmbohpwrdsupob8"
          />
        </div>
        <Lottie animationData={Dhol} className={styles.dholl} />
        <div className={styles.top_content}>
          <div className={styles.top_text}>EVENTS</div>
          <img className={styles.underline} alt="tmg" src={underline} />
        </div>
        <Lottie animationData={Dhol} className={styles.dholr} />
        <div className={styles.music2}>
          <img
            className={styles.musicalr}
            alt="tmg"
            src="https://res.cloudinary.com/dagggqd6g/image/upload/f_auto,q_auto/lvw9ahmbohpwrdsupob8"
          />
        </div>
        <img className={styles.flut} alt="tmg" src={fluter} />
      </div>
    </div>
  );
};

export default EventHeader;
