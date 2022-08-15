import Image from "next/image";
import styles from "./Technologies.module.scss";
import { lookUpTechnologies } from "./technologiesLookup";
import { TechnologiesProps } from "./Technologies.types";

export const Technologies = ({ technologies }: TechnologiesProps) => {
  const lookedUpTechs = lookUpTechnologies({ technologies });

  return (
    <div className={styles.root}>
      <ul className={styles.wrapper}>
        {lookedUpTechs.map((tech) => (
          <li key={tech.title} className={styles.tech}>
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
  );
};
