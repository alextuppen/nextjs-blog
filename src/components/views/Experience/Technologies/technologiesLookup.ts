import { TechnologiesLookup, LookUpTechnologies } from "./Technologies.types";

const technologiesLookup: TechnologiesLookup = {
  apollo: {
    src: "/icons/frameworks/apollo.svg",
    title: "Apollo GraphQL",
    alt: "Apollo GraphQL logo",
  },
  urql: {
    src: "/icons/frameworks/urql.svg",
    title: "URQL",
    alt: "URQL logo",
  },
  codegen: {
    src: "/icons/frameworks/codegen.svg",
    title: "GraphQL code generator",
    alt: "GraphQL code generator logo",
  },
  dotNet: {
    src: "/icons/frameworks/dot-net.svg",
    title: ".Net",
    alt: ".Net logo",
  },
  gatsby: {
    src: "/icons/frameworks/gatsby.svg",
    title: "Gatsby",
    alt: "Gatsby logo",
  },
  nextjs: {
    src: "/icons/frameworks/nextjs.svg",
    title: "NextJS",
    alt: "NextJS logo",
  },
  react: {
    src: "/icons/frameworks/react.svg",
    title: "React",
    alt: "React logo",
  },
  graphql: {
    src: "/icons/infrastructure/graphql.svg",
    title: "GraphQL",
    alt: "GraphQL logo",
  },
  node: {
    src: "/icons/infrastructure/node.svg",
    title: "Node.JS",
    alt: "Node.JS logo",
  },
  postgresql: {
    src: "/icons/infrastructure/postgresql.svg",
    title: "PostgreSQL",
    alt: "PostgreSQL logo",
  },
  sccm: {
    src: "/icons/infrastructure/sccm.svg",
    title: "SCCM",
    alt: "SCCM logo",
  },
  cSharp: {
    src: "/icons/languages/csharp.svg",
    title: "C#",
    alt: "C# logo",
  },
  css: {
    src: "/icons/languages/css.svg",
    title: "CSS",
    alt: "CSS logo",
  },
  html: {
    src: "/icons/languages/html.svg",
    title: "HTML",
    alt: "HTML logo",
  },
  javascript: {
    src: "/icons/languages/javascript.svg",
    title: "JavaScript",
    alt: "JavaScript logo",
  },
  powerShell: {
    src: "/icons/languages/powershell.svg",
    title: "PowerShell",
    alt: "PowerShell logo",
  },
  typescript: {
    src: "/icons/languages/typescript.svg",
    title: "TypeScript",
    alt: "TypeScript logo",
  },
  aws: {
    src: "/icons/platforms/aws.svg",
    title: "AWS",
    alt: "Amazon Web Services logo",
  },
  azure: {
    src: "/icons/platforms/azure.svg",
    title: "Azure",
    alt: "Azure logo",
  },
  heroku: {
    src: "/icons/platforms/heroku.svg",
    title: "Heroku",
    alt: "Heroku logo",
  },
  eslint: {
    src: "/icons/tools/eslint.svg",
    title: "ESLint",
    alt: "ESLint logo",
  },
  git: {
    src: "/icons/tools/git.svg",
    title: "Git",
    alt: "Git logo",
  },
  npm: {
    src: "/icons/tools/npm.svg",
    title: "NPM",
    alt: "Node Package Manager logo",
  },
  prettier: {
    src: "/icons/tools/prettier.svg",
    title: "Prettier",
    alt: "Prettier logo",
  },
  yarn: {
    src: "/icons/tools/yarn.svg",
    title: "Yarn",
    alt: "Yarn logo",
  },
};

export const lookUpTechnologies = ({ technologies }: LookUpTechnologies) =>
  technologies.map((tech) => {
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
