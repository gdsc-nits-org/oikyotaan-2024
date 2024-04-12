import "./SponsorCardsStyles.css";

const Cards = () => {
  const SponsorCardsData = [
    "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
  ];
  return (
    <div className="grid_container">
      {SponsorCardsData.map((item) => (
        <div className="card">
          <img className="spons_img" src={item} alt="sponsor" />
        </div>
      ))}
    </div>
  );
};

export default Cards;
