import { useState } from "react";
import Image from "next/image";
import AnimateHeight from "react-animate-height";
import { BsChevronDoubleDown, BsChevronDoubleUp } from "react-icons/bs";
import { Button } from "@input";
import { Card, Divider } from "@layout";
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
  const [animationFinished, setAnimationFinished] = useState(false);

  const handleExpandCollapse = () => {
    if (height === 0) {
      setHeight("auto");
    } else {
      setHeight(0);
    }
  };

  const handleToggleAnimationFinished = () => {
    setAnimationFinished(!animationFinished);
  };

  console.log(animationFinished);

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
        <Button className={styles.techWrapper} onClick={handleExpandCollapse}>
          <div
            className={`${styles.icons} ${
              height === 0 ? styles.iconsCollapsed : styles.iconsExtended
            }`}
          >
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
          <AnimateHeight
            animateOpacity
            height={height}
            duration={1000}
            onAnimationEnd={handleToggleAnimationFinished}
            className={`${styles.listWrapper} ${
              height === 0
                ? styles.listWrapperCollapsed
                : styles.listWrapperExtended
            }`}
          >
            <Divider />
            <ul className={styles.list}>
              {lookedUpTechs.map((tech) => (
                <li className={styles.listItem}>
                  <div className={styles.listItemContent}>
                    <div className={styles.iconWrapper}>
                      <Image
                        src={tech.src}
                        alt={tech.alt}
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                    <span>{tech.title}</span>
                  </div>
                </li>
              ))}
            </ul>
          </AnimateHeight>
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
      )}
      <p>{description.join()}</p>
    </Card>
  );
};
