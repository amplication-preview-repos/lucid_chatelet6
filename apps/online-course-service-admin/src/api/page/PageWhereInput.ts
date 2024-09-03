import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type PageWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  mediaUrl?: StringNullableFilter;
  title?: StringNullableFilter;
};
