import { ComponentCommon } from "@types";

export enum TimeType {
  prep = "Prep",
  cook = "Cook",
  total = "Total",
}

export interface TimeProps extends ComponentCommon {
  type: TimeType;
  time: string;
}
