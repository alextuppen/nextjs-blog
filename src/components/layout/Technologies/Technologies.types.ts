export interface TechnologiesLookUp {
  lookUp: string;
  title: string;
  alt: string;
}

export interface TechnologiesProps {
  technologies?: (string | TechnologiesLookUp)[];
}
