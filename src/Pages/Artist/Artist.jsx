import React from "react";
import Lottie from "lottie-react";
import styles from "./Artist.module.scss";
import Dhol from "../../assets/AnimationData/drum_right.json";
import underline from "../../../public/artist_assets/test_underline.svg";
import flutel from "../../../public/artist_assets/flute_left.svg";
import fluter from "../../../public/artist_assets/flute_right.svg";
import artistimg from "../../../public/artist_assets/artist_img.svg";
import framel from "../../../public/artist_assets/frame_left.svg";
import framer from "../../../public/artist_assets/frame_right.svg";
import { Navbar } from "../../Components";

const Artist = () => {
  return (
    <div className={styles.artist_page}>
      <Navbar/>
      <img
        alt="tmg"
        className={styles.bg_img}
        src="https://res.cloudinary.com/dagggqd6g/image/upload/f_auto,q_auto/n0bameu3z0rgdmyk5rvc"
      />
      <div className={styles.container}>
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
            <div className={styles.top_text}>ARTISTS</div>
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
        <div className={styles.card_box}>
          <div className={styles.content}>
            <div className={styles.pic_card}>
              <div className={styles.pic_content}>
                <img alt="tmg" className={styles.frame_left} src={framel} />
                <img alt="tmg" className={styles.artist_imge} src={artistimg} />
                <img alt="tmg" className={styles.frame_right} src={framer} />
              </div>
            </div>
            <div className={styles.text_card}>
              <h2>SNIGDHAJIT</h2>
              <p>
                Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
                libero et velit interdum, ac aliquet odio mattis.Qorem ipsum dolor sit
                amet, consectetur adipiscing elit. Nunc vulputate libero et velit
                interdum, ac aliquet odio mattis.Qorem ipsum dolor sit amet, consectetur
                adipiscing elit. Nunc vulputate
              </p>
            </div>
          </div>
        </div>
        <div className={styles.card_box}>
          <div className={styles.content}>
            <div className={styles.pic_card}>
              <div className={styles.pic_content}>
                <img alt="tmg" className={styles.frame_left} src={framel} />
                <img alt="tmg" src={artistimg} />
                <img alt="tmg" className={styles.frame_right} src={framer} />
              </div>
            </div>
            <div className={styles.text_card}>
              <h2>SNIGDHAJIT</h2>
              <p>
                Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
                libero et velit interdum, ac aliquet odio mattis.Qorem ipsum dolor sit
                amet, consectetur adipiscing elit. Nunc vulputate libero et velit
                interdum, ac aliquet odio mattis.Qorem ipsum dolor sit amet, consectetur
                adipiscing elit. Nunc vulputate
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artist;
