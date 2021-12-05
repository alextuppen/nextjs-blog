import { useState } from "react";
import Image from "next/image";
import AnimateHeight from "react-animate-height";
import { BsChevronDoubleDown, BsChevronDoubleUp } from "react-icons/bs";
import { Button } from "@input";
import { Divider } from "@layout";
import { TechnologiesProps } from "./Technologies.types";
import techLookup from "./technologiesLookup";
import styles from "./Technologies.module.scss";

export const Technologies = ({ technologies }: TechnologiesProps) => {
  const [height, setHeight] = useState<number | string>(0);

  const handleExpandCollapse = () => {
    if (height === 0) {
      setHeight("auto");
    } else {
      setHeight(0);
    }
  };

  const lookedUpTechs = technologies.map((tech) => {
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
    <Button
      // @ts-ignore - --count is a CSS variable and so not part of CSSProperties type
      style={{ "--count": technologies.length }}
      className={styles.root}
      onClick={handleExpandCollapse}
    >
      <div className={styles.wrapper}>
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
        <AnimateHeight animateOpacity height={height} duration={1000}>
          <Divider className={styles.divider} />
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
      </div>
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
  );
};