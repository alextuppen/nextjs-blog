import { Section } from "@layout";
import { Card, Technologies } from "@layout";
import experiences from "./experiences";
import education from "./education";
import projects from "./projects";
import { RoleDetails } from "./RoleDetails/RoleDetails";
import styles from "./Home.module.scss";

export const Home = () => (
  <>
    <Section>
      <h2>Experience</h2>
      {experiences.map(({ details, technologies, description }) => (
        <Card className={styles.card}>
          <RoleDetails details={details} />
          {technologies && <Technologies technologies={technologies} />}
          {description.length > 0 && <p>{description.join("")}</p>}
        </Card>
      ))}
    </Section>
    <Section>
      <h2>Projects</h2>
      {projects.map(({ title, technologies, description }) => (
        <Card className={styles.card}>
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
          <RoleDetails details={edu} />
        ))}
      </Card>
    </Section>
  </>
);
