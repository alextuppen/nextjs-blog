export interface TechnologiesLookup {
  [key: string]: {
    src: string;
    title: string;
    alt: string;
  };
}

export interface TechnologAlternative {
  lookUp: string;
  title: string;
  alt: string;
}

export interface TechnologiesProps {
  technologies: (string | TechnologAlternative)[];
}
