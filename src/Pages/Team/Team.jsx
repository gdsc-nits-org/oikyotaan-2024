import React, { useState, useEffect } from "react";
import styles from "../Team/team.module.scss";
import data from "../../../public/db/team.json";
import { Card } from "../../Components/Team/Card";
import Lottie from "lottie-react";
import drumLeft from "../Team/drum right.json";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";

import { Autoplay, EffectCoverflow } from "swiper/modules";

export const Team = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    // Add event listener to handle screen resizing
    window.addEventListener("resize", handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <img
        alt="tmg"
        className={styles.bg_img}
        src="https://res.cloudinary.com/dagggqd6g/image/upload/f_auto,q_auto/n0bameu3z0rgdmyk5rvc"
      />
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
              modules={[Autoplay, EffectCoverflow]}
              centeredSlides={true}
              initialSlide={Math.floor(data.core.members.length / 2)}
              slidesPerView={4}
              spaceBetween={-40}
              speed={500}
              loop
              effect={"coverflow"}
              grabCursor={true}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 200,
                modifier: 2.5,
                slideShadows: false,
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 2,
                  spaceBetween: -60,
                },
                380: {
                  slidesPerView: 2,
                },
                555: {
                  slidesPerView: 4,
                },
                789: {
                  slidesPerView: 4,
                },
                1000: {
                  slidesPerView: 4,
                },
              }}
            >
              {data.core.members.map((member, index) => (
                <SwiperSlide key={index}>
                  <Card member={member} key={index} />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>

        {/* tech */}
        <div className={styles.teamContainer}>
          <h3>TECH TEAM</h3>
          {!isSmallScreen && (
            <div className={styles.techTeam}>
              {data.tech.members.map((member, index) => (
                <Card member={member} key={index} />
              ))}
            </div>
          )}

          {/* swiper */}
          {isSmallScreen && (
            <Swiper
              className={styles.techTeam}
              modules={[Autoplay, EffectCoverflow]}
              centeredSlides={true}
              initialSlide={Math.floor(data.core.members.length / 2)}
              slidesPerView={4}
              spaceBetween={-40}
              speed={500}
              loop
              effect={"coverflow"}
              grabCursor={true}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 200,
                modifier: 2.5,
                slideShadows: false,
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 2,
                  spaceBetween: -60,
                },
                380: {
                  slidesPerView: 2,
                },
                555: {
                  slidesPerView: 4,
                },
                789: {
                  slidesPerView: 4,
                },
                1000: {
                  slidesPerView: 4,
                },
              }}
            >
              {data.core.members.map((member, index) => (
                <SwiperSlide key={index}>
                  <Card member={member} key={index} />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </div>
  );
};
