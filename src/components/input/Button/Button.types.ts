import { CSSProperties, ReactNode } from "react";

export interface ButtonProps {
  href?: string;
  icon?: ReactNode;
  external?: boolean;
  style?: CSSProperties;
}
