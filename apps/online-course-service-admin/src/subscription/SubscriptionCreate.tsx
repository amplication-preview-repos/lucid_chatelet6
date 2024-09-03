import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { AuthorTitle } from "../author/AuthorTitle";
import { SubscriberTitle } from "../subscriber/SubscriberTitle";

export const SubscriptionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="author.id" reference="Author" label="Author">
          <SelectInput optionText={AuthorTitle} />
        </ReferenceInput>
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput
          source="subscriber.id"
          reference="Subscriber"
          label="Subscriber"
        >
          <SelectInput optionText={SubscriberTitle} />
        </ReferenceInput>
        <DateTimeInput label="subscriptionDate" source="subscriptionDate" />
      </SimpleForm>
    </Create>
  );
};
