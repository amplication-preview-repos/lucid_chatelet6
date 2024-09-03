import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";

export type AnalyticsUpdateInput = {
  author?: AuthorWhereUniqueInput | null;
  coursesSold?: number | null;
  lastSaleDate?: Date | null;
  subscribersCount?: number | null;
  totalEarnings?: number | null;
};
