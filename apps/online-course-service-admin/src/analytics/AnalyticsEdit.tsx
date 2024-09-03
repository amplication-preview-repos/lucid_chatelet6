import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

import { AuthorTitle } from "../author/AuthorTitle";

export const AnalyticsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
