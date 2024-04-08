import styles from "./Home.module.scss";
import {Gallery, Sponsors, AboutUs, AboutNits} from '../../Components'
import Hero from "../../Components/Hero/Hero";
const Home = () => {
  return (
    <main className={styles.home}>
      <Hero/>
      <AboutUs />
      <AboutNits />
      <Sponsors />
      <Gallery />
    </main>
  );
};

export default Home;
