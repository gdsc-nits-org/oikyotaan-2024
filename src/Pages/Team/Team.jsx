import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/core";
import styles from "./team.module.scss";
import { Card } from "../../Components/Team/Card";
import drumLeft from "./drum right.json";
import "swiper/css";
import "swiper/css/effect-coverflow";

const Team = () => {
  const [teamData, setTeamData] = useState(null);
  const [swiperLoaded, setSwiperLoaded] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Dynamically import Swiper modules
        const [{ default: Swiper }, { default: EffectCoverflow }] = await Promise.all([
          import("swiper/react"),
          import("swiper/core"),
        ]);

        // Set Swiper modules as global variables
        window.Swiper = Swiper;
        window.EffectCoverflow = EffectCoverflow;

        // Fetch team data
        const response = await fetch("/db/team.json");
        const data = await response.json();
        setTeamData(data);
        setSwiperLoaded(true);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const renderTeamMembers = (members) => {
    return members.map((member) => <Card member={member} key={member.id} />);
  };

  const renderSwiper = (members) => {
    if (!swiperLoaded) return null;

    return (
      <Swiper
        className={styles.teamswiper}
        modules={[Autoplay, EffectCoverflow]}
        centeredSlides
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

  if (!teamData) {
    return <div>Unable to fetch data</div>; // Render nothing until data is fetched
  }

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
            <div className={styles.team}>{renderTeamMembers(teamData.core.members)}</div>
          )}
          {isSmallScreen && renderSwiper(teamData.core.members)}
        </div>

        <div className={styles.teamContainer}>
          <h3>TECH TEAM</h3>
          {!isSmallScreen && (
            <div className={styles.team}>{renderTeamMembers(teamData.tech.members)}</div>
          )}
          {isSmallScreen && renderSwiper(teamData.tech.members)}
        </div>
      </div>
    </div>
  );
};

export default Team;
