import { Card, Section, Technologies } from "@layout";
import { experiences, education, projects } from "./static-content";
import { Details } from "./Details/Details";
import styles from "./Experience.module.scss";

export const Experience = () => (
  <>
    <Section>
      <h2>Experience</h2>
      {experiences.map(({ title, details, technologies, description }) => (
        <Card className={styles.card} key={details.dateRange}>
          <Details title={title} details={details} />
          {technologies && <Technologies technologies={technologies} />}
          {description.length > 0 && <p>{description.join("")}</p>}
        </Card>
      ))}
    </Section>
    <Section>
      <h2>Projects</h2>
      {projects.map(({ title, technologies, description }) => (
        <Card className={styles.card} key={title}>
          <Details title={title} />
          {technologies && <Technologies technologies={technologies} />}
          {description.length > 0 && <p>{description.join("")}</p>}
        </Card>
      ))}
    </Section>
    <Section>
      <h2>Education</h2>
      <Card className={`${styles.card} ${styles.education}`}>
        {education.map(({ title, details }) => (
          <Details title={title} details={details} key={title} />
        ))}
      </Card>
    </Section>
  </>
);
