import { Role } from "../role/Role";

export type Admin = {
  createdAt: Date;
  id: string;
  password: string | null;
  role?: Role | null;
  updatedAt: Date;
  username: string | null;
};
