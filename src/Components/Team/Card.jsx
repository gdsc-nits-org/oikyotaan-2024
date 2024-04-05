import React from "react";
import styles from "./card.module.scss";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useSwiperSlide } from 'swiper/react';

export const Card = ({ member }) => {
  const swiperSlider = useSwiperSlide();

  return (
    <div className={`${styles.wrapper} ${swiperSlider != null && (!swiperSlider.isActive ? styles.inActive : "")}`}>
      <div className={styles.imageFrame}></div>
      <img className={styles.profileImage} src={member.profile} alt={member.name} />

      <div className={styles.details}>
        <h3>{member.name}</h3>
        <h4>{member.designation}</h4>

        <div className={styles.socialProfile}>
          <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>

          <a href={member.github} target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};
