import Image from "next/image";
import { useRouter } from "next/router";
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
import { Button, ButtonVariants } from "@input";
import { HeroGrid } from "./HeroGrid/HeroGrid";
import { MenuBurger } from "./MenuBurger/MenuBurger";
import styles from "./Header.module.scss";

const internalLinks = [
  {
    link: "/experience",
    text: "Experience",
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
          <div className={styles.menuInternal}>
            {internalLinks.map(({ link, text }) => (
              <MenuItem {...menu} as={Button} href={link} key={link}>
                <span>{text}</span>
              </MenuItem>
            ))}
            <MenuSeparator {...menu} className={styles.menuSeperator} />
          </div>
          {externalLinks.map(({ link, text }) => (
            <MenuItem {...menu} as={Button} href={link} external key={link}>
              <span>{text}</span>
            </MenuItem>
          ))}
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
      <div className={styles.root}>
        <Toolbar {...toolbar} className={styles.navBar}>
          <ToolbarItem
            {...toolbar}
            className={styles.homeLink}
            as={Button}
            variant={ButtonVariants.Text}
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
            <div className={styles.toolbarInternal}>
              {internalLinks.map(({ link, text }) => (
                <ToolbarItem
                  {...toolbar}
                  as={Button}
                  variant={ButtonVariants.Text}
                  href={link}
                  key={link}
                >
                  <span>{text}</span>
                </ToolbarItem>
              ))}
            </div>
            <div className={styles.toolbarExternal}>
              <ToolbarSeparator
                {...toolbar}
                className={styles.toolbarSeperator}
              />
              {externalLinks.map(({ link, text }) => (
                <ToolbarItem
                  {...toolbar}
                  as={Button}
                  variant={ButtonVariants.Text}
                  href={link}
                  external
                  key={link}
                >
                  <span>{text}</span>
                </ToolbarItem>
              ))}
            </div>
            <div className={styles.buttonWrapper}>
              <ToolbarItem {...toolbar} as={DropDown} />
            </div>
          </div>
        </Toolbar>
      </div>
    </header>
  );
};
