import React from "react";
import style from "./Events.module.scss";

// import data from "./Events.json";

const EventsArr = [
  {
    id: 1,
    name: "Morning rally",
    src: "https://res.cloudinary.com/dl0knguhb/image/upload/v1712128630/centreimg_ur8gfu.webp ",
  },
  {
    id: 2,
    name: "Shokaler Adda",
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
      <div className={style.ParentDiv}>
        <div className={style.TopDiv}>
          <img
            alt="LeftPepa"
            src="https://res.cloudinary.com/dl0knguhb/image/upload/v1712000480/Oikyotaan/Left_Pepa_byg1ot.webp"
          />
          <img
            alt="LeftDhol"
            src="https://res.cloudinary.com/dl0knguhb/image/upload/v1712000486/Oikyotaan/drum_left_fgvzrr.webp"
          />
          <div className={style.TextParent}>
            EVENTS
            <img
              alt=""
              className={style.BottomImage}
              src="https://res.cloudinary.com/dl0knguhb/image/upload/v1712085238/vecteezy_text-divider-calligraphic-ornament-vintage-decorations_11839102-removebg-preview_1_syx9tv.webp"
            />
          </div>
          <img
            alt="RightDhol"
            src="https://res.cloudinary.com/dl0knguhb/image/upload/v1712000489/Oikyotaan/drum_right_sg1cir.webp"
          />
          <img
            alt="RightPepa"
            src="https://res.cloudinary.com/dl0knguhb/image/upload/v1712000481/Oikyotaan/Right_Pepa_oxgvkk.webp"
          />
        </div>
        <div className={style.BottomDiv}>
          <div className={style.SliderDiv}>
            <button onClick={NextSlider} type="button" aria-label="left">
              <img
                alt=""
                src="https://res.cloudinary.com/dl0knguhb/image/upload/v1712134689/iconamoon_arrow-left-2_o8dsbr.webp"
              />
            </button>
            <div className={style.EventImg}>
              <img alt={EventsArr[index].id} src={EventsArr[index].src} />
              <h1>{EventsArr[index].name}</h1>
            </div>
            <button onClick={NextSlider} type="button" aria-label="right">
              <img
                alt=""
                src="https://res.cloudinary.com/dl0knguhb/image/upload/v1712134959/iconamoon_arrow-left-2_1_n4ne3p.webp"
              />
            </button>
          </div>
          <div className={style.EventText}>
            Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero
            et velit interdum, ac aliquet odio mattis.Vorem ipsum dolor sit amet,
            consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac
            aliquet odio mattis.Vorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Vorem ipsum
            dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
            interdum, ac aliquet odio mattis.Vorem ipsum dolor sit amet, consectetur
            adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio
            mattis.Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
            libero et velit interdum, ac
          </div>
        </div>
      </div>
    </div>
  );
};
export default Events;
