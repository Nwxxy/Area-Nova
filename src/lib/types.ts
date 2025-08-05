
export interface Lesson {
  id: number;
  title: string;
  duration?: string;
  url: string;
  completed: boolean;
  type?: 'video' | 'pdf'; 
}

export interface ContentItem {
  id: number;
  title: string;
  description: string;
  image: string;
  slug: string;
  progress: number;
  lessons: Lesson[];
}
