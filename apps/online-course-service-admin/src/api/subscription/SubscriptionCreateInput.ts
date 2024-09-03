import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";
import { SubscriberWhereUniqueInput } from "../subscriber/SubscriberWhereUniqueInput";

export type SubscriptionCreateInput = {
  author?: AuthorWhereUniqueInput | null;
  status?: "Option1" | null;
  subscriber?: SubscriberWhereUniqueInput | null;
  subscriptionDate?: Date | null;
};
