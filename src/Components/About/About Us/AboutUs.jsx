import styles from "./AboutUs.module.scss";
import Lottie from "lottie-react";
import rdrum from "../../../Lottiefiles/drum right.json";
import { Link } from "react-scroll";

const AboutUs = () => {
  return (
    <div className={styles.main}>
      <div className={styles.slide_parent}>
        <div className={styles.slide}>
          <img
            className={styles.slider}
            src="https://res.cloudinary.com/dgnlmdkyq/image/upload/v1712294661/Oikyotaan/sliding_top_hhqk3d.svg"
            alt="slider"
          />
        </div>
        <div className={styles.slide}>
          <img
            className={styles.slider}
            src="https://res.cloudinary.com/dgnlmdkyq/image/upload/v1712294661/Oikyotaan/sliding_top_hhqk3d.svg"
            alt="slider"
          />
        </div>
      </div>
      <div className={styles.arrow_logo}>
        <Link to ="about" smooth={true}>
        <img
          className={styles.arrow}
          src="https://res.cloudinary.com/dgnlmdkyq/image/upload/v1712294971/Oikyotaan/Arrows_down_animated_qj98kq.gif"
          alt="arrow"
        />
        </Link>
      </div>
      <div className={styles.top}>
        <div className={styles.inner}>
          <div className={styles.ldrum}>
            <Lottie animationData={rdrum} />
          </div>
          <div className={styles.header}>
            <p className={styles.heading}>About Us</p>
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

      <div className={styles.bottom} id="about">
        <div className={styles.left}>
          <img
            className={styles.flower}
            src="https://res.cloudinary.com/dgnlmdkyq/image/upload/v1712254144/Oikyotaan/flowers_ohuan9.gif"
            alt="flowers"
          />

          <div className={styles.couple}>
            <img
              className={styles.wife}
              src="https://res.cloudinary.com/dgnlmdkyq/image/upload/v1712254032/Oikyotaan/wife_bqgccc.svg"
              alt="wife"
            />
            <img
              className={styles.husband}
              src="https://res.cloudinary.com/dgnlmdkyq/image/upload/v1712254032/Oikyotaan/husband_po3bu7.svg"
              alt="husband"
            />
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.paragraph}>
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
          </div>
          <div className={styles.btn_parent}>
            <a className={styles.btn} href="" target="_blank" rel="noreferrer">
              BROCHURE
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
