import styles from "./Card.module.scss";

export const Card = ({ children }) => (
  <div className={styles.card}>{children}</div>
);
