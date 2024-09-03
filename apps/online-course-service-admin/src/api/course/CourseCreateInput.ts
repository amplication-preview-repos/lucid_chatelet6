import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";

export type CourseCreateInput = {
  author?: AuthorWhereUniqueInput | null;
  description?: string | null;
  title?: string | null;
};
