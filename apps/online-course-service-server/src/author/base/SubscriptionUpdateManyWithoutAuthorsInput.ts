/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { SubscriptionWhereUniqueInput } from "../../subscription/base/SubscriptionWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class SubscriptionUpdateManyWithoutAuthorsInput {
  @Field(() => [SubscriptionWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SubscriptionWhereUniqueInput],
  })
  connect?: Array<SubscriptionWhereUniqueInput>;

  @Field(() => [SubscriptionWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SubscriptionWhereUniqueInput],
  })
  disconnect?: Array<SubscriptionWhereUniqueInput>;

  @Field(() => [SubscriptionWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SubscriptionWhereUniqueInput],
  })
  set?: Array<SubscriptionWhereUniqueInput>;
}

export { SubscriptionUpdateManyWithoutAuthorsInput as SubscriptionUpdateManyWithoutAuthorsInput };
