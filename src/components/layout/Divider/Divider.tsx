import { Separator, SeparatorOptions } from "reakit/Separator";
import styles from "./Divider.module.scss";

export const Divider = (props: SeparatorOptions) => {
  return <Separator className={styles.divider} {...props} />;
};
