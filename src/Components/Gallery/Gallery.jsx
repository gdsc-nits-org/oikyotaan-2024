import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './styles.css';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/core';
import GalleryHeader from './GalleryHeader/GalleryHeader';
import GalleryImages from './gallery.json'



const Gallery = ()=> {
   return (
    <div className='gallery-container'>  
     <GalleryHeader />
      <Swiper
        effect={'coverflow'}
        loop={true}
        grabCursor={true}
        spaceBetween={0}
        centeredSlides={true}
        initialSlide={Math.floor(GalleryImages.length / 2)}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 2.5,
          slideShadows: false,
        }}

        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
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
        
        pagination={true}
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