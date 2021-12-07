import { DetailsProps } from "./Details.types";
import styles from "./Details.module.scss";

export const Details = ({
  details: { title, organisation, location, dateRange, roleType },
}: DetailsProps) => (
  <div className={styles.root}>
    <h3 className={styles.title}>{title}</h3>
    <div className={styles.details}>
      <span className={styles.organisation}>{organisation}</span>
      <span className={styles.location}>{location}</span>
      <span className={styles.dateRange}>{dateRange}</span>
      <span className={styles.roleType}>{roleType}</span>
    </div>
  </div>
);
