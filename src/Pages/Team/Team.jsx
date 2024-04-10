import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/core";
import styles from "./team.module.scss";
import data from "../../../public/db/team.json";
import { Card } from "../../Components/Team/Card";
import drumLeft from "./drum right.json";
import "swiper/css";
import "swiper/css/effect-coverflow";

const Team = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const renderTeamMembers = (members) => {
    return members.map((member) => <Card member={member} key={member.id} />);
  };

  const renderSwiper = (members) => {
    return (
      <Swiper
        className={styles.team}
        modules={[Autoplay, EffectCoverflow]}
        centeredSlides
        initialSlide={Math.floor(members.length / 2)}
        slidesPerView={4}
        spaceBetween={-40}
        speed={500}
        loop
        effect="coverflow"
        grabCursor
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
          0: { slidesPerView: 2, spaceBetween: -60 },
          380: { slidesPerView: 2 },
          555: { slidesPerView: 4 },
          789: { slidesPerView: 4 },
          1000: { slidesPerView: 4 },
        }}
      >
        {members.map((member) => (
          <SwiperSlide key={member.id}>
            <Card member={member} />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  };
  useEffect(() => {
    window.scrollTo(0, 0);
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
            <Lottie animationData={drumLeft} loop />
          </div>
          <div className={styles.groupTitle}>
            <h1 className={styles.heading}>MEET OUR TEAM</h1>
            <div className={styles.gloory}>
              <img
                src="https://res.cloudinary.com/draptrzrc/image/upload/v1712255354/oikotan/feqzgedgxp2yhsibs9fq.webp"
                alt="Team"
              />
            </div>
          </div>
          <div className={`${styles.dholRight} ${styles.dhol}`}>
            <Lottie animationData={drumLeft} loop />
          </div>
        </div>
      </div>

      <div className={styles.teamDetailedContainer}>
        <div className={styles.teamContainer}>
          <h3>CORE TEAM</h3>
          {!isSmallScreen && (
            <div className={styles.team}>{renderTeamMembers(data.core.members)}</div>
          )}
          {isSmallScreen && renderSwiper(data.core.members)}
        </div>

        <div className={styles.teamContainer}>
          <h3>TECH TEAM</h3>
          {!isSmallScreen && (
            <div className={styles.team}>{renderTeamMembers(data.tech.members)}</div>
          )}
          {isSmallScreen && renderSwiper(data.tech.members)}
        </div>
      </div>
    </div>
  );
};

export default Team;
