import styles from "./Home.module.scss";
import {Gallery, Sponsors, AboutUs, AboutNits, Navbar} from '../../Components'
import Hero from "../../Components/Hero/Hero";
const Home = () => {
  return (
    <main className={styles.home}>
      <Navbar isHome={true}/>
      <Hero/>
      <AboutUs />
      <AboutNits />
      <Sponsors />
      <Gallery />
    </main>
  );
};

export default Home;
