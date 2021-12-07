import { Separator } from "reakit/Separator";
import styles from "./Divider.module.scss";
import { DividerProps } from "./Divider.types";

export const Divider = ({ className, ...rest }: DividerProps) => (
  <Separator className={`${styles.divider} ${className}`} {...rest} />
);
