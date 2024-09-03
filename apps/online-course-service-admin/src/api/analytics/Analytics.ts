import { Author } from "../author/Author";

export type Analytics = {
  author?: Author | null;
  coursesSold: number | null;
  createdAt: Date;
  id: string;
  lastSaleDate: Date | null;
  subscribersCount: number | null;
  totalEarnings: number | null;
  updatedAt: Date;
};
