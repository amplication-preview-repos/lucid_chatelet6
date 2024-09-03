import { SortOrder } from "../../util/SortOrder";

export type SubscriberOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  subscriptionDate?: SortOrder;
  updatedAt?: SortOrder;
};
