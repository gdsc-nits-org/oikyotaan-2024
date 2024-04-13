import { useEffect, useState, useRef } from "react";
import styles from "./Home.module.scss";
import { Gallery, Sponsors, AboutUs, AboutNits } from "../../Components";
import Hero from "../../Components/Hero/Hero";
import ReactGA from "react-ga"

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  },[])

  const audioRef = useRef(null);
  const [play, setPlay] = useState(false);
  const toggle = () => {
    if (!play) {
      audioRef.current.play();
      setPlay(true);
    }
  };

  return (
    <main className={styles.home}  onClick={toggle}>
      <Hero />
      <AboutUs />
      <AboutNits />
      <Gallery />
      <Sponsors />
      <audio src="/audio/home.mp3" autoPlay ref={audioRef}></audio>
    </main>
  );
};

export default Home;
