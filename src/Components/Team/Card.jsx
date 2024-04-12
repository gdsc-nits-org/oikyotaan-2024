import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitterSquare,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

import { useSwiperSlide } from "swiper/react";
import styles from "./card.module.scss";

export const Card = ({ member }) => {
  const swiperSlider = useSwiperSlide();

  return (
    <div
      className={`${styles.wrapper} ${swiperSlider != null && (!swiperSlider.isActive ? styles.inActive : "")}`}
    >
      <div className={styles.imageFrame}></div>
      <div className={styles.imageBg}></div>
      <img className={styles.profileImage} src={member.profile} alt={member.name} />

      <div className={styles.details}>
        <div className={styles.name}>{member.name}</div>
        <div className={styles.desg}>{member.designation}</div>

        <div className={styles.socialProfile}>
          {member.linkedin && (
            <a
              href={member.linkedin}
              aria-label="Click Here"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin color="#fff" />
            </a>
          )}

          {member.github && (
            <a
              href={member.github}
              aria-label="Click Here"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub color="#fff" />
            </a>
          )}

          {member.twitter && (
            <a
              href={member.twitter}
              aria-label="Click Here"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitterSquare color="#fff" />
            </a>
          )}

          {member.facebook && (
            <a
              href={member.facebook}
              aria-label="Click Here"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook color="#fff" />
            </a>
          )}

          {member.instagram && (
            <a
              href={member.instagram}
              aria-label="Click Here"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram color="#fff" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
