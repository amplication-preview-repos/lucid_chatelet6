import { CourseCreateNestedManyWithoutAuthorsInput } from "./CourseCreateNestedManyWithoutAuthorsInput";
import { SubscriptionCreateNestedManyWithoutAuthorsInput } from "./SubscriptionCreateNestedManyWithoutAuthorsInput";

export type AuthorCreateInput = {
  bio?: string | null;
  courses?: CourseCreateNestedManyWithoutAuthorsInput;
  name?: string | null;
  subscriptions?: SubscriptionCreateNestedManyWithoutAuthorsInput;
};
