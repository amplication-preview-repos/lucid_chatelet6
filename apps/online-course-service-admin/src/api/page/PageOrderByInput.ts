import { SortOrder } from "../../util/SortOrder";

export type PageOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  mediaUrl?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
