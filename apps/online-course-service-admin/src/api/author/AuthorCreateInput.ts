import { AnalyticsCreateNestedManyWithoutAuthorsInput } from "./AnalyticsCreateNestedManyWithoutAuthorsInput";
import { CourseCreateNestedManyWithoutAuthorsInput } from "./CourseCreateNestedManyWithoutAuthorsInput";
import { SubscriptionCreateNestedManyWithoutAuthorsInput } from "./SubscriptionCreateNestedManyWithoutAuthorsInput";

export type AuthorCreateInput = {
  analyticsItems?: AnalyticsCreateNestedManyWithoutAuthorsInput;
  bio?: string | null;
  courses?: CourseCreateNestedManyWithoutAuthorsInput;
  name?: string | null;
  subdomain?: string | null;
  subscriptions?: SubscriptionCreateNestedManyWithoutAuthorsInput;
};
