import Image from "next/image";
import styles from "./Footer.module.scss";

export const Footer = () => (
  <footer className={styles.root}>
    <div className={styles.logo}>
      <Image
        src="/logo/white.svg"
        alt="Alex Tuppen logo"
        layout="fill"
        objectFit="contain"
      />
    </div>
    <p>Copyright © 2020 Alex Tuppen</p>
    <p>Published under the GNU GPL v3 license</p>
  </footer>
);
