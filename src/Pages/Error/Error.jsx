import { Navbar } from "../../Components";
import style from "./Error.module.scss";

const Error = () => {
  return (
    <div>
      <Navbar />
      <div className={style.error}>Error</div>
    </div>
  );
};

export default Error;
