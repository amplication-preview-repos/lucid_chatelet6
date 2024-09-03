import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";

export type AdminWhereInput = {
  id?: StringFilter;
  password?: StringNullableFilter;
  role?: RoleWhereUniqueInput;
  username?: StringNullableFilter;
};
