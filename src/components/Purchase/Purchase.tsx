import { useEffect } from "react";
import styles from "./Purchase.module.css";

export const Purchase = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}></div>
      <div className={styles.content}>
        <h2 className={styles.title}>Покупка</h2>
        <h3 className={styles.subTitle}>
          Оставьте свою контактную информацию, и дилер BMW свяжется с Вами.
        </h3>
        <h3 className={styles.subTitle}>Какая модель вас интересует?</h3>
        <select name="select" className={styles.select}>
          <option value="value1">BMW 3 серии</option>
          <option value="value2">BMW 5 серии</option>
          <option value="value3">BMW 7 серии</option>
        </select>
        <h3 className={styles.subTitle}>Персональная информация</h3>
        <input className={styles.inner} type="text" placeholder="Имя" />
        <input className={styles.inner} type="text" placeholder="Фамилия" />
        <input
          className={styles.inner}
          type="email"
          placeholder="Электронная почта"
        />
        <input
          className={styles.inner}
          type="nambers"
          placeholder="Мобильный телефон"
        />
        <button className={styles.button}>Отправить</button>
      </div>
    </div>
  );
};
