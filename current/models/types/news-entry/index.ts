import type Category from "~/models/types/_base/category";
import type Media from "~/models/types/_base/media";

export default interface NewsEntry {
  id: number;
  attributes: {
    locale: string;
    title: string;
    slug: string;
    excerpt: string | null;
    body: string | null;
    category: {
      data: Category
    } | null;
    media: Media | null;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  }
}
