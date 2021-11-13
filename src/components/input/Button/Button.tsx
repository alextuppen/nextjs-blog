import { FC } from "react";
import { ButtonProps } from "./Button.types";
import styles from "./Button.module.scss";

export const Button: FC<ButtonProps> = ({
  href,
  icon,
  external,
  style,
  children,
}) => {
  if (href) {
    return (
      <a
        className={`${styles.linkButton} ${icon ? styles.iconButton : ""}`}
        href={href}
        target={external ? "_blank" : "_self"}
        style={style}
      >
        {icon ? icon : children}
      </a>
    );
  }
};
