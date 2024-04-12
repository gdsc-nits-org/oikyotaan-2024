import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./styles.css";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/core";
import GalleryHeader from "./GalleryHeader/GalleryHeader";
const img1 =
  "https://res.cloudinary.com/dyn3q57b8/image/upload/f_auto,q_auto,fl_lossy/v1/Oikyotaan%20'24%20assets/Gallery/image1";
const img2 =
  "https://res.cloudinary.com/dyn3q57b8/image/upload/f_auto,q_auto,fl_lossy/v1/Oikyotaan%20'24%20assets/Gallery/image2";
const img3 =
  "https://res.cloudinary.com/dyn3q57b8/image/upload/f_auto,q_auto,fl_lossy/v1/Oikyotaan%20'24%20assets/Gallery/image3";
// import GalleryImages from './GalleryImages.json'

const Gallery = () => {
  return (
    <div className="gallery-container">
      <GalleryHeader />

      <Swiper
        effect="coverflow"
        loop
        grabCursor
        spaceBetween={0}
        centeredSlides
        slidesPerView="auto"
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
        pagination
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
