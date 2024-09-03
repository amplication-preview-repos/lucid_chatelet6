import { SubscriptionCreateNestedManyWithoutSubscribersInput } from "./SubscriptionCreateNestedManyWithoutSubscribersInput";

export type SubscriberCreateInput = {
  email?: string | null;
  subscriptionDate?: Date | null;
  subscriptions?: SubscriptionCreateNestedManyWithoutSubscribersInput;
};
