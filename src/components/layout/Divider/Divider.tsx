import { DividerProps } from "./Divider.types";
import styles from "./Divider.module.scss";

export const Divider = ({ orientation = "horizontal" }: DividerProps) => {
  if (orientation === "horizontal") {
    return <div className={styles.horizontal}></div>;
  } else {
    return <div className={styles.vertical}></div>;
  }
};
