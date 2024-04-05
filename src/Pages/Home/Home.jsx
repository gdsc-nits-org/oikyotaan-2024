import styles from "./Home.module.scss";
import {Gallery, Sponsors} from '../../Components'
const Home = () => {
  return (
    <main className={styles.home}>
      <h1>Oikyotaan 2024</h1>
      <Sponsors />
      <Gallery />
    </main>
  );
};

export default Home;
