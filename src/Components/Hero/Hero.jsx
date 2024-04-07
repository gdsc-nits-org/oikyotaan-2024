import React from "react";
import styles from "./Hero.module.scss";
import Foreground from "./Foreground";

const Hero = () => {
  return (
    <div className={styles.wrapper}>
      <Foreground/>
    <img className={styles.logo} src="https://res.cloudinary.com/draptrzrc/image/upload/v1712502910/hdczto9kytzjqhsr7cjf.webp" alt="oikotan-logo"/>
    <img className={styles.kitti} src="https://res.cloudinary.com/draptrzrc/image/upload/v1712487545/oikotan/hddpfhm9x3hv3slc89gl.webp" alt="oikotan"/>
    </div>
  );
};

export default Hero;
