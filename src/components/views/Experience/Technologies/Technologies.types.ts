import { TechnologyAlternative } from "../Experience.types";

export interface TechnologiesLookup {
  [key: string]: {
    src: string;
    title: string;
    alt: string;
  };
}

export interface LookUpTechnologies {
  technologies: (string | TechnologyAlternative)[];
}

export interface TechnologiesProps {
  technologies: (string | TechnologyAlternative)[];
}
