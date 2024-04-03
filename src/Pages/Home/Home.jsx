import { Button } from "../../Components";
import { useFetchOnAction } from "../../Hooks";
import { Sponsors } from '../../Components'

import style from "./Home.module.scss";

const Home = () => {
  const [fetchData, fetchFunc] = useFetchOnAction();

  const { data, loading, error } = fetchData;

  const handleClick = () => {
    fetchFunc("/db/demo.json");
  };

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
