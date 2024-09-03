import { SortOrder } from "../../util/SortOrder";

export type SubscriptionOrderByInput = {
  authorId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  subscriberId?: SortOrder;
  subscriptionDate?: SortOrder;
  updatedAt?: SortOrder;
};
