import { FC } from "react";
import { ComponentCommon } from "@types";
import styles from "./Section.module.scss";

export const Section: FC<ComponentCommon> = ({
  className,
  style,
  children,
}) => (
  <section className={`${styles.section} ${className}`} style={style}>
    {children}
  </section>
);
