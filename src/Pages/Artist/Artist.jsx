import React from "react";
import styles from "./Artist.module.scss";
import dholl from "../../../public/artist_assets/dhol_left.svg";
import dholr from "../../../public/artist_assets/dhol_right.svg";
import underline from "../../../public/artist_assets/test_underline.svg";
import flutel from "../../../public/artist_assets/flute_left.svg";
import fluter from "../../../public/artist_assets/flute_right.svg";
import musicl from "../../../public/artist_assets/music_left.svg";
import musicr from "../../../public/artist_assets/music_right.svg";
import artistimg from "../../../public/artist_assets/artist_img.svg";
import framel from "../../../public/artist_assets/frame_left.svg";
import framer from "../../../public/artist_assets/frame_right.svg";

const Artist = () => {
  return (
    <div className={styles.artist_page}>
      <img
        alt="tmg"
        className={styles.bg_img}
        src="https://res.cloudinary.com/dagggqd6g/image/upload/f_auto,q_auto/n0bameu3z0rgdmyk5rvc"
      />
      <div className={styles.container}>
        <div className={styles.top_banner}>
          <img alt="tmg" src={flutel} />
          <div className={styles.music1}>
            <img alt="tmg" src={musicl} />
          </div>
          <img alt="tmg" src={dholl} />
          <div className={styles.top_content}>
            <div className={styles.top_text}>ARTIST</div>
            <img alt="tmg" src={underline} />
          </div>
          <img alt="tmg" src={dholr} />
          <div className={styles.music2}>
            <img alt="tmg" src={musicr} />
          </div>
          <img alt="tmg" src={fluter} />
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
