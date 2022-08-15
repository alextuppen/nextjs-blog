import { Card, Section } from "@layout";
import React from "react";
import { experiences, education } from "./static-content";
import { Details } from "./Details";
import { Technologies } from "./Technologies";
import styles from "./Experience.module.scss";

export const Experience = () => (
  <>
    <Section>
      <h2>Experience</h2>
      {experiences.map(({ title, details, technologies, description }) => (
        <Card className={styles.techCard} key={details.dateRange}>
          <Details
            details={details}
            variant="primary"
            radiusBottomLeft={!technologies}
          />
          <h3 className={styles.title}>{title}</h3>
          {description.length > 0 ? (
            <p className={styles.description}>{description.join("")}</p>
          ) : (
            <p className={styles.emptyDescription}>Description coming soon!</p>
          )}
          {technologies && <Technologies technologies={technologies} />}
        </Card>
      ))}
    </Section>
    {/* <Section>
        <h2>Projects</h2>
        {projects.map(({ title, technologies, description }) => (
          <Card className={styles.card} key={title}>
            <Details title={title} />
            {technologies && (
              <Technologies technologies={technologies} variant="horizontal" />
            )}
            {description.length > 0 && <p>{description.join("")}</p>}
          </Card>
        ))}
      </Section> */}
    <Section>
      <h2>Education</h2>
      <Card className={`${styles.card} ${styles.educationWrapper}`}>
        {education.map(({ title, details }) => (
          <div className={styles.education} key={title}>
            <h3>{title}</h3>
            <Details details={details} variant="secondary" />
          </div>
        ))}
      </Card>
    </Section>
  </>
);
