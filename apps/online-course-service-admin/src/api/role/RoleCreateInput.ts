import { AdminCreateNestedManyWithoutRolesInput } from "./AdminCreateNestedManyWithoutRolesInput";

export type RoleCreateInput = {
  admins?: AdminCreateNestedManyWithoutRolesInput;
  roleName?: "Option1" | null;
};
