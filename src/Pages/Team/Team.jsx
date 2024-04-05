import React, { useState } from "react";
import styles from "../Team/team.module.scss";
import data from "../../../public/db/team.json";
import { Card } from "../../Components/Team/Card";
import Lottie from "lottie-react";
import drumLeft from "../Team/drum right.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import  EffectCoverflow  from "swiper";
import  Navigation  from "swiper";


export const Team = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(true);

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.title}>
          <div className={`${styles.dholLeft} ${styles.dhol}`}>
            <Lottie animationData={drumLeft} loop={true} />
          </div>
          <div className={styles.groupTitle}>
            <h1 className={styles.heading}>MEET OUR TEAM</h1>
            <div className={styles.gloory}>
              <img src="https://res.cloudinary.com/draptrzrc/image/upload/v1712255354/oikotan/feqzgedgxp2yhsibs9fq.webp"></img>
            </div>
          </div>
          <div className={`${styles.dholRight} ${styles.dhol}`}>
            <Lottie animationData={drumLeft} loop={true} />
          </div>
        </div>
      </div>

      <div className={styles.teamDetailedContainer}>
        {/* core */}
        <div className={styles.teamContainer}>
          <h3>CORE TEAM</h3>
          {!isSmallScreen && (
            <div className={styles.coreTeam}>
              {data.core.members.map((member, index) => (
                <Card member={member} key={index} />
              ))}
            </div>
          )}

          {/* swiper */}
          {isSmallScreen && (
            <Swiper
              className={styles.coreTeam}
              modules={ EffectCoverflow}
              centeredSlides
              slidesPerView={4}
              spaceBetween={-20}
              speed={500}
              effect="coverflow"
              rewind
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 200,
                modifier: 2.5,
              }}
            >
              {data.core.members.map((member, index) => (
                <SwiperSlide key={index}>
                  <Card member={member} />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>

        {/* tech */}
        <div className={styles.teamContainer}>
          <h3>TECH TEAM</h3>
          <div className={styles.techTeam}>
            {data.tech.members.map((member, index) => (
              <Card member={member} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
