import styles from "./Home.module.scss";
import { AboutUs, AboutNits } from "../../Components";

const Home = () => {
  return (
    <div className={styles.home}>
      <AboutUs />
      <AboutNits />
    </div>
  );
};

export default Home;
