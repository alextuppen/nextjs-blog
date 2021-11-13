import Image from "next/image";
import { Button } from "@input";
import styles from "./HeroGrid.module.scss";

export const HeroGrid = () => (
  <header className={styles.root}>
    <div className={styles.bgWrap}>
      <Image
        alt="Flamingos"
        src="/heros/flamingos.jpg"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />
    </div>
    <div className={styles.grid}>
      <div className={styles.logo}>
        <Image
          src="/logo/white.svg"
          alt="Alex Tuppen logo"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className={styles.titleWrapper}>
        <h1 className={styles.title}>Alex</h1>
        <h1 className={styles.title}>Tuppen</h1>
      </div>
      <h2 className={styles.text}>Full stack developer</h2>
      <div className={styles.buttonWrapper}>
        <Button
          href="https://www.linkedin.com/in/alextuppen/"
          external
          icon={
            <Image
              src="/icons/websites/linkedin.svg"
              alt="LinkedIn logo"
              layout="fill"
            />
          }
        />
        <Button
          href="https://github.com/alextuppen/"
          external
          icon={
            <Image
              src="/icons/websites/github.svg"
              alt="GitHub logo"
              layout="fill"
            />
          }
        />
      </div>
    </div>
  </header>
);
