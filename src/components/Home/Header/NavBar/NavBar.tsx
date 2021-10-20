import styles from "./NavBar.module.css";

import { NavLink } from "react-router-dom";

export const NavBar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.navBar}>
                <div className={styles.navlinks}>
                    <NavLink to="/cars" className={styles.carsLink}>Автомобили</NavLink>
                    <NavLink to="/purchase" className={styles.purchaseLink}>Покупка</NavLink>
                    <NavLink to="/service" className={styles.serviceLink}>Cервис</NavLink>
                </div>
                <div className={styles.navLogo}>
                    <NavLink to="/" className={styles.logolink}></NavLink>
                </div>
            </div>
        </div>
    )}