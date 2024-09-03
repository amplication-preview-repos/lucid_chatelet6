import { SortOrder } from "../../util/SortOrder";

export type AuthorOrderByInput = {
  bio?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  subdomain?: SortOrder;
  updatedAt?: SortOrder;
};
