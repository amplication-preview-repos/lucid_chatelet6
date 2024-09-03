import { AnalyticsUpdateManyWithoutAuthorsInput } from "./AnalyticsUpdateManyWithoutAuthorsInput";
import { CourseUpdateManyWithoutAuthorsInput } from "./CourseUpdateManyWithoutAuthorsInput";
import { SubscriptionUpdateManyWithoutAuthorsInput } from "./SubscriptionUpdateManyWithoutAuthorsInput";

export type AuthorUpdateInput = {
  analyticsItems?: AnalyticsUpdateManyWithoutAuthorsInput;
  bio?: string | null;
  courses?: CourseUpdateManyWithoutAuthorsInput;
  name?: string | null;
  subdomain?: string | null;
  subscriptions?: SubscriptionUpdateManyWithoutAuthorsInput;
};
