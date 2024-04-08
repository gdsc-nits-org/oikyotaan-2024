import Lottie from "lottie-react";
import styles from "./EventHeader.module.scss";
import Dhol from "../../Lottiefiles/drum right.json";


const EventHeader = () => {
  return (
    <div className={styles.superParent}>
      <div className={styles.top_banner}>
        <Lottie animationData={Dhol} className={styles.dholl} />
        <div className={styles.top_content}>
          <div className={styles.top_text}>EVENTS</div>
          <img className={styles.underline} alt="tmg" src="https://res.cloudinary.com/dgnlmdkyq/image/upload/v1712169046/Oikyotaan/vecteezy_text-divider-calligraphic-ornament-vintage-decorations_11839102-removebg-preview_1_nro44d.svg"/>
        </div>
        <Lottie animationData={Dhol} className={styles.dholr} />
    </div>
    </div>
  );
};

export default EventHeader;
