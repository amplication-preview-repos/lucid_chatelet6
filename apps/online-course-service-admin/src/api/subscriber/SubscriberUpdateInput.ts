import { SubscriptionUpdateManyWithoutSubscribersInput } from "./SubscriptionUpdateManyWithoutSubscribersInput";

export type SubscriberUpdateInput = {
  email?: string | null;
  subscriptionDate?: Date | null;
  subscriptions?: SubscriptionUpdateManyWithoutSubscribersInput;
};
