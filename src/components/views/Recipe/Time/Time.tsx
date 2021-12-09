import { FC } from "react";
import { Duration } from "luxon";
import { BiTimeFive } from "react-icons/bi";
import { GiCookingPot } from "react-icons/gi";
import { RiKnifeFill } from "react-icons/ri";
import { TimeType, TimeProps } from "./Time.types";
import styles from "./Time.module.scss";

export const Time: FC<TimeProps> = ({ type, time }) => {
  const duration = Duration.fromISO(time).toObject();
  console.log(duration);

  return (
    <span className={styles.root}>
      {type === TimeType.prep && <RiKnifeFill className={styles.icon} />}
      {type === TimeType.cook && <GiCookingPot />}
      {type === TimeType.total && <BiTimeFive />}
      <span>{`${type} time:`}</span>
      {Object.entries(duration).map(([key, value]) => (
        <span key={key}>{`${value} ${key}`}</span>
      ))}
    </span>
  );
};
