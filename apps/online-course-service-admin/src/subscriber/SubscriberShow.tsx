import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { AUTHOR_TITLE_FIELD } from "../author/AuthorTitle";
import { SUBSCRIBER_TITLE_FIELD } from "./SubscriberTitle";

export const SubscriberShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="subscriptionDate" source="subscriptionDate" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Subscription"
          target="subscriberId"
          label="Subscriptions"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Author"
              source="author.id"
              reference="Author"
            >
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
