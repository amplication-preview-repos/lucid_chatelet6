import { Subscription } from "../subscription/Subscription";

export type Subscriber = {
  createdAt: Date;
  email: string | null;
  id: string;
  subscriptionDate: Date | null;
  subscriptions?: Array<Subscription>;
  updatedAt: Date;
};
