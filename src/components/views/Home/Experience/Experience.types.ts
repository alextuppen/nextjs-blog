import { TechnologiesLookUp } from "@layout";

interface Experience {
  title: string;
  organisation: string;
  location: string;
  dateRange: string;
  roleType: string;
  technologies?: (string | TechnologiesLookUp)[];
  description: string[];
}

export interface ExperienceProps {
  experience: Experience;
}
