import React from "react";
import EventHeader from "./EventHeader";
import style from "./Events.module.scss";

const EventsArr = [
  {
    id: 1,
    name: "Morning rally",
    text: `Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero,
      et velit interdum, ac aliquet odio mattis.Vorem ipsum dolor sit amet,
      consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac
      aliquet odio mattis.Vorem ipsum dolor sit amet, consectetur adipiscing elit.
      Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Vorem ipsum
      dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
      interdum, ac aliquet odio mattis.Vorem ipsum dolor sit amet, consectetur
      adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio
      mattis.Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
      libero et velit interdum, ac`,
    src: "https://res.cloudinary.com/dl0knguhb/image/upload/v1712128630/centreimg_ur8gfu.webp",
  },
  {
    id: 2,
    name: "Shokaler Adda",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero",
      et velit interdum, ac aliquet odio mattis.Vorem ipsum dolor sit amet,
      consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac
      aliquet odio mattis.Vorem ipsum dolor sit amet, consectetur adipiscing elit.
      Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Vorem ipsum
      dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
      interdum, ac aliquet odio mattis.Vorem ipsum dolor sit amet, consectetur
      adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio
      mattis.Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
      libero et velit interdum, ac`,
    src: "https://res.cloudinary.com/dl0knguhb/image/upload/v1712128630/centreimg_ur8gfu.webp ",
  },
];

const Events = () => {
  const [index, setStep] = React.useState(0);
  const Size = EventsArr.length;
  const NextSlider = () => {
    setStep((prevStep) => (prevStep + 1) % Size);
  };

  return (
    <div>
      {/* <EventHeader/>   */}

      <div className={style.ParentDiv}>
        <EventHeader />
        <div className={style.bottomParent}>
          <div className={style.BottomDiv}>
            <div className={style.SliderDiv}>
              <button onClick={NextSlider} type="button" aria-label="left">
                <img alt="" src="" />
              </button>
              <div className={style.EventImg}>
                <img alt={EventsArr[index].id} src={EventsArr[index].src} />
                <h1 className={style.h1}>{EventsArr[index].name}</h1>
              </div>
              <button onClick={NextSlider} type="button" aria-label="right">
                <img
                  alt=""
                  src="https://res.cloudinary.com/dl0knguhb/image/upload/v1712134959/iconamoon_arrow-left-2_1_n4ne3p.webp"
                />
              </button>
            </div>
            <div className={style.EventText}>{EventsArr[index].text}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
