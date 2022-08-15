interface Details {
  organisation: string;
  location: string;
  startDate: string;
  endDate: string;
  roleType: string;
}

export interface DetailsProps {
  details: Details;
  variant: "primary" | "secondary";
  radiusBottomLeft?: boolean;
}
