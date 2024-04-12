import "./SponsorCardsStyles.css";
import SponsorCardsData from "./sponsorCard.json";

const Cards = () => {
  return (
    <div className="grid_container">
      {SponsorCardsData.map((item) => (
        <div className="card" key={item.id}>
          <img className="spons_img" src={item.img} alt="sponsor" />
        </div>
      ))}
    </div>
  );
};

export default Cards;
