import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { AUTHOR_TITLE_FIELD } from "./AuthorTitle";
import { SUBSCRIBER_TITLE_FIELD } from "../subscriber/SubscriberTitle";

export const AuthorShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="bio" source="bio" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="subdomain" source="subdomain" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Analytics"
          target="authorId"
          label="AnalyticsItems"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="author"
              source="author.id"
              reference="Author"
            >
              <TextField source={AUTHOR_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="coursesSold" source="coursesSold" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="lastSaleDate" source="lastSaleDate" />
            <TextField label="subscribersCount" source="subscribersCount" />
            <TextField label="totalEarnings" source="totalEarnings" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Course"
          target="authorId"
          label="Courses"
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
            <TextField label="description" source="description" />
            <TextField label="ID" source="id" />
            <TextField label="title" source="title" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Subscription"
          target="authorId"
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
