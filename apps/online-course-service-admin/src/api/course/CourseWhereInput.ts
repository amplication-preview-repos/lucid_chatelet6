import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CourseWhereInput = {
  author?: AuthorWhereUniqueInput;
  description?: StringNullableFilter;
  id?: StringFilter;
  title?: StringNullableFilter;
};
