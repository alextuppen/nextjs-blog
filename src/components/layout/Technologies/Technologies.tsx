import { useState } from "react";
import Image from "next/image";
import AnimateHeight from "react-animate-height";
import { BsChevronDoubleDown, BsChevronDoubleUp } from "react-icons/bs";
import { useMediaQuery } from "hooks";
import { BP_QUERY_SMALL } from "@constants";
import { Button } from "@input";
import { Divider } from "@layout";
import { TechnologiesProps } from "./Technologies.types";
import { technologiesLookup } from "./technologiesLookup";
import styles from "./Technologies.module.scss";

export const Technologies = ({ technologies }: TechnologiesProps) => {
  const [height, setHeight] = useState<number | string>(0);
  const isSmallBP = useMediaQuery(BP_QUERY_SMALL);

  const count = technologies.length;

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
        src: technologiesLookup[tech].src,
        title: technologiesLookup[tech].title,
        alt: technologiesLookup[tech].alt,
      };
    }

    return {
      src: technologiesLookup[tech.lookUp].src,
      title: tech.title,
      alt: tech.alt,
    };
  });

  return (
    <Button
      // @ts-ignore - --count is a CSS variable and so not part of CSSProperties type
      style={{ "--count": count }}
      className={styles.root}
      onClick={handleExpandCollapse}
    >
      <div className={styles.wrapper}>
        <div className={styles.icons}>
          {lookedUpTechs.map((tech) => (
            <div className={styles.iconWrapper} key={tech.title}>
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
          <ul
            className={styles.list}
            style={{
              gridTemplateColumns: count > 8 && isSmallBP ? "1fr 1fr" : "1fr",
            }}
          >
            {lookedUpTechs.map((tech) => (
              <li className={styles.listItem} key={tech.title}>
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
