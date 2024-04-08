import React from "react";
import styles from "./Loading.module.scss";

const Loading = () => {
  return (
    <div>
    <div className={styles.LoaderClass}>
      <div className={styles.LoaderCircle}>
        <img
          alt="LoaderText"
          src="https://res.cloudinary.com/dl0knguhb/image/upload/v1712476934/Logo_jwqath.webp"
          className={styles.LoaderText}
        />
        <img
          alt="Loading"
          src="https://res.cloudinary.com/dl0knguhb/image/upload/v1712476453/rotatingchakrii_ymiwxa.gif"
          className={styles.LoaderImg}
        />
      </div>
    </div>
  </div>
  );
};


export default Loading;
