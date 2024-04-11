import Lottie from "lottie-react";
import styles from "./AboutNits.module.scss";
import rdrum from "../../../Lottiefiles/drum right.json";

const AboutNits = () => {
  return (
    <div className={styles.main}>
      <div className={styles.top} >
        <div className={styles.inner}>
          <div className={styles.ldrum}>
            <Lottie animationData={rdrum} loop/>
          </div>
          <div className={styles.header}>
            <p className={styles.heading}>About Nits</p>
            <img
              className={styles.logo}
              src="https://res.cloudinary.com/dgnlmdkyq/image/upload/v1712169046/Oikyotaan/vecteezy_text-divider-calligraphic-ornament-vintage-decorations_11839102-removebg-preview_1_nro44d.svg"
              alt="logo"
            />
          </div>
          <div className={styles.rdrum}>
            <Lottie animationData={rdrum} loop/>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.left}>
          <p className={styles.paragraph}>
          A bright future requires a bright start. NITS abides by this mantra. The institute believes in equipping students with the knowledge and skills in their chosen streams, inculcate values, identify hidden talents, and provide opportunities for students to realize their full potential. It facilitates the requisite support and encouragement via various cultural and academic activities to shape the body and soul. It has transformed into a sought out centre of learning.
          </p>
        </div>
        <div className={styles.right}>
          <div className={styles.owl1}>
            <img
              className={styles.owl}
              src="https://res.cloudinary.com/dgnlmdkyq/image/upload/v1712512772/Oikyotaan/lottie_compressed_rdi832.gif"
              alt="owl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutNits;
