import { CSSProperties, MouseEventHandler, ReactNode } from "react";

export enum ButtonSize {
  Default,
  Large,
}

export enum ButtonVariants {
  Primary,
  Secondary,
  Text,
  Unstyled,
}

export interface ButtonProps {
  size?: ButtonSize;
  variant?: ButtonVariants;
  onClick?: MouseEventHandler;
  href?: string;
  external?: boolean;
  icon?: ReactNode;
  style?: CSSProperties;
  className?: string;
}
