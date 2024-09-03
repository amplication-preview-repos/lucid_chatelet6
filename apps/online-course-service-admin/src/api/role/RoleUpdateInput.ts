import { AdminUpdateManyWithoutRolesInput } from "./AdminUpdateManyWithoutRolesInput";

export type RoleUpdateInput = {
  admins?: AdminUpdateManyWithoutRolesInput;
  roleName?: "Option1" | null;
};
