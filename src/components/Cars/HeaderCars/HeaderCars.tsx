import { NavBar } from "../../Home/Header/NavBar/NavBar";
import styles from "./HeaderCars.module.css";

export const CarsHeader = () => {
  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.content}>
        <h2 className={styles.title}> ГОТОВЫ К НОВЫМ ЭТАПАМ </h2>
        <h3 className={styles.subTitle}>
          {" "}
          ОТКРОЙТЕ ДЛЯ СЕБЯ ЛУЧШИЕ ПРЕДЛОЖЕНИЯ НА ВПЕЧАТЛЯЮЩИЙ<br></br>{" "}
          МОДЕЛЬНЫЙ РЯД BMW{" "}
        </h3>
      </div>
    </div>
  );
};
