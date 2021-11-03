import { useEffect, useState } from "react";
import styles from "./The3.module.css";

export const The3 = () => {
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
        <h2 className={styles.headerTitle}>Новый BMW 3 cерии.</h2>
      </div>
      <div className={styles.visible}></div>
      <div className={styles.content}>
        <h3 className={styles.contentTitle}>BMW 3 серии Седан</h3>
        <div className={styles.contentContainer}>
          <p className={styles.text}>
            C 1975 года BMW 3 серии представляет собой идеальное воплощение
            спортивного седана. В шестом поколении комбинация динамики,
            непревзойденной управляемости, инновационных функций и максимальной
            практичности впечатляет как никогда раньше. Идеальная развесовка
            между осями, классический задний привод, мощные, высокоэффективные
            бензиновые и дизельные двигатели нового поколения с технологией BMW
            EfficientDynamics гарантируют выдающуюся динамику и низкий расход
            топлива. Интеллектуальная система полного привода BMW xDrive
            обеспечивает наилучшее сцепление с дорогой при любых условиях. А
            линии исполнения Sport Line, Luxury Line или «М Спорт» позволят
            выбрать тот дизайн интерьера и экстерьера, который Вам по душе.
          </p>
          <div className={styles.descriptionImg}></div>
        </div>
        <h4 className={styles.designTitle}>Дизайн</h4>
        <div className={styles.contentContainer}>
          <div className={styles.designImg}></div>
          <p className={styles.text}>
            BMW 3 серии продолжает традиции марки. Спортивный и элегантный кузов
            с первого взгляда покоряет сочетанием эстетики и динамики. Уже в
            шестом поколении самый продаваемый в мире BMW остаётся образцом для
            подражания.
          </p>
        </div>
      </div>
      <div className={styles.visible}></div>
      <div className={styles.content}>
        <h2 className={styles.MotorTitle}>326 Л.С.</h2>
        <div className={styles.MotorContainer}>
          <div className={styles.MotorContainerLeft}>
            <h2 className={styles.leftTitle}> АБСОЛЮТНАЯ МОЩНОСТЬ. </h2>
            <p className={styles.MotorContainerText}>
              Дизайн нового BMW 3 серии Седан.
            </p>
            <p className={styles.MotorContainerText}>
              BMW 3 серии всегда был лидером. Новый язык дизайна спортивного
              седана соединяет успешное прошлое с многообещающим будущим. Каждый
              элемент его облика предрекает невероятное удовольствие от
              вождения.
            </p>
            <img
              className={styles.imgLeftTop}
              src="https://www.bmw.by/content/bmw/marketB4R1/bmw_by/ru_BY/all-models/3-series/sedan/2018/bmw-3-series-sedan-inspire/jcr:content/par/mosaicgallery_bdbe/items/mosaicgalleryitem_2b/image.transform/mosaic485/image.1562609667354.jpg"
              alt=""
            />
            <img
              src="https://www.bmw.by/content/bmw/marketB4R1/bmw_by/ru_BY/all-models/3-series/sedan/2018/bmw-3-series-sedan-inspire/jcr:content/par/mosaicgallery_bdbe/items/mosaicgalleryitem_64/image.transform/mosaic485/image.1562609667447.jpg"
              alt=""
            />
          </div>
          <div className={styles.MotorContainerRight}>
            <div className={styles.rightTopImg}></div>

            <img
              className={styles.salon}
              src="https://www.bmw.by/content/bmw/marketB4R1/bmw_by/ru_BY/all-models/3-series/sedan/2018/bmw-3-series-sedan-inspire/jcr:content/par/mosaicgallery_8135/items/mosaicgalleryitem_7c/image.transform/mosaic685/image.1562609667975.jpg"
              alt=""
            />
            <div className={styles.rightContainerBottom}>
              <img
                className={styles.bottomLeft}
                src="https://www.bmw.by/content/bmw/marketB4R1/bmw_by/ru_BY/all-models/3-series/sedan/2018/bmw-3-series-sedan-inspire/jcr:content/par/mosaicgallery_8135/items/mosaicgalleryitem_93/image.transform/mosaic385/image.1562609668069.jpg"
                alt=""
              />
              <img
                className={styles.bottomRight}
                src="https://www.bmw.by/content/bmw/marketB4R1/bmw_by/ru_BY/all-models/3-series/sedan/2018/bmw-3-series-sedan-inspire/jcr:content/par/mosaicgallery_8135/items/mosaicgalleryitem_73/image.transform/mosaic285/image.1562609668116.jpg"
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
