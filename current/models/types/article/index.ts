import type Category from "~/models/types/_base/category";
import type Tag from "~/models/types/_base/tag";
import type Media from "~/models/types/_base/media";

export default interface Article {
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
    tags: {
      data: Tag[];
    } | null;
    media: Media | null;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  }
}
