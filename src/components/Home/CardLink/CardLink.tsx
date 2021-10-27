import { useState } from "react";
import { TestDrive } from "../../Modal/TestDrive/TestDrive";
import styles from "./CardLink.module.css";

export const CardLink = () => {
  const [isVisible, setisVisible] = useState(false);

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
          <button
            className={styles.buttonDrive}
            onClick={(e) => setisVisible(true)}
          >
            {" "}
            Tест-драйв{" "}
          </button>
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
      <TestDrive onClose={() => setisVisible(false)} isVisible={isVisible} />
    </div>
  );
};
