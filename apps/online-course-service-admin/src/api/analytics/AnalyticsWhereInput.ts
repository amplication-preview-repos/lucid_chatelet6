import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type AnalyticsWhereInput = {
  author?: AuthorWhereUniqueInput;
  coursesSold?: IntNullableFilter;
  id?: StringFilter;
  lastSaleDate?: DateTimeNullableFilter;
  subscribersCount?: IntNullableFilter;
  totalEarnings?: FloatNullableFilter;
};
