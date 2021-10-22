import styles from "./Card.module.css";

interface ICard {
  id: number;
  img: any;
  title: string;
  subtitle: string;
}

export function Card({
  id: number,
  img: any,
  title: string,
  subtitle: string,
}: ICard) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.card} id={id}>
        <img className={styles.cardImage} src={img} alt="" />
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.subTitle}>{subtitle}</p>
        <button className={styles.cardButton}>Узнайте больше</button>
      </div>
    </div>
  );
}
