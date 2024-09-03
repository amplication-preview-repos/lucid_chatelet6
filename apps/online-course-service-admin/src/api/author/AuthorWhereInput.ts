import { AnalyticsListRelationFilter } from "../analytics/AnalyticsListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CourseListRelationFilter } from "../course/CourseListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { SubscriptionListRelationFilter } from "../subscription/SubscriptionListRelationFilter";

export type AuthorWhereInput = {
  analyticsItems?: AnalyticsListRelationFilter;
  bio?: StringNullableFilter;
  courses?: CourseListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  subdomain?: StringNullableFilter;
  subscriptions?: SubscriptionListRelationFilter;
};
