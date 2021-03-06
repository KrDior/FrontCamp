import { Url } from 'url';

export interface NewsSource {
  id: string;
  name: string;
  description?: string;
  url?: string;
  category?: string;
  language?: string;
  country?: string;
}

export interface NewsItem {
  _id?: string;
  isLocalNews?: boolean;
  source?: {
    id?: string,
    name?: string,
  };
  author?: string;
  title: string;
  description: string;
  url?: string;
  urlToImage?: string;
  publishedAt?: string;
  content?: string;
  pictureFile?: any;
}

export interface User {
  name: string;
  email?: string;
  password?: string;
}
