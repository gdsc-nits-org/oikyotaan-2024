import Lottie from "lottie-react";
import styles from "./AboutNits.module.scss";
import rdrum from "../../../Lottiefiles/drum right.json";
// import owllottie from "../../../Lottiefiles/poster.json";

const AboutNits = () => {
  return (
    <div className={styles.main}>
      <div className={styles.top}>
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
            ullamcorper. Eget aliquet nibh praesent tristique magna sit amet purus. Morbi
            blandit cursus risus at ultrices mi tempus imperdiet nulla. Molestie a iaculis
            at erat pellentesque adipiscing commodo. Euismod lacinia at quis risus sed
            vulputate. Tempus imperdiet nulla malesuada pellentesque elit eget gravida
            cum. Ac orci phasellus egestas tellus rutrum tellus pellentesque eu.
            Scelerisque fermentum dui faucibus in ornare quam viverra orci. In ornare quam
            viverra orci sagittis. Porta nibh venenatis cras sed felis eget velit.
            Bibendum at varius vel pharetra vel turpis nunc eget lorem. Fringilla ut morbi
            tincidunt augue interdum.
          </p>
        </div>
        <div className={styles.right}>
          <div className={styles.owl}>
            <Lottie animationData={rdrum} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutNits;
