import "./GalleryHeaderStyles.css";
import Lottie from "lottie-react";
import Dhol from "../../../assets/AnimationData/drum_right.json";

const GalleryHeader = () => {
  return (
    <div className="header_container">
      <div className="drum_left">
        <Lottie animationData={Dhol} />
      </div>
      <div className="title_div">
        <p className="title">Photo Gallery</p>
        <img
          className="curl"
          src="https://res.cloudinary.com/dyn3q57b8/image/upload/f_auto,q_auto/v1/Oikyotaan%20'24%20assets/Sponsors/underline"
          alt="an underline"
        />
      </div>
      <div className="drum_right">
        <Lottie animationData={Dhol} />
      </div>
    </div>
  );
};

export default GalleryHeader;
