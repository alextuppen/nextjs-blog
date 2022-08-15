export interface TechnologiesLookup {
  [key: string]: {
    src: string;
    title: string;
    alt: string;
  };
}

export interface TechnologyAlternative {
  lookUp: string;
  title: string;
  alt: string;
}

export interface TechnologiesProps {
  technologies: (string | TechnologyAlternative)[];
  variant: "horizontal" | "vertical";
}

export interface LookUpTechnologies {
  technologies: (string | TechnologyAlternative)[];
}

export interface LookedUpTechnologies {
  src: string;
  title: string;
  alt: string;
}

export interface TechnologiesVariantProps {
  technologies: LookedUpTechnologies[];
}
