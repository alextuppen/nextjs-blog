import { FC } from "react";
import { Duration } from "luxon";
import { BiTimeFive } from "react-icons/bi";
import { GiCookingPot } from "react-icons/gi";
import { RiKnifeFill } from "react-icons/ri";
import { TimeType, TimeProps } from "./Time.types";

export const Time: FC<TimeProps> = ({ className, type, time }) => {
  const duration = Duration.fromISO(time).toObject();

  return (
    <span className={className}>
      {type === TimeType.prep && <RiKnifeFill />}
      {type === TimeType.cook && <GiCookingPot />}
      {type === TimeType.total && <BiTimeFive />}
      <span>{`${type} time:`}</span>
      {Object.entries(duration).map(([key, value]) => (
        <span key={key}>{`${value} ${key}`}</span>
      ))}
    </span>
  );
};
