import { FC } from "react";
import { ButtonProps } from "./Button.types";
import styles from "./Button.module.scss";

export const Button: FC<ButtonProps> = ({
  size = "default",
  onClick,
  href,
  icon,
  external,
  style,
  children,
}) => {
  let classes = "";

  if (href) {
    classes = `${classes} ${styles.linkButton}`;
  } else {
    classes = `${classes} ${styles.button}`;
  }

  if (icon) {
    if (size === "default") {
      classes = `${classes} ${styles.icon}`;
    } else {
      classes = `${classes} ${styles.largeIcon}`;
    }
  }

  console.log(classes);

  if (href) {
    return (
      <a
        className={classes}
        href={href}
        target={external ? "_blank" : "_self"}
        style={style}
      >
        {icon ? icon : children}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick} style={style}>
      {icon ? icon : children}
    </button>
  );
};
