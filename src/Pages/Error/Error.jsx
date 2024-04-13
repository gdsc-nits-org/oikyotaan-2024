import styles from "./Error.module.scss";

const Error = () => {
  return(
  <main className={styles.container}>
  <div className={styles.error}>404</div>
  <br />
  <br />
  <span className={styles.info}>File not found</span>
</main>
  )
};

export default Error;
