import styles from "./Home.module.scss";
import { useEffect } from "react";
import {Gallery, Sponsors, AboutUs, AboutNits} from '../../Components'

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <main className={styles.home}>
      <AboutUs />
      <AboutNits />
      <Sponsors />
      <Gallery />
    </main>
  );
};

export default Home;
