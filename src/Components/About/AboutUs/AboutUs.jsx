import Lottie from "lottie-react";
import { Link } from "react-scroll";
import styles from "./AboutUs.module.scss";
import rdrum from "../../../Lottiefiles/drum right.json";

const AboutUs = () => {
  return (
    <div className={styles.main}>
      <div className={styles.slide_parent}>
        <div className={styles.slide}>
          <img
            className={styles.slider}
            loading="lazy"
            src="https://res.cloudinary.com/dgnlmdkyq/image/upload/v1712294661/Oikyotaan/sliding_top_hhqk3d.svg"
            alt="slider"
          />
        </div>
        <div className={styles.slide}>
          <img
            className={styles.slider}
            loading="lazy"
            src="https://res.cloudinary.com/dgnlmdkyq/image/upload/v1712294661/Oikyotaan/sliding_top_hhqk3d.svg"
            alt="slider"
          />
        </div>
      </div>
      <Link to="about" smooth>
        <div className={styles.arrow_logo}>
          <img
            className={styles.arrow}
            src="https://res.cloudinary.com/dgnlmdkyq/image/upload/v1712294971/Oikyotaan/Arrows_down_animated_qj98kq.gif"
            alt="arrow"
          />
        </div>
      </Link>

      <div className={styles.top}>
        <div className={styles.inner}>
          <div className={styles.ldrum}>
            <Lottie animationData={rdrum} loop />
          </div>
          <div className={styles.header}>
            <p className={styles.heading}>About Us</p>
            <img
              className={styles.logo}
              loading="lazy"
              src="https://res.cloudinary.com/dgnlmdkyq/image/upload/v1712169046/Oikyotaan/vecteezy_text-divider-calligraphic-ornament-vintage-decorations_11839102-removebg-preview_1_nro44d.svg"
              alt="logo"
            />
          </div>
          <div className={styles.rdrum}>
            <Lottie animationData={rdrum} loop />
          </div>
        </div>
      </div>

      <div className={styles.bottom} id="about">
        <div className={styles.left}>
          <img
            className={styles.flower}
            loading="lazy"
            src="https://res.cloudinary.com/dgnlmdkyq/image/upload/v1712254144/Oikyotaan/flowers_ohuan9.gif"
            alt="flowers"
          />

          <div className={styles.couple}>
            <img
              className={styles.wife}
              loading="lazy"
              src="https://res.cloudinary.com/dgnlmdkyq/image/upload/v1712254032/Oikyotaan/wife_bqgccc.webp"
              alt="wife"
            />
            <img
              className={styles.husband}
              loading="lazy"
              src="https://res.cloudinary.com/dgnlmdkyq/image/upload/v1712254032/Oikyotaan/husband_po3bu7.webp"
              alt="husband"
            />
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.paragraph}>
          As spring gently nudges away winters slumber, bringing with it vibrant colours, a gentle warmth creeps in, as if welcoming the NoboBorsho. The air hums with anticipation, mirroring the excitement in our hearts. The gentle breeze sways the leaves welcoming the new year with better beginnings and fresh hopes.
          And amidst this effervescent atmosphere, our annual Bengali cultural extravaganza, Oikyotaan 24 pulsates with vibrant energy. A celebration of our rich heritage, a kaleidoscope of music, dance, art, and literature that unfolds against the backdrop of magic of spring.
          </div>
          <div className={styles.parent}>
            <div className={styles.btn_parent}>
              <a
                className={styles.btn}
                href="https://drive.google.com/file/d/1RCbD5e0eBdbnjLnm-_L8tV4O1S0XBAXl/view?usp=drivesdk"
                target="_blank"
                rel="noreferrer"
              >
                BROCHURE
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
