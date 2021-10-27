import { useState } from "react";
import { NavLink } from "react-router-dom";
import { TestDrive } from "../../Modal/TestDrive/TestDrive";
import styles from "./CardDescriptionCars.module.css";

const defaultTranslateX = 1600;

export const CardDescriptionCars = () => {
  const [translateX, setTranslateX] = useState(0);
  const [model, setModel] = useState(5);
  const [isVisible, setisVisible] = useState(false);

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>
        Откройте для себя специальные предложения на ряд ведущих моделей BMW!
      </h3>
      <div className={styles.containerButton}>
        <button
          className={`${styles.button} ${
            model === 3 ? styles["button-active"] : ""
          }`}
          onClick={() => {
            setTranslateX(1600);
            setModel(3);
          }}
        >
          THE 3
        </button>
        <button
          className={`${styles.button} ${
            model === 5 ? styles["button-active"] : ""
          }`}
          style={{}}
          onClick={() => {
            setTranslateX(0);
            setModel(5);
          }}
        >
          THE 5
        </button>
        <button
          className={`${styles.button} ${
            model === 7 ? styles["button-active"] : ""
          }`}
          onClick={() => {
            setTranslateX(-1600);
            setModel(7);
          }}
        >
          THE 7
        </button>
      </div>
      <div className={styles.containerCard}>
        <div
          className={styles.containerCardVisible}
          style={{ transform: `translateX(${translateX}px)` }}
        >
          <div className={styles.cardThe3}>
            <div className={styles.imgThe3}></div>
            <div className={styles.description}>
              <h3 className={styles.descriotionTitle}>РАЗГОНЯЕТ РЕАЛЬНОСТЬ.</h3>
              <p className={styles.descriotionText}>
                Едва выехав на дорогу, новый BMW 3 серии оставляет позади
                предрассудки и опережает самые смелые ожидания. В очередной раз
                легендарная модель является в новой ипостаси. Новый дизайн
                символизирует наступление новой эры. В движение совершенный
                спортивный седан приводится еще более мощными и экономичными
                двигателями. Новое решение: достаточно сказать: «ОК, BMW», —
                после чего новый автомобиль BMW 3 серии начнет распознавать
                голос и практически предугадывать ваши желания.
              </p>
              <p className={styles.descriotionSubText}>
                Ознакомьтесь с доступными моделями BMW 3 серии и получите
                персональное предложение.
              </p>
              <div className={styles.descriotionButton}>
                <button
                  className={styles.drive}
                  onClick={(e) => setisVisible(true)}
                >
                  тест-драйв
                </button>
                <NavLink to="/cars/the-3" className={styles.offer}>
                  Узнать больше
                </NavLink>
              </div>
            </div>
          </div>
          <div className={styles.cardThe5}>
            <div className={styles.imgThe5}></div>
            <div className={styles.description}>
              <h3 className={styles.descriotionTitle}>
                ГОТОВЫ К ВЫХОДУ НА БОЛЬШУЮ СЦЕНУ
              </h3>
              <p className={styles.descriotionText}>
                BMW 5 серии оставляет неизгладимое впечатление по всем
                параметрам. Поверхности, линии и детали дизайна этой модели
                подчеркивают универсальный спортивный характер автомобиля,
                который с азартом принимает любые вызовы. Обратите внимание на
                такие изменения, как усовершенствованная передняя часть кузова с
                увеличенными воздухозаборниками, а также упрощенные контуры с
                четкими углами. Эволюция модели тонкая, но впечатляющая. Это во
                всех смыслах автомобиль-икона. Свяжитесь с официальным дилером
                BMW, чтобы получить персональное предложение.
              </p>
              <p className={styles.descriotionSubText}>
                Ознакомьтесь с доступными моделями BMW 5 серии и получите
                персональное предложение.
              </p>
              <div className={styles.descriotionButton}>
                <button
                  className={styles.drive}
                  onClick={(e) => setisVisible(true)}
                >
                  тест-драйв
                </button>
                <NavLink to="/cars/the-5" className={styles.offer}>
                  Узнать больше
                </NavLink>
              </div>
            </div>
          </div>
          <div className={styles.cardThe7}>
            <div className={styles.imgThe7}></div>
            <div className={styles.description}>
              <h3 className={styles.descriotionTitle}>МАСШТАБ ДЛЯ ЛИЧНОСТИ</h3>
              <p className={styles.descriotionText}>
                Совершенные характеристики и максимальное удовольствие BMW 7
                серии обращает на себя внимание внушительным обликом,
                исключительной мощностью и максимальным комфортом. BMW 750Li с
                новым 8-цилиндровым бензиновым двигателем BMW TwinPower Turbo и
                интеллектуальной системой полного привода xDrive в стандартной
                комплектации рожден, чтобы стать безоговорочным лидером.
                Эмоциональность элегантного дизайна и особая атмосфера роскоши
                внутреннего пространства с высоким качеством отделки,
                разнообразием декоративных элементов и технических инновационных
                решений поднимают новую модель на вершину класса «люкс».
                Элегантность встречает эксклюзивность. Роскошь встречает
                производительность.
              </p>
              <p className={styles.descriotionSubText}>
                Ознакомьтесь с доступными моделями BMW 7 серии и получите
                персональное предложение.
              </p>
              <div className={styles.descriotionButton}>
                <button
                  className={styles.drive}
                  onClick={(e) => setisVisible(true)}
                >
                  тест-драйв
                </button>
                <NavLink to="/cars/the-7" className={styles.offer}>
                  Узнать больше
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <button
          className={`${styles.sliderButtonL} ${
            model === 3 ? styles["sliderButtonL-deactive"] : ""
          }`}
          onClick={() => {
            if (translateX < 1600) {
              setModel(model - 2);
            }
            if (translateX !== defaultTranslateX) {
              setTranslateX(translateX + defaultTranslateX);
            }
          }}
        >
          &#10094;
        </button>
        <button
          className={`${styles.sliderButtonR} ${
            model === 7 ? styles["sliderButtonR-deactive"] : ""
          }`}
          onClick={() => {
            if (translateX > -1600) {
              setModel(model + 2);
            }
            if (translateX !== -defaultTranslateX) {
              setTranslateX(translateX - defaultTranslateX);
            }
          }}
        >
          &#10095;
        </button>
      </div>
      <TestDrive onClose={() => setisVisible(false)} isVisible={isVisible} />
    </div>
  );
};
