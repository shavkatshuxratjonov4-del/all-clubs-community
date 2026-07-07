export interface News {
  id: string;

  title: string;

  excerpt: string;

  content: string;

  image: string;

  club: string;

  author: string;

  publishedAt: string;

  featured: boolean;

  status: "draft" | "published";
}