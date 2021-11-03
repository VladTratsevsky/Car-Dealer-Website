import { useEffect, useState } from "react";
import styles from "./The7.module.css";

export const The7 = () => {
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
        <h2 className={styles.headerTitle}>Новый BMW 7 серии.</h2>
      </div>
      <div className={styles.visible}></div>
      <div className={styles.content}>
        <h3 className={styles.contentTitle}>BMW 7 серии седан</h3>
        <div className={styles.contentContainer}>
          <p className={styles.text}>
            Непревзойденные характеристики, свобода в пути. BMW 7-series - это
            эффектный экстерьер, невероятная мощность и максимум комфорта. В
            базовою комплектацию BMW 750Li входит новый 8-цилиндровый бензиновый
            двигатель TwinPower Turbo, а также полноприводная смарт система
            xDrive. Такое сочетание обеспечивает автомобилю статус
            безоговорочного лидера. Автомобиль имеет элегантный и стильный
            внешний вид, а интерьер салона выполнен из премиальных отделочных
            материалов, что позволяет окунуться в атмосферу роскоши и комфорта.
            В салоне автомобиля присутствуют не только технические инновации, но
            и фирменные элементы декора БМВ. Данную новинку можно по праву
            отнести к классу автомобилей "люкс".
          </p>
          <div className={styles.descriptionImg}></div>
        </div>
        <h4 className={styles.designTitle}>Дизайн</h4>
        <div className={styles.contentContainer}>
          <div className={styles.designImg}></div>
          <p className={styles.text}>
            Компания BMW стремится к первенству во всем. Создание BMW M760LI
            XDrive не стало исключением: автомобиль оснащен мощным агрегатом
            V12, который в сочетании с комплектом M Sport и элементами декора в
            оттенке "Серый Церий" обеспечивают еще более динамичное и стильное
            оформление. С первых моментов знакомства, в автомобиле привлекают
            крупные воздухозаборники, расположенные в широком фронтальном
            бампере, впечатляющие очертания которого подчеркивают
            выразительность дверных порогов. Именно экстерьер модели создает
            первое впечатление: внушающая передняя часть кузова гармонично
            дополняется колесной базой с эксклюзивными легкосплавными дисками.
            Зеркала заднего обзора, выполненные в традиционном оттенке "Серый
            Церий", фирменные надписи "V12" на задней части кузова и выхлопные
            патрубки являются стильным дополнением дизайна.
          </p>
        </div>
      </div>
      <div className={styles.visible}></div>
      <div className={styles.content}>
        <h2 className={styles.MotorTitle}>609 Л.С.</h2>
        <div className={styles.MotorContainer}>
          <div className={styles.MotorContainerLeft}>
            <h2 className={styles.leftTitle}> АБСОЛЮТНАЯ МОЩНОСТЬ. </h2>
            <p className={styles.MotorContainerText}>BMW M760Li xDRIVE СЕДАН</p>
            <p className={styles.MotorContainerText}>
              Нас вдохновляет желание превзойти конкурентов. Именно такая цель и
              стояла перед создателями BMW M760Li xDrive с мощным двигателем
              V12. В сочетании с пакетом M Sport и декоративными элементами
              цвета «Cerium Grey» автомобиль получает еще более динамичный
              облик. С первого взгляда внимание привлекают впечатляющие
              воздухозаборники в широком переднем бампере. Впечатление
              внушительного характера определяет именно дизайн передней части
              кузова, затем оно усиливается благодаря эксклюзивным легкосплавным
              колесным дискам, зеркалам заднего вида в цвете «Cerium Grey»,
              надписи «V12» на задних стойках кузова и выхлопным патрубкам.
            </p>
            <img
              className={styles.imgLeftTop}
              src="https://www.bmw.by/content/bmw/marketB4R1/bmw_by/ru_BY/all-models/7-series/sedan/2019/bmw-7-series-sedan-inspire/jcr:content/par/mosaicgallery_42f7/items/mosaicgalleryitem_21/image.transform/mosaic485/image.1552989626947.jpg"
              alt=""
            />
            <img
              src="https://www.bmw.by/content/bmw/marketB4R1/bmw_by/ru_BY/all-models/7-series/sedan/2019/bmw-7-series-sedan-inspire/jcr:content/par/mosaicgallery_42f7/items/mosaicgalleryitem_61/image.transform/mosaic485/image.1552989627092.jpg"
              alt=""
            />
          </div>
          <div className={styles.MotorContainerRight}>
            <div className={styles.rightTopImg}></div>

            <img
              className={styles.salon}
              src="https://autoidea.by/assets/images/products/7-series/bmw-7series-sedan-inspire-taphold-01-slide-05-desktop.jpg"
              alt=""
            />
            <div className={styles.rightContainerBottom}>
              <img
                className={styles.bottomLeft}
                src="https://www.bmw.by/content/bmw/marketB4R1/bmw_by/ru_BY/all-models/7-series/sedan/2019/bmw-7-series-sedan-inspire/jcr:content/par/mosaicgallery_bf64/items/mosaicgalleryitem_88/image.transform/mosaic485/image.1552989626322.jpg"
                alt=""
              />
              <img
                className={styles.bottomRight}
                src="https://www.bmw.by/content/bmw/marketB4R1/bmw_by/ru_BY/all-models/7-series/sedan/2019/bmw-7-series-sedan-inspire/jcr:content/par/mosaicgallery_bf64/items/mosaicgalleryitem_74/image.transform/mosaic485/image.1552989626245.jpg"
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
