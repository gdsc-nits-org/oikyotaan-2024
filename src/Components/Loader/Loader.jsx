// eslint-disable-next-line import/no-extraneous-dependencies

import style from "./Loader.module.scss";

const Loader = () => {
  <div>
    <div className={style.LoaderClass}>
      <div className={style.LoaderCircle}>
        <img
          alt="LoaderText"
          src="https://res.cloudinary.com/dl0knguhb/image/upload/v1712476934/Logo_jwqath.webp"
          className={style.LoaderText}
        />
        <img
          alt="Loading"
          src="https://res.cloudinary.com/dl0knguhb/image/upload/v1712476453/rotatingchakrii_ymiwxa.gif"
          className={style.LoaderImg}
        />
      </div>
    </div>
  </div>;
};
export default Loader;
