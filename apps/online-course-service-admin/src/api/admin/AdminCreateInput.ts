import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";

export type AdminCreateInput = {
  password?: string | null;
  role?: RoleWhereUniqueInput | null;
  username?: string | null;
};
