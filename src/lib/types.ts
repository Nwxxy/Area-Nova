export interface ContentItem {
  id: number;
  title: string;
  description: string;
  image: string;
  slug: string;
  progress: number;
  lessons: {
    id: number;
    title: string;
    duration: string;
  }[];
}
