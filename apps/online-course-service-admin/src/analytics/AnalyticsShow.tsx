import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { AUTHOR_TITLE_FIELD } from "../author/AuthorTitle";

export const AnalyticsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="author" source="author.id" reference="Author">
          <TextField source={AUTHOR_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="coursesSold" source="coursesSold" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="lastSaleDate" source="lastSaleDate" />
        <TextField label="subscribersCount" source="subscribersCount" />
        <TextField label="totalEarnings" source="totalEarnings" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
