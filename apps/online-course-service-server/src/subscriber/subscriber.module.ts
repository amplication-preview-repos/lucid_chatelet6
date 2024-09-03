import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SubscriberModuleBase } from "./base/subscriber.module.base";
import { SubscriberService } from "./subscriber.service";
import { SubscriberController } from "./subscriber.controller";
import { SubscriberResolver } from "./subscriber.resolver";

@Module({
  imports: [SubscriberModuleBase, forwardRef(() => AuthModule)],
  controllers: [SubscriberController],
  providers: [SubscriberService, SubscriberResolver],
  exports: [SubscriberService],
})
export class SubscriberModule {}
