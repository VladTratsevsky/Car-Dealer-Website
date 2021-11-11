import { useEffect, useState } from "react";
import styles from "./Servise.module.css";

const defaultTranslateX = window.innerWidth;

export const Service = () => {
  const [translateX, setTranslateX] = useState(0);
  const [model, setModel] = useState(1);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      <div className={styles.header}>
        <h2 className={styles.title}>BMW Service Inclusive</h2>
      </div>
      <div className={styles.container}>
        <h3 className={styles.containerTitle}>СЕРВИС И ЗАПЧАСТИ</h3>
        <div className={styles.containerButton}>
          <button
            className={`${styles.button} ${
              model === 1 ? styles["button-active"] : ""
            }`}
            onClick={() => {
              setTranslateX(0);
              setModel(1);
            }}
          >
            Плановое ТО
          </button>
          <button
            className={`${styles.button} ${
              model === 2 ? styles["button-active"] : ""
            }`}
            style={{}}
            onClick={() => {
              setTranslateX(-defaultTranslateX);
              setModel(2);
            }}
          >
            Масляный сервис
          </button>
          <button
            className={`${styles.button} ${
              model === 3 ? styles["button-active"] : ""
            }`}
            onClick={() => {
              setTranslateX(-2 * defaultTranslateX);
              setModel(3);
            }}
          >
            Ремонт подвески
          </button>
          <button
            className={`${styles.button} ${
              model === 4 ? styles["button-active"] : ""
            }`}
            onClick={() => {
              setTranslateX(-3 * defaultTranslateX);
              setModel(4);
            }}
          >
            Тормозная система
          </button>
          <button
            className={`${styles.button} ${
              model === 5 ? styles["button-active"] : ""
            }`}
            onClick={() => {
              setTranslateX(-4 * defaultTranslateX);
              setModel(5);
            }}
          >
            Ремонт двигателей
          </button>
          <button
            className={`${styles.button} ${
              model === 6 ? styles["button-active"] : ""
            }`}
            onClick={() => {
              setTranslateX(-5 * defaultTranslateX);
              setModel(6);
            }}
          >
            Шиномонтаж
          </button>
        </div>
        <div className={styles.containerCard}>
          <div
            className={styles.containerCardVisible}
            style={{ transform: `translateX(${translateX}px)` }}
          >
            <div
              className={styles.cardMaintenance}
              style={{ width: window.innerWidth }}
            >
              <div className={styles.imgMaintenance}></div>
              <div className={styles.description}>
                <h3 className={styles.descriotionTitle}>Плановое ТО</h3>
                <p className={styles.descriotionText}>
                  Оперативное выполнение плановых работ по обслуживанию Вашего
                  BMW согласно рекомендациям завода-производителя.
                </p>
              </div>
            </div>
            <div className={styles.cardOil}>
              <div className={styles.imgOil}></div>
              <div className={styles.description}>
                <h3 className={styles.descriotionTitle}>Масляный сервис</h3>
                <p className={styles.descriotionText}>
                  Качественный подход к особо важной услуге по замене масла
                  продлит срок службы мотора Вашего BMW.
                </p>
              </div>
            </div>
            <div className={styles.cardSuspension}>
              <div className={styles.imgSuspension}></div>
              <div className={styles.description}>
                <h3 className={styles.descriotionTitle}>Ремонт подвески</h3>
                <p className={styles.descriotionText}>
                  Профессиональная диагностика подвески и внимание к каждой
                  детали дает уверенность в надежности всех элементов подвески в
                  целом
                </p>
              </div>
            </div>
            <div className={styles.cardBrakes}>
              <div className={styles.imgBrakes}></div>
              <div className={styles.description}>
                <h3 className={styles.descriotionTitle}>
                  Ремонт тормозной системы
                </h3>
                <p className={styles.descriotionText}>
                  Особый узел в системе Вашего BMW, который влияет на
                  безопасность и не допускает малейших отклонений от
                  установленных допусков.
                </p>
              </div>
            </div>
            <div className={styles.cardEngine}>
              <div className={styles.imgEngine}></div>
              <div className={styles.description}>
                <h3 className={styles.descriotionTitle}>Ремонт двигателей</h3>
                <p className={styles.descriotionText}>
                  Детальный подход к восстановительному ремонту двигателя вернет
                  Вашему BMW былую силу.
                </p>
              </div>
            </div>
            <div className={styles.cardTire}>
              <div className={styles.imgTire}></div>
              <div className={styles.description}>
                <h3 className={styles.descriotionTitle}>
                  Шиномонтажные работы
                </h3>
                <p className={styles.descriotionText}>
                  Поверенное шиномонтажное оборудование и качественные материалы
                  создают идеальную балансировку колес Вашего BMW.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
