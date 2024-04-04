import { Button } from "../../Components";
import { useFetchOnAction } from "../../Hooks";
import { Sponsors } from '../../Components'

import style from "./Home.module.scss";

const Home = () => {
  return (
    <main className={style.home}>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <Sponsors />
        </>
      )}
    </main>
  );
};

export default Home;
