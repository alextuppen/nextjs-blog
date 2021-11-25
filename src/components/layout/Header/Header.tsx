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
import {
  useToolbarState,
  Toolbar,
  ToolbarItem,
  ToolbarSeparator,
} from "reakit/Toolbar";
import { URL_LINKEDIN, URL_INSTAGRAM, URL_GITHUB } from "@constants";
import { Button } from "@input";
import { Divider } from "@layout";
import { HeroGrid } from "./HeroGrid/HeroGrid";
import { MenuBurger } from "./MenuBurger/MenuBurger";
import styles from "./Header.module.scss";

const internalLinks = [
  {
    link: "/recipes",
    text: "Recipes",
  },
];

const externalLinks = [
  {
    link: URL_LINKEDIN,
    text: "LinkedIn",
  },
  {
    link: URL_INSTAGRAM,
    text: "Instagram",
  },
  {
    link: URL_GITHUB,
    text: "Github",
  },
];

const DropDown = () => {
  const menu = useMenuState({ animated: 250 });

  return (
    <>
      <MenuButton {...menu} className={styles.button}>
        <MenuBurger open={menu.visible} />
      </MenuButton>
      <Menu {...menu}>
        <div className={styles.menu}>
          <div>
            {internalLinks.map(({ link, text }) => (
              <MenuItem {...menu} as={Button} href={link}>
                <span>{text}</span>
              </MenuItem>
            ))}
          </div>
          <div>
            <MenuSeparator {...menu} />
            {externalLinks.map(({ link, text }) => (
              <MenuItem {...menu} as={Button} href={link} external>
                <span>{text}</span>
              </MenuItem>
            ))}
          </div>
        </div>
      </Menu>
    </>
  );
};

export const Header = () => {
  const router = useRouter();
  const toolbar = useToolbarState();

  return (
    <header>
      {router.pathname === "/" && <HeroGrid />}
      <Toolbar {...toolbar} className={styles.navBar}>
        <ToolbarItem
          {...toolbar}
          className={styles.homeLink}
          as={Button}
          href="/"
        >
          <div className={styles.logo}>
            <Image
              src="/logo/white.svg"
              alt="Alex Tuppen logo"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <span className={styles.homeLinkText}>Alex Tuppen</span>
        </ToolbarItem>
        <div className={styles.links}>
          <div className={styles.internalLinks}>
            {internalLinks.map(({ link, text }) => (
              <ToolbarItem {...toolbar} as={Button} href={link}>
                <span>{text}</span>
              </ToolbarItem>
            ))}
          </div>
          <div className={styles.externalLinks}>
            <ToolbarSeparator {...toolbar} />
            {externalLinks.map(({ link, text }) => (
              <ToolbarItem {...toolbar} as={Button} href={link} external>
                <span>{text}</span>
              </ToolbarItem>
            ))}
          </div>
          <div className={styles.buttonWrapper}>
            <ToolbarItem {...toolbar} as={DropDown} />
          </div>
        </div>
      </Toolbar>
    </header>
  );
};
