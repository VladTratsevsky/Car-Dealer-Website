import styles from "./NavBar.module.css";

import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navBar}>
        <div className={styles.navlinks}>
          <NavLink
            to="/cars"
            className={styles.navLink}
            activeStyle={{
              padding: "0px 20px 30px 20px",
              borderBottom: "5px solid #0653b6",
            }}
          >
            Автомобили
          </NavLink>
          <NavLink
            to="/purchase"
            className={styles.navLink}
            activeStyle={{
              padding: "0px 20px 30px 20px",
              borderBottom: "5px solid #0653b6",
            }}
          >
            Покупка
          </NavLink>
          <NavLink
            to="/service"
            className={styles.navLink}
            activeStyle={{
              padding: "0px 20px 30px 20px",
              borderBottom: "5px solid #0653b6",
            }}
          >
            Cервис
          </NavLink>
        </div>
        <div className={styles.navLogo}>
          <NavLink to="/" className={styles.logolink}></NavLink>
        </div>
      </div>
    </div>
  );
};
