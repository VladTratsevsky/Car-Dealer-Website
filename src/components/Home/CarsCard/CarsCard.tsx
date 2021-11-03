import { Card } from "./Card";
import styles from "./CarsCard.module.css";
import carsData from "../../../components/carsData.json";

export const CarsCard = () => {
  return (
    <>
      <h2 className={styles.title}>Автомобили</h2>
      <div className={styles.containerCarsCard}>
        {carsData.map((item) => {
          console.log(item);

          return (
            <Card
              key={item.id}
              id={item.id}
              img={item.img}
              title={item.title}
              subtitle={item.subTitle}
              linkto={item.linkto}
            />
          );
        })}
      </div>
    </>
  );
};
