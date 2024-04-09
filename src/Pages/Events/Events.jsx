import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/core";
import EventHeader from "./EventHeader";
import style from "./Events.module.scss";
import EventsArr from "./Events.json";
import { useEffect } from "react";

import 'swiper/css/navigation';


const Events = () => {

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  
  return (
    <div style={{ overflowX: "hidden" }}>
      <div className={style.ParentDivision}>
        <EventHeader />
        <div className={style.bottomParent}>
          <div className={style.BottomDiv}>
            <Swiper
              // pagination
              // autoplay={{
              //   delay: 2000,
              //   disableOnInteraction: false,
              // }}
              navigation
              loop={true}
              modules={[ Navigation , Pagination]}
              className={style.mySwiper}
            >
              {EventsArr.map((e) => {
                return (
                  <SwiperSlide className={style.swiperclass} key={e.id}>
                    <img src={e.src} alt={e.id} className={style.image} />
                    <h1 className={style.h1}>{e.name}</h1>
                    <div className={style.EventText}>{e.text}</div>

                  </SwiperSlide>
                );
              })}
            </Swiper>

      
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
