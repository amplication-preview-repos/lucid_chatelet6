import { Author } from "../author/Author";
import { Subscriber } from "../subscriber/Subscriber";

export type Subscription = {
  author?: Author | null;
  createdAt: Date;
  id: string;
  status?: "Option1" | null;
  subscriber?: Subscriber | null;
  subscriptionDate: Date | null;
  updatedAt: Date;
};
