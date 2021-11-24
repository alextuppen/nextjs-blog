import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import {
  useMenuState,
  Menu,
  MenuItem,
  MenuButton,
  MenuSeparator,
} from "reakit/Menu";
import { URL_LINKEDIN, URL_INSTAGRAM, URL_GITHUB } from "@constants";
import { Button } from "@input";
import { Divider } from "@layout";
import { HeroGrid } from "./HeroGrid/HeroGrid";
import { MenuBurger } from "./MenuBurger/MenuBurger";
import styles from "./Header.module.scss";

export const Header = () => {
  const router = useRouter();
  const menu = useMenuState();
  const [menuOpen, setMenuOpen] = useState(false);

  console.log(menu);

  const handleMenuToggle = () => setMenuOpen(!menuOpen);

  const internalLinks = (
    <Link href="/recipes">
      <span>Recipes</span>
    </Link>
  );

  const externalLinks = (
    <>
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
    </>
  );

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
          <div className={styles.internalLinks}>{internalLinks}</div>
          <div className={styles.externalLinks}>{externalLinks}</div>
          <div className={styles.buttonWrapper}>
            <MenuButton {...menu} className={styles.button}>
              <MenuBurger open={menu.visible} />
            </MenuButton>
            <Menu {...menu} className={styles.menu}>
              <MenuItem
                {...menu}
                onClick={() => {
                  menu.hide();
                  console.log("clicked on button");
                }}
              >
                Button
              </MenuItem>
              <MenuItem {...menu} as="a" href="#" onClick={menu.hide}>
                Link
              </MenuItem>
            </Menu>
          </div>
        </div>
      </div>
    </header>
  );
};
