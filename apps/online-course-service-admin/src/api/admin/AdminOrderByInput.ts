import { SortOrder } from "../../util/SortOrder";

export type AdminOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  password?: SortOrder;
  roleId?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
