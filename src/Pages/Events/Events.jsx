import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import { Pagination, Navigation } from "swiper/core";
import EventHeader from "./EventHeader";
import style from "./Events.module.scss";
import Loading from "../../Components/Loader/Loading";

import "swiper/css/navigation";

const Events = () => {
  
  const [eventData, setEventData] = useState(null);
  const [swiperLoaded, setSwiperLoaded] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

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
    const fetchData = async () => {
      try {
        // Dynamically import Swiper modules
        const [{ default: Swiper }, { default: EffectCoverflow }] = await Promise.all([
          import("swiper/react"),
          import("swiper/core"),
        ]);

        // Set Swiper modules as global variables
        window.Swiper = Swiper;
        window.EffectCoverflow = EffectCoverflow;
        const response = await fetch("/db/Events.json");
        const data = await response.json();
        setEventData(data);
        setSwiperLoaded(true);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const renderSwiper = () => {
    if (!swiperLoaded) return null;
    return (
      <div className={style.bottomParent}>
        <div className={style.BottomDiv}>
          <Swiper
            navigation
            loop
            modules={[Navigation, Pagination]}
            className={style.mySwiper}
          >
            {eventData.map((e) => {
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
    );
  };

  const renderEvents = () => {
    return (
      <div className={style.bottomParent}>
        <div className={style.BottomDiv2}>
          {eventData.map((e) => {
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
          })}
        </div>
      </div>
    );
  };

  if (!eventData) {
    return <Loading />; // Render nothing until data is fetched
  }
  else if (!swiperLoaded) return <Loading />;

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
