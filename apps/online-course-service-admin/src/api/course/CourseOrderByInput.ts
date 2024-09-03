import { SortOrder } from "../../util/SortOrder";

export type CourseOrderByInput = {
  authorId?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
