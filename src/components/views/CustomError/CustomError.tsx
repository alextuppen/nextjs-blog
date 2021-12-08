import Image from "next/image";
import { Section } from "@layout";
import { CustomErrorProps } from "./CustomError.types";
import styles from "./CustomError.module.scss";

export const CustomError = ({ code, text }: CustomErrorProps) => (
  <Section className={styles.root}>
    <div className={styles.grid}>
      <div className={styles.logo}>
        <Image
          src="/logo/white.svg"
          alt="Alex Tuppen logo"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className={styles.textWrapper}>
        <h1 className={styles.code}>{code}</h1>
        <h2 className={styles.text}>{text}</h2>
      </div>
    </div>
  </Section>
);
