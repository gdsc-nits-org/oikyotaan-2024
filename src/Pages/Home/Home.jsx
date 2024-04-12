import { useEffect } from "react";
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

  return (
    <main className={styles.home}>
      <Hero />
      <AboutUs />
      <AboutNits />
      <Gallery />
      <Sponsors />
    </main>
  );
};

export default Home;
