import { Url } from "url";

export interface NewsSource {
  id: string,
  name: string,
  description: string,
  url: string,
  category: string,
  language: string,
  country: string,
}

export interface NewsItem {
  source: {
    id: string,
    name: string,
  },
  author: string,
  title: string,
  description: string,
  url: string,
  urlToImage: string,
  publishedAt: string,
  content: string,
}
