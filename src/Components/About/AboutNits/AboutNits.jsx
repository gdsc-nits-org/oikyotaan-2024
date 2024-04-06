import Lottie from "lottie-react";
import styles from "./AboutNits.module.scss";
import rdrum from "../../../Lottiefiles/drum right.json";

const AboutNits = () => {
  return (
    <div className={styles.main}>
      <div className={styles.top} >
        <div className={styles.inner}>
          <div className={styles.ldrum}>
            <Lottie animationData={rdrum} />
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
            <Lottie animationData={rdrum} />
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.left}>
          <p className={styles.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Amet nisl purus in mollis nunc
            sed id. Lobortis elementum nibh tellus molestie nunc. Ac feugiat sed lectus
            vestibulum mattis ullamcorper velit. Sed ullamcorper morbi tincidunt ornare
            massa eget egestas. Et molestie ac feugiat sed lectus vestibulum mattis
            ullamcorper. Eget aliquet nibh praesent tristique magna sit amet purus.
          </p>
        </div>
        <div className={styles.right}>
          <div className={styles.owl1}>
            <img
              className={styles.owl}
              src="https://res.cloudinary.com/dgnlmdkyq/image/upload/v1712401918/Oikyotaan/ezgif-7-03a11e7e5d-unscreen_2_liesom.gif"
              alt="owl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutNits;
