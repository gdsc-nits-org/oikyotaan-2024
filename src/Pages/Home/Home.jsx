import styles from "./Home.module.scss";
import {Gallery, Sponsors, AboutUs, AboutNits} from '../../Components'
const Home = () => {
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
