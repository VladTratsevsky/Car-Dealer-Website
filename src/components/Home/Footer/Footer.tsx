import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <div className={styles.container} id="contact">
      <div className={styles.information}>
        <ul className={styles.informationList}>
          <h3 className={styles.title}>Контакты</h3>
          <li className={styles.informationItem}>Адрес:</li>
          <li className={styles.informationItem}>Телефон:</li>
          <li className={styles.informationItem}>Почта:</li>
        </ul>
        <div className={styles.links}>
          <a className={styles.facebook}></a>
          <a className={styles.instagram}></a>
        </div>
      </div>
    </div>
  );
};
