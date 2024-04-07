import Lottie from "lottie-react";
import styles from "./Artist.module.scss";
import Card from "../../Components/Artist/ArtistCard";
import artist from "./Artist.json"
import rdrum from "../../Lottiefiles/drum right.json"

const Artist = () => {

  const Artists = (d) => {
		return (
      <Card {...d} key={d.id} />
    );
	};

  return (
    <div className={styles.artist_page}>
    <div className={styles.top} >
    <div className={styles.inner}>
      <div className={styles.ldrum}>
        <Lottie animationData={rdrum} loop/>
      </div>
      <div className={styles.header}>
        <p className={styles.heading}>Artists</p>
        <img
          className={styles.logo}
          src="https://res.cloudinary.com/dgnlmdkyq/image/upload/v1712169046/Oikyotaan/vecteezy_text-divider-calligraphic-ornament-vintage-decorations_11839102-removebg-preview_1_nro44d.svg"
          alt="logo"
        />
      </div>
      <div className={styles.rdrum}>
        <Lottie animationData={rdrum} loop/>
      </div>
    </div>
  </div>
      <div className={styles.artist_cont}>
       {artist.map(Artists)}
      </div>
    </div>

  )
};

export default Artist;
