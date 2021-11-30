interface TechLookUp {
  lookUp: string;
  title: string;
  alt: string;
}

interface Experience {
  title: string;
  organisation: string;
  location: string;
  dateRange: string;
  roleType: string;
  technologies?: (string | TechLookUp)[];
  description: string[];
}

export interface ExperienceProps {
  experience: Experience;
}
