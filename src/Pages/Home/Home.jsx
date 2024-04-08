import styles from "./Home.module.scss";
import {Gallery, Sponsors, AboutUs, AboutNits} from '../../Components'
import { useEffect } from "react";
import Hero from "../../Components/Hero/Hero";

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <main className={styles.home}>
      <Hero/>
      <AboutUs />
      <AboutNits />
      <Gallery />
      <Sponsors />
    </main>
  );
};

export default Home;
