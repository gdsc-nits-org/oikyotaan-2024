import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './styles.css';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/core';
import GalleryHeader from './GalleryHeader/GalleryHeader';
import GalleryImages from './galleryImages.json'


const Gallery = ()=> {

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  
  return (
    <div className='galleryPage-container'>  

     <GalleryHeader />

      <Swiper
        effect="coverflow"
        loop
        grabCursor
        spaceBetween={0}
        centeredSlides
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 2.5,
          slideShadows: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          380: {
            slidesPerView: 1,
          },
          450: {
            slidesPerView: 2,
          },
          789: {
            slidesPerView: 3,
          },
          1000: {
            slidesPerView: 3,
          },
        }}

        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        
        pagination
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
      {GalleryImages.map((e)=>{
        return(
          <SwiperSlide key={e.id}><img src={e.imageAddress} alt='Carousel photos'></img></SwiperSlide>
        )
      })}

      </Swiper>
</div>
  );
}


export default Gallery;