import styles from "./Header.module.css";

import { NavBar } from "./NavBar/NavBar";

export const Header = () => {
    return(
        <div className={styles.container}>
            <NavBar />
            <div className={styles.content}>
                <h2 className={styles.title}> ГОТОВЫ К НОВЫМ ЭТАПАМ </h2>
                <h3 className={styles.subTitle}> ОТКРОЙТЕ ДЛЯ СЕБЯ ЛУЧШИЕ ПРЕДЛОЖЕНИЯ НА ВПЕЧАТЛЯЮЩИЙ<br></br> МОДЕЛЬНЫЙ РЯД BMW </h3>
                <button className={styles.button}>Узнайте больше</button>
            </div>
        </div>
    )
}