import { Course } from "../course/Course";
import { Subscription } from "../subscription/Subscription";

export type Author = {
  bio: string | null;
  courses?: Array<Course>;
  createdAt: Date;
  id: string;
  name: string | null;
  subscriptions?: Array<Subscription>;
  updatedAt: Date;
};
