import { BsFillCalendarRangeFill, BsVectorPen } from "react-icons/bs";
import { ImOffice } from "react-icons/im";
import { RiGlobeFill } from "react-icons/ri";
import { DetailsProps } from "./Details.types";
import styles from "./Details.module.scss";

export const Details = ({
  details,
  variant,
  radiusBottomLeft,
}: DetailsProps) => {
  const { organisation, location, startDate, endDate, roleType } = details;

  return (
    <div
      className={`${styles[`${variant}Root`]} ${
        radiusBottomLeft && styles.radiusBottomLeft
      }`}
    >
      <div className={styles[`${variant}Wrapper`]}>
        <div className={styles.organisation}>
          <ImOffice className={styles[`${variant}Colour`]} />
          <span className={styles[`${variant}Colour`]}>{organisation}</span>
        </div>
        <div className={styles.location}>
          <RiGlobeFill className={styles[`${variant}Colour`]} />
          <span className={styles[`${variant}Colour`]}>{location}</span>
        </div>
        <div className={styles[`${variant}DateRange`]}>
          <BsFillCalendarRangeFill
            className={`${styles.dateIcon} ${styles[`${variant}Colour`]}`}
          />
          <span
            className={`${styles[`${variant}StartDate`]} ${
              styles[`${variant}Colour`]
            }`}
          >
            {startDate}
          </span>
          <span className={`${styles.endDate} ${styles[`${variant}Colour`]}`}>
            {endDate}
          </span>
        </div>
        <div className={styles.roleType}>
          <BsVectorPen className={styles[`${variant}Colour`]} />
          <span className={styles[`${variant}Colour`]}>{roleType}</span>
        </div>
      </div>
    </div>
  );
};
