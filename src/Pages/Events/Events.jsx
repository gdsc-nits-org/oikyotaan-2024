import React from "react";
// import { useRef, useState } from 'react';
// Import Swiper React components
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from "swiper/react";
// eslint-disable-next-line import/no-unresolved
import { Navigation, Autoplay } from "swiper/modules";
// Import Swiper style
// import 'swiper/css';
import EventHeader from "./EventHeader";
import style from "./Events.module.scss";
import EventsArr from "./Events.json";
// export default function App() {
//   return (
//     <>
//       <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
//         <SwiperSlide>Slide 1</SwiperSlide>
//         <SwiperSlide>Slide 2</SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>
//         <SwiperSlide>Slide 4</SwiperSlide>
//         <SwiperSlide>Slide 5</SwiperSlide>
//         <SwiperSlide>Slide 6</SwiperSlide>
//         <SwiperSlide>Slide 7</SwiperSlide>
//         <SwiperSlide>Slide 8</SwiperSlide>
//         <SwiperSlide>Slide 9</SwiperSlide>
//       </Swiper>
//     </>
//   );
// }

const Events = () => {
  // const [index, setStep] = React.useState(0);
  // const Size = EventsArr.length;
  // const NextSlider = () => {
  //   setStep((prevStep) => (prevStep + 1) % Size);
  // };

  return (
    <div style={{ overflowX: "hidden" }}>
      <div className={style.ParentDiv}>
        <EventHeader />
        <div className={style.bottomParent}>
          <div className={style.BottomDiv}>
            <Swiper
              navigation
              modules={[Navigation, Autoplay]}
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
            {/* <SwiperSlide className={style.swiperclass}>
                <img
                  src={EventsArr[index].src}
                  alt={EventsArr[index].id}
                  className={style.image}
                />
                <h1 className={style.h1}>{EventsArr[index].name}</h1>
                <div className={style.EventText}>{EventsArr[index].text}</div>
              </SwiperSlide>
              <SwiperSlide className={style.swiperclass}>
                <img
                  src={EventsArr[index].src}
                  alt={EventsArr[index].id}
                  className={style.image}
                />
                <h1 className={style.h1}>{EventsArr[index].name}</h1>
                <div className={style.EventText}>{EventsArr[index].text}</div>
              </SwiperSlide>
              <SwiperSlide className={style.swiperclass}>
                <img
                  src={EventsArr[index].src}
                  alt={EventsArr[index].id}
                  className={style.image}
                />
                <h1 className={style.h1}>{EventsArr[index].name}</h1>
                <div className={style.EventText}>{EventsArr[index].text}</div>
              </SwiperSlide>
              <SwiperSlide className={style.swiperclass}>
                <img
                  src={EventsArr[index].src}
                  alt={EventsArr[index].id}
                  className={style.image}
                />
                <h1 className={style.h1}>{EventsArr[index].name}</h1>
                <div className={style.EventText}>{EventsArr[index].text}</div>
              </SwiperSlide> */}

            {/* <div className={style.SliderDiv}>
              <button onClick={NextSlider} type="button" aria-label="left" className={style.LeftBtn}>
                <img
                  alt=""
                  src="https://res.cloudinary.com/dl0knguhb/image/upload/v1712134689/iconamoon_arrow-left-2_o8dsbr.webp"
                />
              </button>
              <div className={style.EventImg}>
                <img alt={EventsArr[index].id} className={style.img} src={EventsArr[index].src} />
                <h1 className={style.h1}>{EventsArr[index].name}</h1>
              </div>
              {/* <button onClick={NextSlider} type="button" aria-label="right" className={style.RightBtn}>
                <img
                  alt=""
                  src="https://res.cloudinary.com/dl0knguhb/image/upload/v1712134959/iconamoon_arrow-left-2_1_n4ne3p.webp"
                />
              </button> */}
            {/* </div>

            <div className={style.EventText}>{EventsArr[index].text}</div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
