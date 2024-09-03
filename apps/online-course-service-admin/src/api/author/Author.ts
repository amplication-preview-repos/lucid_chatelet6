import { Analytics } from "../analytics/Analytics";
import { Course } from "../course/Course";
import { Subscription } from "../subscription/Subscription";

export type Author = {
  analyticsItems?: Array<Analytics>;
  bio: string | null;
  courses?: Array<Course>;
  createdAt: Date;
  id: string;
  name: string | null;
  subdomain: string | null;
  subscriptions?: Array<Subscription>;
  updatedAt: Date;
};
