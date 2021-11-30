import Image from "next/image";
import { Card } from "@layout";
import { ExperienceProps } from "./Experience.types";
import techLookup from "./techLookup";
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
}: ExperienceProps) => {
  const lookedUpTechs =
    technologies &&
    technologies.map((tech) => {
      if (typeof tech === "string") {
        return {
          src: techLookup[tech].src,
          title: techLookup[tech].title,
          alt: techLookup[tech].alt,
        };
      } else {
        return {
          src: techLookup[tech.lookUp].src,
          title: tech.title,
          alt: tech.alt,
        };
      }
    });

  return (
    <Card>
      <h3>{title}</h3>
      <div className={styles.details}>
        <span className={styles.organisation}>{organisation}</span>
        <span className={styles.location}>{location}</span>
        <span className={styles.dateRange}>{dateRange}</span>
        <span className={styles.roleType}>{roleType}</span>
      </div>
      {lookedUpTechs && (
        <div className={styles.techWrapper}>
          <div className={styles.icons}>
            {lookedUpTechs.map((tech) => (
              <div className={styles.iconWrapper}>
                <Image
                  src={tech.src}
                  alt={tech.alt}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            ))}
          </div>
          <ul className={styles.list}>
            {lookedUpTechs.map((tech) => (
              <li className={styles.listItem}>
                <div className={styles.iconWrapper}>
                  <Image
                    src={tech.src}
                    alt={tech.alt}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <span>{tech.title}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      <p>{description.join()}</p>
    </Card>
  );
};
