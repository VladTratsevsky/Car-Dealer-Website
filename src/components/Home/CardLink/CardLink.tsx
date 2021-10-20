import styles from "./CardLink.module.css";

export const CardLink = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        СТАНЬТЕ ВЛАДЕЛЬЦЕМ<br></br> BMW
      </h2>
      <div className={styles.carsinStockContainer}>
        <div className={styles.carsinStock}>
          <div className={styles.imgCar}></div>
          <button className={styles.buttonCars}>
            Автомобили в<br></br> наличии
          </button>
        </div>
      </div>
      <div className={styles.testDriveContainer}>
        <div className={styles.testDrive}>
          <div className={styles.imgDrive}></div>
          <button className={styles.buttonDrive}> Tест-драйв </button>
        </div>
      </div>
      <div className={styles.getOfferContainer}>
        <div className={styles.getOffer}>
          <div className={styles.imgOffer}></div>
          <button className={styles.buttonOffer}>
            Получить<br></br> предложение
          </button>
        </div>
      </div>
    </div>
  );
};
