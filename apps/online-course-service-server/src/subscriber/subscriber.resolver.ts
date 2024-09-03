import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SubscriberResolverBase } from "./base/subscriber.resolver.base";
import { Subscriber } from "./base/Subscriber";
import { SubscriberService } from "./subscriber.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Subscriber)
export class SubscriberResolver extends SubscriberResolverBase {
  constructor(
    protected readonly service: SubscriberService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
