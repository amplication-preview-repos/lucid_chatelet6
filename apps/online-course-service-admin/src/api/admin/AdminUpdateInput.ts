import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";

export type AdminUpdateInput = {
  password?: string | null;
  role?: RoleWhereUniqueInput | null;
  username?: string | null;
};
