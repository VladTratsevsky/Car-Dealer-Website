import { useState } from "react";
import { ModalClose } from "../ModalClose/ModalClose";
import styles from "./TestDrive.module.css";

interface Ivisible {
  isVisible: boolean;
  onClose: any;
}

export const TestDrive = ({ isVisible, onClose }: Ivisible) => {
  const [notSend, setnotSend] = useState(false);

  const autoClose = () =>
    setTimeout(() => {
      setnotSend(false);
    }, 2000);

  if (isVisible === true) {
    return (
      <div className={styles.background}>
        <div className={styles.modal}>
          <div className={styles.containerClose}>
            <h2 className={styles.title}>Запрос тест-драйва.</h2>
            <div className={styles.close} onClick={onClose}>
              &#215;
            </div>
          </div>
          <h3 className={styles.subTitle}>
            Оставьте свою контактную информацию, и дилер BMW свяжется с Вами.
          </h3>
          <div className={styles.containerInner}>
            <h3 className={styles.subTitle}>Какая модель вас интересует?</h3>
            <select name="select" className={styles.select}>
              <option value="value1">BMW 3 серии</option>
              <option value="value2">BMW 5 серии</option>
              <option value="value3">BMW 7 серии</option>
            </select>
            <h3 className={styles.subTitle}>Персональная информация</h3>
            <input className={styles.inner} type="name" placeholder="Имя" />
            <input className={styles.inner} type="text" placeholder="Фамилия" />
            <input
              className={styles.inner}
              type="email"
              placeholder="Электронная почта"
            />
            <input
              className={styles.inner}
              type="numbers"
              placeholder="Мобильный телефон"
            />
            <button
              className={styles.button}
              onClick={(e) => {
                onClose();
                setnotSend(true);
                autoClose();
              }}
            >
              Отправить
            </button>
          </div>
        </div>
      </div>
    );
  } else if (notSend === true) {
    return <ModalClose />;
  } else {
    return null;
  }
};
