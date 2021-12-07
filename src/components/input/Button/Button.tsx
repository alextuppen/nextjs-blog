import { FC } from "react";
import Link from "next/link";
import { Button as RButton } from "reakit/Button";
import { ButtonProps } from "./Button.types";
import styles from "./Button.module.scss";

export const Button: FC<ButtonProps> = ({
  size = "default",
  onClick,
  href,
  icon,
  external,
  style,
  className,
  children,
}) => {
  let classes = "";

  if (className) {
    classes = `${classes} ${className}`;
  }

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

  if (href) {
    if (external) {
      return (
        <a
          className={classes}
          href={href}
          target="_blank"
          style={style}
          rel="noreferrer"
        >
          {icon || children}
        </a>
      );
    }
    return (
      <Link href={href}>
        {/* href passed to anchor tag automatically by Link */}
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className={classes} style={style}>
          {icon || children}
        </a>
      </Link>
    );
  }

  return (
    <RButton className={classes} onClick={onClick} style={style}>
      {icon || children}
    </RButton>
  );
};
