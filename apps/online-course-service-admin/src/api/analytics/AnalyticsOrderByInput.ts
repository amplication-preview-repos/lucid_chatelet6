import { SortOrder } from "../../util/SortOrder";

export type AnalyticsOrderByInput = {
  authorId?: SortOrder;
  coursesSold?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  lastSaleDate?: SortOrder;
  subscribersCount?: SortOrder;
  totalEarnings?: SortOrder;
  updatedAt?: SortOrder;
};
