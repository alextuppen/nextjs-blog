import styles from "./Section.module.scss";

export const Section = ({ children }) => (
  <section className={styles.section}>{children}</section>
);
