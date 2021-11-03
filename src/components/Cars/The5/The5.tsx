import { useEffect, useState } from "react";
import styles from "./The5.module.css";

export const The5 = () => {
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.container}>
      <div className={scroll < 800 ? styles.Header : styles.none}>
        <h2 className={styles.headerTitle}>Новый BMW 5 серии.</h2>
      </div>
      <div className={styles.visible}></div>
      <div className={styles.content}>
        <h3 className={styles.contentTitle}>BMW 5 серии седан</h3>
        <div className={styles.contentContainer}>
          <p className={styles.text}>
            BMW 5 серии воплощает собой современный седан бизнес-класса. Модель
            отличается стильными атлетичными формами, динамичным силуэтом и
            лаконичным дизайном. Гладкие поверхности и четко очерченные контуры
            формируют элегантный экстерьер современного и высокотехнологичного
            автомобиля. Инновационные технологии и спортивное оснащение создают
            изысканный и функциональный интерьер. Невероятная динамика и
            инновационные технологии BMW 5 серии дополняют высочайший уровень
            комфорта, безопасность и, самое главное, непередаваемое удовольствие
            от вождения, которое автомобиль дарит как в каждодневных, так и в
            дальних поездках.
          </p>
          <div className={styles.descriptionImg}></div>
        </div>
        <h4 className={styles.designTitle}>Дизайн</h4>
        <div className={styles.contentContainer}>
          <div className={styles.designImg}></div>
          <p className={styles.text}>
            Спортивные характеристики и ощущение уверенности BMW 5 серии
            выведены на принципиально новый уровень — в первую очередь за счет
            традиционных пропорций BMW: длинной колесной базы, удлиненного
            капота и плавной линии крыши. Точные контуры кузова создают
            удивительный контраст с обтекаемыми поверхностями уменьшенной
            площади, формируя современный и лаконичный образ. Особенную
            динамичность передней части кузова придают характерная решетка
            радиатора и лазерные фары BMW Laserlight, подчеркивающие
            инновационный характер модели. Незаметный переход между передними
            фарами и решеткой радиатора дополнительно подчеркивает ширину
            автомобиля и создает ощущение исключительной элегантности и
            статусности, которое дополнительно усиливается при взгляде на
            боковую и заднюю части кузова — вплоть до патрубков выхлопной
            системы свободной формы, гармонично интегрированных в задний бампер.
            Вместе эти детали формируют стильный и при этом спортивный образ.
          </p>
        </div>
      </div>
      <div className={styles.visible}></div>
      <div className={styles.content}>
        <h2 className={styles.MotorTitle}>462 Л.С.</h2>
        <div className={styles.MotorContainer}>
          <div className={styles.MotorContainerLeft}>
            <h2 className={styles.leftTitle}> АБСОЛЮТНАЯ МОЩНОСТЬ. </h2>
            <p className={styles.MotorContainerText}>
              Под капотом BMW M550i xDrive скрывается фантастическая мощь:
              8-цилиндровый бензиновый двигатель M Performance TwinPower Turbo
              оказывается лучшим во всех отношениях. И это прекрасно слышно
              благодаря мощному звуку спортивной выпускной системы
            </p>
            <p className={styles.MotorContainerText}>
              Разгон с места до 100 км/ч за 4,0 секунды*: при мощности 462 л.с.*
              BMW M550i xDrive отодвигает в тень всех конкурентов. Благодаря
              интеллектуальной системе полного привода xDrive с подчеркнуто
              заднеприводной настройкой ему блестяще удается любой старт, а
              конкурентам остается только разглядывать его задние фонари. Хотя
              он прекрасно выглядит со всех сторон ...
            </p>
            <img
              className={styles.imgLeftTop}
              src="https://www.bmw.by/content/bmw/marketB4R1/bmw_by/ru_BY/all-models/5-series/sedan/2020/bmw-5-series-sedan-highlights/jcr:content/par/mosaicgallery_4b17/items/mosaicgalleryitem_f8/image.transform/mosaic485/image.1599218510430.jpg"
              alt=""
            />
            <img
              src="https://www.bmw.by/content/bmw/marketB4R1/bmw_by/ru_BY/all-models/5-series/sedan/2020/bmw-5-series-sedan-highlights/jcr:content/par/mosaicgallery_4b17/items/mosaicgalleryitem_4d/image.transform/mosaic485/image.1599218510735.jpg"
              alt=""
            />
          </div>
          <div className={styles.MotorContainerRight}>
            <div className={styles.rightTopImg}></div>

            <img
              className={styles.salon}
              src="https://www.bmw.by/content/bmw/marketB4R1/bmw_by/ru_BY/all-models/5-series/sedan/2020/bmw-5-series-sedan-highlights/jcr:content/par/mosaicgallery_4b17/items/mosaicgalleryitem_42/image.transform/mosaic685/image.1599218510582.jpg"
              alt=""
            />
            <div className={styles.rightContainerBottom}>
              <img
                className={styles.bottomLeft}
                src="https://www.bmw.by/content/bmw/marketB4R1/bmw_by/ru_BY/all-models/5-series/sedan/2020/bmw-5-series-sedan-highlights/jcr:content/par/mosaicgallery_4b17/items/mosaicgalleryitem_32/image.transform/mosaic385/image.1599218510870.jpg"
                alt=""
              />
              <img
                className={styles.bottomRight}
                src="https://www.bmw.by/content/bmw/marketB4R1/bmw_by/ru_BY/all-models/5-series/sedan/2020/bmw-5-series-sedan-highlights/jcr:content/par/mosaicgallery_4b17/items/mosaicgalleryitem_bb/image.transform/mosaic285/image.1599218511012.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className={styles.endImg}></div>
      </div>
    </div>
  );
};
