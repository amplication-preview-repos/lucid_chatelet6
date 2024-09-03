import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CourseListRelationFilter } from "../course/CourseListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { SubscriptionListRelationFilter } from "../subscription/SubscriptionListRelationFilter";

export type AuthorWhereInput = {
  bio?: StringNullableFilter;
  courses?: CourseListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  subscriptions?: SubscriptionListRelationFilter;
};
