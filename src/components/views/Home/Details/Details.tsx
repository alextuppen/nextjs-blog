import { DetailsProps } from "./Details.types";
import styles from "./Details.module.scss";

export const Details = ({ title, details }: DetailsProps) => {
  const { organisation, location, dateRange, roleType } = details || {};

  return (
    <div className={styles.root}>
      <h3 className={styles.title}>{title}</h3>
      {organisation && location && dateRange && roleType && (
        <div className={styles.details}>
          <span className={styles.organisation}>{organisation}</span>
          <span className={styles.location}>{location}</span>
          <span className={styles.dateRange}>{dateRange}</span>
          <span className={styles.roleType}>{roleType}</span>
        </div>
      )}
    </div>
  );
};
