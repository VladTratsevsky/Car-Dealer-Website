import styles from "./ModalClose.module.css";

export const ModalClose = (notSend: any) => {
  return notSend ? (
    <div className={styles.background}>
      <div className={styles.modal}>
        <h3 className={styles.text}>
          Спасибо за обращение<br></br> менеджер свяжеться с вами в ближайшее
          время
        </h3>
      </div>
    </div>
  ) : null;
};
