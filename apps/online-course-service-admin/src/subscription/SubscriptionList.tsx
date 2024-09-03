import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { AUTHOR_TITLE_FIELD } from "../author/AuthorTitle";
import { SUBSCRIBER_TITLE_FIELD } from "../subscriber/SubscriberTitle";

export const SubscriptionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Subscriptions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <ReferenceField label="Author" source="author.id" reference="Author">
          <TextField source={AUTHOR_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="status" source="status" />
        <ReferenceField
          label="Subscriber"
          source="subscriber.id"
          reference="Subscriber"
        >
          <TextField source={SUBSCRIBER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="subscriptionDate" source="subscriptionDate" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
