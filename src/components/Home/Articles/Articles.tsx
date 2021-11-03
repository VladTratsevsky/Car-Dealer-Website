import { useHistory } from "react-router-dom";
import styles from "./Articles.module.css";

export const Articles = () => {
  const history = useHistory();

  const handleClickDealers = () => {
    history.push("/dealers");
  };
  const handleClickMoment = () => {
    history.push("/moment");
  };
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.cardImgDiller}></div>
        <h2 className={styles.titleDiller}>КАК СТАТЬ ДИЛЕРОМ BMW</h2>
        <button
          className={styles.button}
          onClick={() => {
            handleClickDealers();
          }}
        >
          Узнайте больше
        </button>
      </div>
      <div className={styles.card}>
        <div className={styles.cardImgMoment}></div>
        <h2 className={styles.titleMoment}>
          КАЖДЫЙ МОМЕНТ<br></br> УНИКАЛЬНЫЙ.
        </h2>
        <button
          className={styles.button}
          onClick={() => {
            handleClickMoment();
          }}
        >
          Узнайте больше
        </button>
      </div>
    </div>
  );
};
