import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { SubscriptionListRelationFilter } from "../subscription/SubscriptionListRelationFilter";

export type SubscriberWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  subscriptionDate?: DateTimeNullableFilter;
  subscriptions?: SubscriptionListRelationFilter;
};
