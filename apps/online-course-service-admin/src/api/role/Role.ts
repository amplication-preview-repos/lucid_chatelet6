import { Admin } from "../admin/Admin";

export type Role = {
  admins?: Array<Admin>;
  createdAt: Date;
  id: string;
  roleName?: "Option1" | null;
  updatedAt: Date;
};
