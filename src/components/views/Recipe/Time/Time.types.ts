export enum TimeType {
  prep = "Prep",
  cook = "Cook",
  total = "Total",
}

export interface TimeProps {
  type: TimeType;
  time: string;
}
