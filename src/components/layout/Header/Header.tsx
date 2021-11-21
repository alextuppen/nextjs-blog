import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { URL_LINKEDIN, URL_INSTAGRAM, URL_GITHUB } from "@constants";
import { Button } from "@input";
import { Divider } from "@layout";
import { HeroGrid } from "./HeroGrid/HeroGrid";
import { MenuBurger } from "./MenuBurger/MenuBurger";
import styles from "./Header.module.scss";

export const Header = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => setMenuOpen(!menuOpen);

  return (
    <header>
      {router.pathname === "/" && <HeroGrid />}
      <div className={styles.navBar}>
        <Link href="/">
          <div className={styles.homeLink}>
            <div className={styles.logo}>
              <Image
                src="/logo/white.svg"
                alt="Alex Tuppen logo"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <span className={styles.homeLinkText}>Alex Tuppen</span>
          </div>
        </Link>
        <div className={styles.links}>
          <div className={styles.internalLinks}>
            <Link href="/recipes">
              <span>Recipes</span>
            </Link>
          </div>
          <div className={styles.externalLinks}>
            <Divider orientation="vertical" />
            <Button href={URL_LINKEDIN} external>
              <span>LinkedIn</span>
            </Button>
            <Button href={URL_INSTAGRAM} external>
              <span>Instagram</span>
            </Button>
            <Button href={URL_GITHUB} external>
              <span>Github</span>
            </Button>
          </div>
          <div className={styles.buttonWrapper}>
            <Button
              onClick={handleMenuToggle}
              icon={<MenuBurger open={menuOpen} />}
              style={{
                border: "none",
                padding: "0px",
              }}
            />
          </div>
        </div>
      </div>
    </header>
  );
};
