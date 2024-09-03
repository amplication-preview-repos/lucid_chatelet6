import { CourseUpdateManyWithoutAuthorsInput } from "./CourseUpdateManyWithoutAuthorsInput";
import { SubscriptionUpdateManyWithoutAuthorsInput } from "./SubscriptionUpdateManyWithoutAuthorsInput";

export type AuthorUpdateInput = {
  bio?: string | null;
  courses?: CourseUpdateManyWithoutAuthorsInput;
  name?: string | null;
  subscriptions?: SubscriptionUpdateManyWithoutAuthorsInput;
};
