import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <div className={styles.container} id="contact">
      <div className={styles.information}>
        <ul className={styles.informationList}>
          <h3 className={styles.title}>Контакты</h3>
          <li className={styles.informationItem}>
            Адрес: Petuelring 130, 80809 München
          </li>
          <li className={styles.informationItem}>Телефон: +32353472981</li>
          <li className={styles.informationItem}>Почта: Example@mail.com</li>
        </ul>
        <div className={styles.links}>
          <a
            className={styles.facebook}
            href="https://ru-ru.facebook.com/BMW"
          ></a>
          <a
            className={styles.instagram}
            href="https://www.instagram.com/bmw/?hl=ru"
          ></a>
        </div>
      </div>
    </div>
  );
};
