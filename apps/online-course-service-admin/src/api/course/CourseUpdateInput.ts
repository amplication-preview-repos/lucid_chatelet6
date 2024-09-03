import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";

export type CourseUpdateInput = {
  author?: AuthorWhereUniqueInput | null;
  description?: string | null;
  title?: string | null;
};
