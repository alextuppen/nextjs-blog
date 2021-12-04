import { Card, Technologies } from "@layout";
import { ExperienceProps } from "./Experience.types";
import styles from "./Experience.module.scss";

export const Experience = ({
  experience: {
    title,
    organisation,
    location,
    dateRange,
    roleType,
    technologies,
    description,
  },
}: ExperienceProps) => (
  <Card className={styles.card}>
    <h3>{title}</h3>
    <div className={styles.details}>
      <span className={styles.organisation}>{organisation}</span>
      <span className={styles.location}>{location}</span>
      <span className={styles.dateRange}>{dateRange}</span>
      <span className={styles.roleType}>{roleType}</span>
    </div>
    {technologies && <Technologies technologies={technologies} />}
    <p>{description.join()}</p>
  </Card>
);
