interface Details {
  organisation: string;
  location: string;
  dateRange: string;
  roleType: string;
}

export interface DetailsProps {
  title: string;
  details?: Details;
}
