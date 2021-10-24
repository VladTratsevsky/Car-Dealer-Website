import { useState } from "react";
import { Button } from "./Button/Button";
import styles from "./Slider.module.css";

const slideThe3 = () => {
  return (
    <div className={styles.cardThe3}>
      <h1 className={styles.title}>THE 3</h1>
      <Button />
    </div>
  );
};

const slideThe5 = () => {
  return (
    <div className={styles.cardThe5}>
      <h1 className={styles.title}>THE 5</h1>
      <Button />
    </div>
  );
};

const slideThe7 = () => {
  return (
    <div className={styles.cardThe7}>
      <h1 className={styles.title}>THE 7</h1>
      <Button />
    </div>
  );
};

const defaultTranslateX = 653;

export const Slider = () => {
  const [translateX, setTranslateX] = useState(0);

  return (
    <div className={styles.container}>
      <div
        className={styles.containerVisible}
        style={{ transform: `translateX(${translateX}px)` }}
      >
        {slideThe3()}
        {slideThe5()}
        {slideThe7()}
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
