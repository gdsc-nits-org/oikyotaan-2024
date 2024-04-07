import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./styles.css";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/core";
let img1 =
  "https://res.cloudinary.com/dyn3q57b8/image/upload/f_auto,q_auto,fl_lossy/v1/Oikyotaan%20'24%20assets/Gallery/image1";
let img2 =
  "https://res.cloudinary.com/dyn3q57b8/image/upload/f_auto,q_auto,fl_lossy/v1/Oikyotaan%20'24%20assets/Gallery/image2";
let img3 =
  "https://res.cloudinary.com/dyn3q57b8/image/upload/f_auto,q_auto,fl_lossy/v1/Oikyotaan%20'24%20assets/Gallery/image3";
import GalleryHeader from "./GalleryHeader/GalleryHeader";
import { Navbar } from "../../Components";

const Gallery = () => {
  return (
    <div className="galleryPage-container">
      <Navbar />

      <GalleryHeader />

      <Swiper
        effect={"coverflow"}
        loop={true}
        grabCursor={true}
        spaceBetween={0}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} alt="Carousel photos"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="Carousel photos"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="Carousel photos"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img1} alt="Carousel photos"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="Carousel photos"></img>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Gallery;
