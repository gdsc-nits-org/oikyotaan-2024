import Lottie from "lottie-react";
import styles from "./EventHeader.module.scss";
import rdrum from "../../Lottiefiles/drum right.json";


const EventHeader = () => {
  return (
    <div className={styles.top}>
    <div className={styles.inner}>
      <div className={styles.ldrum}>
        <Lottie animationData={rdrum} loop />
      </div>
      <div className={styles.header}>
        <p className={styles.heading}>Events</p>
        <img
          className={styles.logo}
          src="https://res.cloudinary.com/dgnlmdkyq/image/upload/v1712169046/Oikyotaan/vecteezy_text-divider-calligraphic-ornament-vintage-decorations_11839102-removebg-preview_1_nro44d.svg"
          alt="logo"
        />
      </div>
      <div className={styles.rdrum}>
        <Lottie animationData={rdrum} loop />
      </div>
    </div>
  </div>
  );
};

export default EventHeader;
