import { MouseEventHandler, ReactNode } from "react";
import { ComponentCommon } from "@types";

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

export interface ButtonProps extends ComponentCommon {
  size?: ButtonSize;
  variant?: ButtonVariants;
  onClick?: MouseEventHandler;
  href?: string;
  external?: boolean;
  icon?: ReactNode;
}
