import { Card, Section, Technologies } from "@layout";
import { experiences, education, projects } from "./static-content";
import { Details } from "./Details/Details";
import styles from "./Home.module.scss";

export const Home = () => (
  <>
    <Section>
      <h2>Experience</h2>
      {experiences.map(({ details, technologies, description }) => (
        <Card className={styles.card} key={details.dateRange}>
          <Details details={details} />
          {technologies && <Technologies technologies={technologies} />}
          {description.length > 0 && <p>{description.join("")}</p>}
        </Card>
      ))}
    </Section>
    <Section>
      <h2>Projects</h2>
      {projects.map(({ title, technologies, description }) => (
        <Card className={styles.card} key={title}>
          <h3 className={styles.title}>{title}</h3>
          {technologies && <Technologies technologies={technologies} />}
          {description.length > 0 && <p>{description.join("")}</p>}
        </Card>
      ))}
    </Section>
    <Section>
      <h2>Education</h2>
      <Card className={styles.card}>
        {education.map((edu) => (
          <Details details={edu} key={edu.dateRange} />
        ))}
      </Card>
    </Section>
  </>
);
