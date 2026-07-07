export interface Event {
  id: string;

  title: string;

  description: string;

  image: string;

  club: string;

  location: string;

  startDate: string;

  endDate: string;

  status: "draft" | "published" | "archived";

  featured: boolean;
}