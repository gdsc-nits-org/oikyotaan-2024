import styles from "./Home.module.scss";
import {Gallery, Sponsors, AboutUs, AboutNits} from '../../Components'
const Home = () => {
  return (
    <main className={styles.home}>
      <h1>Oikyotaan 2024</h1>
      <AboutUs />
      <AboutNits />
      <Sponsors />
      <Gallery />
    </main>
  );
};

export default Home;
