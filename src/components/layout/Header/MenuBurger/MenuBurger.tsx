import styles from "./MenuBurger.module.scss";

export const MenuBurger = ({ open }) => (
  <div className={styles.root}>
    <div className={`${styles.first} ${open ? styles.open : ""}`}></div>
    <div className={`${styles.middle} ${open ? styles.open : ""}`}></div>
    <div className={`${styles.hidden} ${open ? styles.open : ""}`}></div>
    <div className={`${styles.last} ${open ? styles.open : ""}`}></div>
  </div>
);
