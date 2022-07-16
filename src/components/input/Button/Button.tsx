import { FC } from "react";
import Link from "next/link";
import { Button as RButton } from "reakit/Button";
import { ButtonSize, ButtonVariants, ButtonProps } from "./Button.types";
import styles from "./Button.module.scss";

export const Button: FC<ButtonProps> = ({
  size = ButtonSize.Default,
  variant = ButtonVariants.Unstyled,
  onClick,
  href,
  icon,
  external,
  className,
  children,
  ...props
}) => {
  let classes = `${styles.button}`;

  if (icon) {
    switch (size) {
      case ButtonSize.Default:
        classes = `${classes} ${styles.icon}`;
        break;
      case ButtonSize.Large:
        classes = `${classes} ${styles.largeIcon}`;
        break;
      default:
        throw new Error(`ButtonSize enum has illegal value ${size}`);
    }
  }

  switch (variant) {
    case ButtonVariants.Primary:
      classes = `${classes}  ${styles.primary}`;
      break;
    case ButtonVariants.Secondary:
      classes = `${classes}  ${styles.secondary}`;
      break;
    case ButtonVariants.Text:
      classes = `${classes}  ${styles.textButton}`;
      break;
    case ButtonVariants.Unstyled:
      break;
    default:
      throw new Error(`ButtonVariants enum has illegal value ${variant}`);
  }

  if (className) {
    classes = `${classes} ${className}`;
  }

  if (href) {
    if (external) {
      return (
        <a
          className={classes}
          href={href}
          target="_blank"
          rel="noreferrer"
          {...props}
        >
          {icon || children}
        </a>
      );
    }
    return (
      <Link href={href} {...props}>
        {/* href passed to anchor tag automatically by Link */}
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className={classes}>{icon || children}</a>
      </Link>
    );
  }

  return (
    <RButton className={classes} onClick={onClick} {...props}>
      {icon || children}
    </RButton>
  );
};
