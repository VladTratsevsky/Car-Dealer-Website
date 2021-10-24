import styles from "./Card.module.css";

interface ICard {
  id: any;
  img: any;
  title: string;
  subtitle: string;
}

export function Card({ id, img, title, subtitle }: ICard) {
  return (
    <div className={styles.card} id={id}>
      <img className={styles.cardImage} src={img} alt="" />
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.subTitle}>{subtitle}</p>
      <button className={styles.cardButton}>Узнайте больше</button>
    </div>
  );
}
