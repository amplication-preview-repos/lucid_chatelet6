import { Author } from "../author/Author";

export type Course = {
  author?: Author | null;
  createdAt: Date;
  description: string | null;
  id: string;
  title: string | null;
  updatedAt: Date;
};
