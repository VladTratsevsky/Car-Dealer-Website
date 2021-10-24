import styles from "./Articles.module.css";

export const Articles = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.cardImgDiller}></div>
        <h2 className={styles.titleDiller}>КАК СТАТЬ ДИЛЕРОМ BMW</h2>
        <button className={styles.button}>Узнайте больше</button>
      </div>
      <div className={styles.card}>
        <div className={styles.cardImgMoment}></div>
        <h2 className={styles.titleMoment}>
          КАЖДЫЙ МОМЕНТ<br></br> УНИКАЛЬНЫЙ.
        </h2>
        <button className={styles.button}>Узнайте больше</button>
      </div>
    </div>
  );
};
