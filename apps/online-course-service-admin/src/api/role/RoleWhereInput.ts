import { AdminListRelationFilter } from "../admin/AdminListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type RoleWhereInput = {
  admins?: AdminListRelationFilter;
  id?: StringFilter;
  roleName?: "Option1";
};
