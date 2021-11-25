import { CSSProperties, MouseEventHandler, ReactNode } from "react";

export interface ButtonProps {
  size?: "default" | "large";
  onClick?: MouseEventHandler;
  href?: string;
  external?: boolean;
  icon?: ReactNode;
  style?: CSSProperties;
  className?: string;
}
