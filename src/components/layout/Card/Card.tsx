import { FC } from "react";
import { ComponentCommon } from "@types";
import styles from "./Card.module.scss";

export const Card: FC<ComponentCommon> = ({ className, style, children }) => (
  <div className={`${styles.card} ${className}`} style={style}>
    {children}
  </div>
);
