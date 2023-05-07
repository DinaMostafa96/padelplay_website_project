import { PortableTextBlock } from "sanity";

export type blog = {
  _id: string;
  createdAt: Date;
  name: string;
  slug: string;
  image: string;
  content: PortableTextBlock[];
};