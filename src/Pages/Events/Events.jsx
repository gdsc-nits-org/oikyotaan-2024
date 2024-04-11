import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import { Pagination, Navigation } from "swiper/core";
import EventHeader from "./EventHeader";
import style from "./Events.module.scss";
import EventsArr from "./Events.json";

import "swiper/css/navigation";

const Events = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const renderSwiper = () => {
    return (
      <div className={style.bottomParent}>
        <div className={style.BottomDiv}>
          <Swiper
            navigation
            loop
            modules={[Navigation, Pagination]}
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
            })
            }
          </Swiper>
        </div>
      </div>
    )
  }

  const renderEvents = () => {
    return (
      <div className={style.bottomParent}>
        <div className={style.BottomDiv2}>
          {EventsArr.map((e) => {
            return (
              <div className={style.card} key={e.id}>
                <div className={style.images}>
                  <img src={e.src} alt={e.id} className={style.image} />
                </div>
                <h1 className={style.h1}>{e.name}</h1>
                <div className={style.text_class}>
                  <div className={style.EventText}>{e.text}</div>
                </div>
              </div>
            );
          })
          }
        </div>
      </div>

    )
  }


  return (
    <div style={{ overflowX: "hidden" }}>
      <div className={style.ParentDivision}>
        <EventHeader />
        {!isSmallScreen && renderSwiper()}
        {isSmallScreen && renderEvents()}
      </div>
    </div>
  );
};

export default Events;
