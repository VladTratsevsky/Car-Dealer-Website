import { NavLink } from "react-router-dom";
import styles from "./Card.module.css";

interface ICard {
  id: any;
  img: any;
  title: string;
  subtitle: string;
  linkto: string;
}

export function Card({ id, img, title, subtitle, linkto }: ICard) {
  return (
    <div className={styles.card} id={id}>
      <img className={styles.cardImage} src={img} alt="" />
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.subTitle}>{subtitle}</p>
      <NavLink to={linkto} className={styles.cardButton}>
        Узнать больше
      </NavLink>
    </div>
  );
}
