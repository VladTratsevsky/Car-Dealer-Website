import { useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "./Slider.module.css";

const defaultTranslateX = 653;

export const Slider = () => {
  const [translateX, setTranslateX] = useState(0);
  const history = useHistory();

  const handleClickThe3 = () => {
    history.push("/cars/the-3");
  };

  const handleClickThe5 = () => {
    history.push("/cars/the-5");
  };

  const handleClickThe7 = () => {
    history.push("/cars/the-7");
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.containerVisible}
        style={{ transform: `translateX(${translateX}px)` }}
      >
        <div className={styles.cardThe3}>
          <h1 className={styles.title}>THE 3</h1>
          <button
            className={styles.button}
            onClick={() => {
              handleClickThe3();
            }}
          >
            Узнайте больше
          </button>
        </div>
        <div className={styles.cardThe5}>
          <h1 className={styles.title}>THE 5</h1>
          <button
            className={styles.button}
            onClick={() => {
              handleClickThe5();
            }}
          >
            Узнайте больше
          </button>
        </div>
        <div className={styles.cardThe7}>
          <h1 className={styles.title}>THE 7</h1>
          <button
            className={styles.button}
            onClick={() => {
              handleClickThe7();
            }}
          >
            Узнайте больше
          </button>
        </div>
      </div>
      <button
        className={styles.sliderButtonL}
        onClick={() => {
          if (translateX !== defaultTranslateX) {
            setTranslateX(translateX + defaultTranslateX);
          }
        }}
      >
        &#10094;
      </button>
      <button
        className={styles.sliderButtonR}
        onClick={() => {
          if (translateX !== -defaultTranslateX) {
            setTranslateX(translateX - defaultTranslateX);
          }
        }}
      >
        &#10095;
      </button>
    </div>
  );
};
