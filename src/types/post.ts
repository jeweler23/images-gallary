import type { IComment } from './comment';

export interface IPost {
  id: number;
  title: string;
  description: string;
  subtitle: string;
  image: string;
  tags: string[];
  create_date_post: string;
  timeRead: number;
  comments: IComment[];
}
