import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

import { AuthorTitle } from "../author/AuthorTitle";

export const AnalyticsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="author.id" reference="Author" label="author">
          <SelectInput optionText={AuthorTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="coursesSold" source="coursesSold" />
        <DateTimeInput label="lastSaleDate" source="lastSaleDate" />
        <NumberInput
          step={1}
          label="subscribersCount"
          source="subscribersCount"
        />
        <NumberInput label="totalEarnings" source="totalEarnings" />
      </SimpleForm>
    </Create>
  );
};
