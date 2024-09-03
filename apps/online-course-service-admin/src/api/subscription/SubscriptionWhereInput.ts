import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { SubscriberWhereUniqueInput } from "../subscriber/SubscriberWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type SubscriptionWhereInput = {
  author?: AuthorWhereUniqueInput;
  id?: StringFilter;
  status?: "Option1";
  subscriber?: SubscriberWhereUniqueInput;
  subscriptionDate?: DateTimeNullableFilter;
};
