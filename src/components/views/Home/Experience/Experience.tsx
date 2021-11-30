import { useState } from "react";
import Image from "next/image";
import AnimateHeight from "react-animate-height";
import { BsChevronDoubleDown, BsChevronDoubleUp } from "react-icons/bs";
import { Button } from "@input";
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
  const [height, setHeight] = useState<number | string>(0);

  const handleExpandCollapse = () => {
    if (height === 0) {
      setHeight("auto");
    } else {
      setHeight(0);
    }
  };

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
    <Card className={styles.card}>
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
          <AnimateHeight height={height} duration={1000}>
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
          </AnimateHeight>
          <Button onClick={handleExpandCollapse}>
            {height === 0 ? (
              <span className={styles.expandCollapse}>
                <BsChevronDoubleDown />
                <span>Expand</span>
                <BsChevronDoubleDown />
              </span>
            ) : (
              <span className={styles.expandCollapse}>
                <BsChevronDoubleUp />
                <span>Collapse</span>
                <BsChevronDoubleUp />
              </span>
            )}
          </Button>
        </div>
      )}
      <p>{description.join()}</p>
    </Card>
  );
};
