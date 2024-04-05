import React from "react";
import Lottie from "lottie-react";
import style from "./Events.module.scss";
import rightdrum from "../../../public/lottieassets/drumright.json";
import flutel from "../../../public/artist_assets/flute_left.svg";
import fluter from "../../../public/artist_assets/flute_right.svg";

// import data from "./Events.json";

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
    src: "https://res.cloudinary.com/dl0knguhb/image/upload/v1712128630/centreimg_ur8gfu.webp ",
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
      <div className={style.ParentDiv}>
        <div className={style.TopDiv}>
          <img alt="LeftPepa" src={flutel} />
          <img
            className={style.musical}
            alt="tmg"
            src="https://res.cloudinary.com/dagggqd6g/image/upload/f_auto,q_auto/lvw9ahmbohpwrdsupob8"
          />
          <div className={style.DholEvent}>
            <div className={style.Leftdrumclass}>
              <Lottie animationData={rightdrum} className={style.Lftdrum} />
            </div>
            {/* <img
                alt="LeftDhol"
                className={style.LeftDhol}
                src="https://res.cloudinary.com/dl0knguhb/image/upload/v1712000486/Oikyotaan/drum_left_fgvzrr.webp"
              /> */}
            <div className={style.TextParent}>
              <div className={style.Text}>EVENTS</div>
              <img
                alt=""
                className={style.BottomImage}
                src="https://res.cloudinary.com/dl0knguhb/image/upload/v1712085238/vecteezy_text-divider-calligraphic-ornament-vintage-decorations_11839102-removebg-preview_1_syx9tv.webp"
              />
            </div>
            {/* <img
                alt="RightDhol"
                className={style.RightDhol}
                src="https://res.cloudinary.com/dl0knguhb/image/upload/v1712000489/Oikyotaan/drum_right_sg1cir.webp"
              /> */}
            <div className={style.Rightdrumclass}>
              <Lottie animationData={rightdrum} className={style.Rtdrum} />
            </div>
          </div>
          <img
            className={style.musical1}
            alt="tmg"
            src="https://res.cloudinary.com/dagggqd6g/image/upload/f_auto,q_auto/lvw9ahmbohpwrdsupob8"
          />
          <img alt="RightPepa" src={fluter} />
        </div>
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
